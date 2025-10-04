"use client";
import { useState } from "react";

export default function Home() {
  const [files, setFiles] = useState([]);
  const [statusMessages, setStatusMessages] = useState([]);
  const [loading, setLoading] = useState(false); // new loading state

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
    setStatusMessages([]); // reset previous messages
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!files.length) return alert("Please select files");

    setLoading(true); // start loading
    try {
      // 1️⃣ Request presigned URLs from backend
      const res = await fetch(
        "https://4frnn03l-5000.inc1.devtunnels.ms/api/v1/kyc/get-presignedurl",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            files: files.map((f) => ({
              fileName: f.name,
              fileType: f.type,
              size: f.size,
            })),
          }),
        }
      );

      const urls = await res.json(); // [{uploadURL, fileURL}, ...]

      const uploadedFiles = [];
      const newStatus = [];

      // 2️⃣ Upload each file
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const url = urls[i].uploadURL;

        try {
          await fetch(url, {
            method: "PUT",
            headers: { "Content-Type": file.type },
            body: file,
          });

          uploadedFiles.push(urls[i].fileURL);
        } catch {
          newStatus.push(`${file.name} failed`);
        }

        setStatusMessages([...newStatus]); // update messages after each file
      }

      alert("All files uploaded!");
      console.log("Uploaded file URLs:", uploadedFiles);
      setFiles([]);
    } catch (err) {
      console.error(err);
      alert("Some files failed to upload. Check console for details.");
    } finally {
      setLoading(false); // stop loading
    }
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
            disabled={loading}
            className={`bg-blue-500 text-white font-semibold py-2 rounded transition ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </form>

        {statusMessages.length > 0 && (
          <div className="mt-4">
            {statusMessages.map((msg, i) => (
              <p key={i} className="text-gray-700">
                {msg}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
