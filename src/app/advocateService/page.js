"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Upload } from "lucide-react";
import { MdClose } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import Header from "../components/Header";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import { getStroage } from "@/url/storage";
import toast from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";

function date(newdate) {
  const x_date = new Date(newdate);
  const formatted = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(x_date);
  return formatted;
}

// ✅ Fixed Modal Component
function Modal({ isOpen, onClose, onUpdate, advocate }) {
  const [updateForm, setUpdateForm] = useState({ name: "", contactNumber: "" });
  const [file, setFile] = useState(null);
  useEffect(() => {
    if (advocate) {
      setUpdateForm({
        name: advocate.name || "",
        contactNumber: advocate.contactNumber || "",
      });
      setFile(null);
    }
  }, [advocate]);
  const handleChange = (e) => {
    setUpdateForm({ ...updateForm, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", updateForm?.name);
      formData.append("contact", updateForm?.contactNumber);
      formData.append("id", advocate?._id);
      if (file) formData.append("image", file);

      const response = await fetch(
        `${API_BASE_URL}${ApiRute.advocate.update}`,
        {
          method: "PUT",
          headers: {
            authorization: `Bearer ${getStroage().token}`,
          },
          body: formData,
        }
      );

      const result = await response.json();

      if (result?.success) {
        toast.success(result?.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      {" "}
      <div className="bg-white p-6 rounded-xl w-[400px] relative">
        {" "}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600"
        >
          {" "}
          <MdClose size={22} />{" "}
        </button>{" "}
        <h2 className="text-xl font-bold mb-4">Update Advocate</h2>{" "}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {" "}
          <input
            type="text"
            name="name"
            value={updateForm.name}
            onChange={handleChange}
            placeholder="Name"
            className="border px-3 py-2 rounded"
          />{" "}
          <input
            type="text"
            name="contactNumber"
            value={updateForm.contactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
            className="border px-3 py-2 rounded"
          />{" "}
          <input
            type="file"
            onChange={handleFileChange}
            className="border px-3 py-2 rounded"
          />{" "}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded mt-2"
          >
            {" "}
            Update{" "}
          </button>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
}

export default function AdvocateService() {
  const [advocates, setAdvocates] = useState([]);
  const [form, setForm] = useState({ name: "", contactNumber: "" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("/user-placeholder.png");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [customeAdvocate, setCustomeAdvocate] = useState({ message: "" });
  const [timing, setTiming] = useState("");
  const [loads, setLoadings] = useState(false);
  const [isDelet, setIsDelete] = useState(false);
  // ✅ Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdvocate, setSelectedAdvocate] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const getAdvocates = async () => {
    const res = await fetch(`${API_BASE_URL}${ApiRute.advocate.getAll}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${getStroage().token}`,
      },
    });
    const result = await res.json();
    if (!result.success) throw new Error("Failed to fetch advocates");
    return result;
  };

  const addAdvocate = async (formData) => {
    const res = await fetch(`${API_BASE_URL}${ApiRute.advocate.add}`, {
      method: "POST",
      headers: { authorization: `Bearer ${getStroage().token}` },
      body: formData,
    });
    return res.json();
  };

  const callYourAdvoateSetup = async (e) => {
    e.preventDefault();
    try {
      setLoadings(true);
      const res = await fetch(`${API_BASE_URL}${ApiRute.advocate.call_now}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${getStroage().token}`,
        },
        body: JSON.stringify({ message: customeAdvocate.message }),
      });
      const result = await res.json();
      result?.success
        ? toast.success(result?.message)
        : toast.error(result?.message);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoadings(false);
    }
  };

  const handleDeleteAdvocate = async (id) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}${ApiRute.advocate.delete}/${id}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${getStroage().token}`,
          },
        }
      );
      const result = await response.json();
      if (result?.success) {
        toast.success(result?.message);
        const fetchAdvocates = async () => {
          try {
            const result = await getAdvocates();
            setAdvocates(result.data);
          } catch (e) {
            setError("Failed to load advocates. Please try again.");
          } finally {
            setLoading(false);
          }
        };
        fetchAdvocates();
      } else {
        toast.error(result?.error);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchAdvocates = async () => {
      try {
        const result = await getAdvocates();
        setAdvocates(result.data);
      } catch (e) {
        setError("Failed to load advocates. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchAdvocates();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.contactNumber) {
      toast.error("All fields are required");
      return;
    }
    const data = new FormData();
    data.append("name", form.name);
    data.append("contactNumber", form.contactNumber);
    if (selectedImage) data.append("image", selectedImage);

    try {
      setButtonLoading(true);
      const result = await addAdvocate(data);
      if (result?.success) {
        setForm({ name: "", contactNumber: "" });
        setSelectedImage(null);
        setPreviewUrl("/user-placeholder.png");
        toast.success("Advocate added successfully!");

        // ✅ Refresh the full advocate list after success
        const updatedList = await getAdvocates();
        if (updatedList?.success) {
          setAdvocates(updatedList.data);
        }
      } else {
        toast.error(result?.message || "Upload failed.");
      }
    } catch (error) {
      console.error("advocate error", error);
      toast.error("An error occurred.");
    } finally {
      setButtonLoading(false);
    }
  };

  const handleTiming = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}${ApiRute.advocate.timing}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${getStroage().token}`,
        },
        body: JSON.stringify({ timing }),
      });
      const result = await res.json();
      result?.success
        ? toast.success(result?.message)
        : toast.error(result?.message);
    } catch (error) {
      console.error("advocate error", error);
      toast.error("An error occurred.");
    }
  };

  // ✅ Update Advocate
  const handleUpdate = (updatedData) => {
    setAdvocates((prev) =>
      prev.map((a) =>
        a._id === selectedAdvocate._id ? { ...a, ...updatedData } : a
      )
    );
    toast.success("Advocate updated!");
    setIsModalOpen(false);
  };

  //  Delete Advocate
  const handleDelete = async (advocate) => {
    try {
      setDeletingId(advocate._id); // only this button shows loading
      // make your delete API call here
      const res = await fetch(
        `${API_BASE_URL}${ApiRute.advocate.delete}?id=${advocate._id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${getStroage().token}`,
          },
        }
      );
      const result = await res.json();
      if (result?.success) {
        setAdvocates((prev) => prev.filter((a) => a._id !== advocate._id));
        toast.success("Advocate deleted!");
      } else {
        toast.error(result?.message || "Delete failed.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setDeletingId(null); // reset loading
    }
  };

  //
  return (
    <div>
      <Header />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        advocate={selectedAdvocate}
      />

      <div className="min-h-screen bg-gradient-to-b from-[#edf0ff] to-[#edf0ff] flex justify-center text-black gap-2 p-5">
        <div className="w-full flex flex-row items-center h-[500px] justify-center gap-6">
          {/* Form */}
          <div className="w-[30%] bg-white rounded-xl shadow-xl p-6 mt-10 h-[425px]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-30 h-30 rounded-full bg-gray-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                  <Image
                    src={previewUrl}
                    alt="Preview"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
              </div>
              <label className="-mt-6 inline-block bg-gradient-to-r from-[#A020F0] to-[#00E0D0] p-[3px] rounded-md cursor-pointer">
                <span className="bg-[#002366] text-white font-semibold px-6 py-1 rounded-md flex items-center gap-1">
                  Upload <Upload size={16} />
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  hidden
                  name="image"
                />
              </label>
            </div>

            <div className="mt-6 space-y-3 flex flex-col justify-center items-center">
              <input
                autoComplete="off"
                type="text"
                name="name"
                value={form?.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className="w-full px-4 py-2 rounded-xl bg-gray-100 border border-gray-300"
              />
              <input
                autoComplete="off"
                type="text"
                name="contactNumber"
                value={form?.contactNumber}
                onChange={handleChange}
                placeholder="PNS Number"
                className="w-full px-4 py-2 rounded-xl bg-gray-100 border border-gray-300"
              />
              <button
                onClick={handleSubmit}
                className="w-[250px] bg-red-600 text-white py-2 rounded-2xl mt-2 hover:bg-red-700 font-bold shadow"
              >
                {buttonLoading ? "Processing..." : "Add Advocate"}
              </button>
            </div>
          </div>

          {/* Advocate List */}
          <div className="w-[30%] bg-white rounded-xl shadow-xl p-6 mt-10 h-[425px]">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-xl font-bold">Advocate List</h2>
              <h2 className="text-xl font-bold">No. of Users</h2>
            </div>

            {loading && <p>Loading advocates...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && (
              <div className="space-y-4 h-[320px] overflow-y-auto pr-2">
                {advocates?.length > 0 ? (
                  advocates.map((adv, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center border-b pb-2"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-r from-[#A020F0] to-[#00E0D0]">
                          <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                            <Image
                              src={
                                adv?.advocateImage || "/user-placeholder.png"
                              }
                              width={44}
                              height={44}
                              alt={adv?.name}
                              className="rounded-full"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-black text-[16px] leading-4">
                            {adv?.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {new Date(adv?.date).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center flex-row">
                        <p className="bg-[#004AAD] text-white px-2 py-1 rounded-lg text-lg font-bold">
                          {adv?.assignUsers?.length || 0}
                        </p>
                        <button
                          className="text-[#004AAD] px-2 py-1 rounded-lg text-lg cursor-pointer font-bold"
                          onClick={() => {
                            setSelectedAdvocate(adv);
                            setIsModalOpen(true);
                          }}
                        >
                          <FiEdit />
                        </button>
                        <button
                          className="text-[#004AAD] px-2 py-1 rounded-lg text-lg cursor-pointer font-bold hover:text-red-400"
                          onClick={() => handleDeleteAdvocate(adv?._id)}
                        >
                          {deletingId === adv?._id ? (
                            <span className="text-[12px]">Wait..</span>
                          ) : (
                            <RiDeleteBin6Line />
                          )}
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No advocates found. Add one above.</p>
                )}
              </div>
            )}
          </div>

          {/* Contact Info + Call Section */}
          <div className="w-[30%] bg-white rounded-xl shadow-xl p-6 mt-10 h-[425px]">
            <div className="mb-5">
              <h2 className="text-xl font-semibold mb-1">Service Timing</h2>
              <form className="flex flex-col w-full" autoComplete="off">
                <input
                  type="text"
                  placeholder="Available from 9:00 AM - 11:00 AM"
                  className="flex-1 border rounded w-full p-2 text-sm outline-none focus:ring-2 focus:ring-gray-500 mt-1"
                  onChange={(e) => setTiming(e.target.value)}
                />
                <button
                  className="w-[100px] mt-2 p-1 bg-[#004AAD] text-white rounded-sm cursor-pointer hover:bg-white hover:text-[#004AAD] border transition"
                  onClick={handleTiming}
                >
                  Submit
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1">Call Your Advocate</h2>
              <form className="flex flex-col w-full" autoComplete="off">
                <textarea
                  placeholder="Type here..."
                  name="message"
                  className="flex-1 border rounded w-full p-1 text-sm outline-none focus:ring-2 focus:ring-gray-500 mt-1"
                  onChange={(e) =>
                    setCustomeAdvocate((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
                <button
                  className="w-[100px] mt-2 p-1 bg-[#004AAD] text-white rounded-sm cursor-pointer hover:bg-white hover:text-[#004AAD] border transition"
                  onClick={callYourAdvoateSetup}
                >
                  {loads ? "Wait..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
