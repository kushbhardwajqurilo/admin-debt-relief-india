"use client";
import { useState } from "react";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import toast from "react-hot-toast";

export default function UploadCSVModal({ isOpen, onClose }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return toast.error("Please select a CSV file");
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("csv", file);

      const res = await fetch(`${API_BASE_URL}${ApiRute.driUser.addUser}`, {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result?.success) {
        toast.success(result?.message);
        onClose();
      } else {
        toast.error(result?.message || "Upload failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">Upload Users</h2>

        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="w-full border p-2 rounded mb-4"
        />
        <small className="text-red-600">Only CSV File.</small>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border bg-gray-100 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            disabled={loading}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
}
