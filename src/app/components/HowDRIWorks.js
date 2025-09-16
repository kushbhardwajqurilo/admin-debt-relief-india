"use client";
import { Pencil, Plus, X } from "lucide-react";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import { use, useEffect, useState } from "react";
import { getStroage } from "@/url/storage";
import toast from "react-hot-toast";
import Image from "next/image";

export default function HowDRIWorks() {
  const [driwork, setDriWorks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedStep, setEditedStep] = useState({
    title: "",
    content: "",
    image: "",
  });

  // Modal state for Add More
  const [showModal, setShowModal] = useState(false);
  const [newStep, setNewStep] = useState({
    title: "",
    content: "",
    image: null,
  });

  // Loading states
  const [saveLoading, setSaveLoading] = useState(false);
  const [deleteLoadingId, setDeleteLoadingId] = useState(null);
  const [addLoading, setAddLoading] = useState(false);

  // Fetch all data
  const howDriWorkApi = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}${ApiRute.driwork.getAll}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${getStroage().token}`,
        },
      });
      const result = await res.json();
      if (result?.success) {
        setDriWorks(result?.data);
      } else {
        setDriWorks([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Save Edited Data
  const handleSave = async (index) => {
    try {
      setSaveLoading(true);
      const updatedSteps = [...driwork];
      updatedSteps[index] = {
        ...updatedSteps[index],
        title: editedStep.title,
        content: editedStep.content,
      };

      const formData = new FormData();
      formData.append("title", updatedSteps[index]?.title);
      formData.append("driId", updatedSteps[index]?._id);
      formData.append("content", updatedSteps[index]?.content);
      formData.append("public_id", updatedSteps[index]?.public_id || "");

      if (editedStep.image) {
        formData.append("image", editedStep.image);
      }

      const res = await fetch(`${API_BASE_URL}${ApiRute.driwork.update}`, {
        method: "PUT",
        headers: {
          authorization: `Bearer ${getStroage().token}`,
        },
        body: formData,
      });

      const result = await res.json();
      if (result?.success) {
        toast.success(result?.message);
        howDriWorkApi();
        setDriWorks(updatedSteps);
      } else {
        toast.error(result?.message);
        console.error("fail", result);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSaveLoading(false);
      setEditingIndex(null);
    }
  };

  // Handle Add More Save
  const handleAddMore = async () => {
    try {
      if (!newStep.title || !newStep.content || !newStep.image) {
        toast("All fields are required!");
        return;
      }
      setAddLoading(true);

      const formData = new FormData();
      formData.append("title", newStep.title);
      formData.append("content", newStep.content);
      formData.append("image", newStep.image);

      const res = await fetch(`${API_BASE_URL}${ApiRute.driwork.add}`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${getStroage().token}`,
        },
        body: formData,
      });

      const result = await res.json();
      if (result?.success) {
        toast.success(result?.message);
        howDriWorkApi();
        setNewStep({ title: "", content: "", image: null });
        setShowModal(false);
      } else {
        toast.error(result?.message);
      }
      setAddLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setAddLoading(false);
    }
  };

  const deleteDriWorks = async (id) => {
    try {
      setDeleteLoadingId(id);
      const res = await fetch(
        `${API_BASE_URL}${ApiRute.driwork.delete}?driId=${id}`,
        {
          method: "Delete",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${getStroage().token}`,
          },
        }
      );
      const result = await res.json();
      if (result?.success) {
        howDriWorkApi();
      } else {
        console.error(result?.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setDeleteLoadingId(null);
    }
  };

  useEffect(() => {
    howDriWorkApi();
  }, []);

  return (
    <>
      <div className=" bg-white p-5 shadow rounded-xl  mt-10 ">
        <h2 className="text-xl font-semibold mb-4">How DRI Works ?</h2>

        {driwork?.map((step, idx) => (
          <div key={idx} className="flex items-start gap-4 mb-4">
            <Image
              src={`${step?.avatar}`}
              alt={step?.title}
              width={70}
              height={70}
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                {editingIndex === idx ? (
                  <input
                    type="text"
                    value={editedStep.title}
                    onChange={(e) =>
                      setEditedStep({ ...editedStep, title: e.target.value })
                    }
                    className="border rounded px-2 py-1 text-sm w-full"
                  />
                ) : (
                  <h3 className="font-bold text-md">{step?.title}</h3>
                )}
                <Pencil
                  size={14}
                  className="text-gray-500 cursor-pointer"
                  onClick={() => {
                    setEditingIndex(idx);
                    setEditedStep({
                      title: step?.title,
                      content: step?.content,
                      image: "",
                    });
                  }}
                />
              </div>

              {editingIndex === idx ? (
                <>
                  <textarea
                    value={editedStep.content}
                    onChange={(e) =>
                      setEditedStep({ ...editedStep, content: e.target.value })
                    }
                    className="border rounded px-2 py-1 text-sm w-full mt-2"
                  />
                  <input
                    type="file"
                    className="border rounded px-2 py-1 text-sm w-full mt-2"
                    onChange={(e) =>
                      setEditedStep({ ...editedStep, image: e.target.files[0] })
                    }
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleSave(idx)}
                      disabled={saveLoading}
                      className="text-sm px-2 py-1 bg-green-500 text-white rounded disabled:opacity-60"
                    >
                      {saveLoading ? "Saving..." : "Save"}
                    </button>
                    <button
                      onClick={() => setEditingIndex(null)}
                      className="text-sm px-2 py-1 bg-gray-300 text-black rounded"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => deleteDriWorks(step._id)}
                      disabled={deleteLoadingId === step._id}
                      className="text-sm px-2 py-1 bg-red-500 text-white rounded disabled:opacity-60"
                    >
                      {deleteLoadingId === step._id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-sm text-gray-600">{step?.content}</p>
              )}
            </div>
          </div>
        ))}

        {/* Add More Button */}
        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded text-sm flex items-center"
        >
          <Plus size={14} className="mr-1" /> Add More
        </button>

        {/* Modal for Add More */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-gray-500"
              >
                <X size={18} />
              </button>
              <h3 className="text-lg font-semibold mb-4">Add New DRI Work</h3>

              <input
                type="text"
                placeholder="Enter Title"
                value={newStep.title}
                onChange={(e) =>
                  setNewStep({ ...newStep, title: e.target.value })
                }
                className="border rounded px-3 py-2 w-full mb-3"
              />

              <textarea
                placeholder="Enter Content"
                value={newStep.content}
                onChange={(e) =>
                  setNewStep({ ...newStep, content: e.target.value })
                }
                className="border rounded px-3 py-2 w-full mb-3"
              />

              <input
                type="file"
                onChange={(e) =>
                  setNewStep({ ...newStep, image: e.target.files[0] })
                }
                className="border rounded px-3 py-2 w-full mb-3"
              />

              <button
                onClick={handleAddMore}
                disabled={addLoading}
                className="bg-green-500 text-white px-3 py-2 rounded w-full disabled:opacity-60"
              >
                {addLoading ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
