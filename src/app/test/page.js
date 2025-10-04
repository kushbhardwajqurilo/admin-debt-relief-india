"use client";
import { useState } from "react";

export default function Home() {
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!files.length) return alert("Please select files");

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Upload Multiple Files
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="border border-gray-300 rounded p-2 cursor-pointer"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
          >
            Upload
          </button>
        </form>
        {message && (
          <p className="mt-4 text-green-600 text-center">{message}</p>
        )}
      </div>
    </div>
  );
}
