"use client";
import { useEffect, useRef, useState } from "react";
import { Pencil, Camera, Link2, Plus, X } from "lucide-react";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import toast from "react-hot-toast";
import Image from "next/image";
import { getStroage } from "@/url/storage";

export default function RecentFeatures() {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newItem, setNewItem] = useState({
    bannerTitle: "",
    hyperLink: "",
    imageFile: null,
    imagePreview: null,
  });

  const fileInputsRef = useRef([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `${API_BASE_URL}${ApiRute.currentImage.recentCard}`
        );
        const data = await res.json();
        if (data?.success) setFeatures(data.data);
      } catch (error) {
        console.error("API fetch failed:", error);
        setFeatures([]);
      }
    }
    fetchData();
  }, []);

  const handleInputChange = (index, field, value) => {
    const updated = [...features];
    updated[index][field] = value;
    setFeatures(updated);
  };

  const handleCameraClick = (index) => {
    if (fileInputsRef.current[index]) fileInputsRef.current[index].click();
  };

  const handleFileChange = (index, file) => {
    const updated = [...features];
    if (file) {
      updated[index].newImageFile = file;
      updated[index].imagePreview = URL.createObjectURL(file);
    }
    setFeatures(updated);
  };

  const handleSave = async (index) => {
    const item = features[index];
    const formData = new FormData();
    formData.append("id", item?._id);
    formData.append("title", item?.bannerTitle || "");
    formData.append("hyperLink", item?.hyperLink || "");
    if (item.newImageFile) formData.append("image", item.newImageFile);

    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}${ApiRute.currentImage.update}`, {
        method: "PUT",
        body: formData,
      });
      const result = await res.json();
      if (result.success) toast.success(result.message || "Saved!");
      else toast.error(result.message || "Save failed!");
    } catch (error) {
      console.error("Save failed:", error);
      toast.error("Save failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleAddSubmit = async () => {
    const formData = new FormData();
    formData.append("title", newItem.bannerTitle || "");
    formData.append("hyperLink", newItem.hyperLink || "");
    if (newItem.imageFile) formData.append("image", newItem.imageFile);

    try {
      setLoading(true);
      const res = await fetch(
        `${API_BASE_URL}${ApiRute.currentImage.addWithTitle}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await res.json();
      if (result?.success) {
        toast.success(result?.message || "Added successfully!");
        // Add the new item to features with imagePreview set
        const newFeature = {
          ...result?.data,
          imagePreview: result?.data?.bannerImage || null, // use bannerImage from API
        };
        setFeatures((prev) => [...prev, newFeature]);
        setShowAddModal(false);
        setNewItem({
          bannerTitle: "",
          hyperLink: "",
          imageFile: null,
          imagePreview: null,
        });
      } else toast.error(result.message || "Add failed!");
      async function fetchData() {
        try {
          const res = await fetch(
            `${API_BASE_URL}${ApiRute.currentImage.recentCard}`
          );
          const data = await res.json();
          if (data?.success) setFeatures(data.data);
        } catch (error) {
          console.error("API fetch failed:", error);
          setFeatures([]);
        }
      }
      fetchData();
    } catch (error) {
      console.error("Add failed:", error);
      toast.error("Add failed!");
    } finally {
      setLoading(false);
    }
  };

  const deleteBannerTitle = async (id, public_id) => {
    try {
      if (!id || !public_id) {
        toast.error("Banner information is missing!");
        return;
      }
      const response = await fetch(
        `${API_BASE_URL}${ApiRute.currentImage.deleteWithTitle}?id=${id}&public=${public_id}`,
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
        setFeatures((prev) => prev.filter((f) => f._id !== id));
      } else toast.error(result?.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-10 w-[900px] h-[400px] border-2 border-none overflow-hidden overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Recent Cards</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow flex items-center gap-2"
        >
          <Plus size={16} /> Add New
        </button>
      </div>

      {features.map((item, index) => (
        <div
          key={item?._id || index}
          className="flex flex-col mb-6 p-4 rounded-lg"
          style={{ boxShadow: "2px 2px 5px 5px #f7f3f2" }}
        >
          <div className="flex items-center gap-4 mb-4">
            <a href={`${item?.hyperLink || "#"}`}>
              <div className="w-20 h-20 bg-[#FFF5DC] rounded-lg flex items-center justify-center p-2 overflow-hidden">
                {item?.imagePreview || item?.bannerImage ? (
                  <Image
                    src={item.imagePreview || item.bannerImage}
                    alt={item?.bannerTitle || "Recent"}
                    width={100}
                    height={100}
                    style={{ width: "100px", height: "auto" }}
                    className="object-cover rounded-md"
                  />
                ) : (
                  <div className="w-20 h-20 bg-gray-200 flex items-center justify-center rounded-md">
                    No Image
                  </div>
                )}
              </div>
            </a>
            <span className="text-sm font-medium">{item?.bannerTitle}</span>
          </div>

          <div className="relative mb-3 w-full">
            <input
              value={item?.bannerTitle || ""}
              onChange={(e) =>
                handleInputChange(index, "bannerTitle", e.target.value)
              }
              placeholder="Enter title"
              className="w-full pl-4 pr-10 py-2 border rounded-md shadow-sm text-sm"
            />
            <Pencil
              size={16}
              className="absolute right-3 top-3 text-gray-500"
            />
          </div>

          <div className="relative mb-3 w-full">
            <input
              value={item?.hyperLink || ""}
              onChange={(e) =>
                handleInputChange(index, "hyperLink", e.target.value)
              }
              placeholder="Enter hyperlink"
              className="w-full pl-4 pr-10 py-2 border rounded-md shadow-sm text-sm"
            />
            <Link2 size={16} className="absolute right-3 top-3 text-gray-500" />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleCameraClick(index)}
              className="w-[50px] h-[50px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
            >
              <Camera size={24} className="text-white" />
            </button>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={(el) => (fileInputsRef.current[index] = el)}
              onChange={(e) => handleFileChange(index, e.target.files[0])}
            />
            <button
              onClick={() => handleSave(index)}
              className="bg-green-500 text-white text-sm px-4 py-2 rounded-md shadow cursor-pointer"
            >
              {loading ? "Saving..." : "Save"}
            </button>
            <button
              className="bg-red-500 text-white text-sm px-4 py-2 rounded-md shadow cursor-pointer"
              onClick={() => deleteBannerTitle(item?._id, item?.public_id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white w-[400px] p-6 rounded-xl shadow relative">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-semibold mb-4">Add New Feature</h3>

            <div className="mb-4">
              {newItem?.imagePreview ? (
                <Image
                  src={newItem.imagePreview}
                  alt="Preview"
                  width={128}
                  height={128}
                  style={{ width: "128px", height: "auto" }}
                  className="object-cover rounded-md mb-2"
                />
              ) : (
                <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded-md mb-2">
                  No Image
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setNewItem({
                      ...newItem,
                      imageFile: file,
                      imagePreview: URL.createObjectURL(file),
                    });
                  }
                }}
              />
            </div>

            <input
              value={newItem.bannerTitle}
              onChange={(e) =>
                setNewItem({ ...newItem, bannerTitle: e.target.value })
              }
              placeholder="Enter title"
              className="w-full mb-3 pl-4 py-2 border rounded-md shadow-sm text-sm"
            />

            <input
              value={newItem.hyperLink}
              onChange={(e) =>
                setNewItem({ ...newItem, hyperLink: e.target.value })
              }
              placeholder="Enter hyperlink"
              className="w-full mb-4 pl-4 py-2 border rounded-md shadow-sm text-sm"
            />

            <button
              onClick={handleAddSubmit}
              className="w-full bg-blue-500 text-white py-2 rounded-md"
            >
              {loading ? "Loading..." : "Add"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
