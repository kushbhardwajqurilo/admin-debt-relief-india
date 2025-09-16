"use client";

import { Trash2, Plus, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import { getStroage } from "@/url/storage";
import toast from "react-hot-toast";
import Image from "next/image";

export default function CurrentImages() {
  const [images, setImage] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false); // Add More Loading
  const [deleting, setDeleting] = useState(null); // track which id is deleting
  const fileInputRef = useRef();

  // Handle File Selection
  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    setPreviewImage(URL.createObjectURL(file));
    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(`${API_BASE_URL}${ApiRute.currentImage.upload}`, {
        method: "POST",
        body: formData,
        headers: {
          authorization: `Bearer ${getStroage().token}`,
        },
      });

      const result = await res.json();
      if (result?.success) {
        getBanner();
        setPreviewImage(null);
        toast.success(result?.message);
      } else {
        console.error(result);
        toast.error(result?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error uploading image");
    } finally {
      setLoading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // Fetch Banners
  const getBanner = async () => {
    try {
      const res = await fetch(
        `${API_BASE_URL}${ApiRute.currentImage.getbanner}`,
        {
          method: "GET",
        }
      );
      const result = await res.json();
      if (result?.success) {
        setImage(result?.banner);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Delete Image
  const deleteImage = async (public_id) => {
    setDeleting(public_id);
    try {
      const res = await fetch(
        `${API_BASE_URL}${ApiRute.currentImage.delete}?public_id=${public_id}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${getStroage().token}`,
          },
        }
      );

      const result = await res.json();
      if (result?.success) {
        toast.success(result.message);
        getBanner();
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      console.error("Error deleting image:", err);
      toast.error(err.message);
    } finally {
      setDeleting(null);
    }
  };

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Current Images</h2>

      <div className="flex flex-wrap gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-56 h-36 border rounded-xl overflow-hidden"
          >
            <a
              href={src?.hyperLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full h-[150px]"
            >
              <Image
                src={src?.bannerImage}
                alt={`Image ${index}`}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
                priority
              />
            </a>
            <button
              onClick={() => deleteImage(src?.public_id)}
              disabled={deleting === src?.public_id}
              className={`absolute bottom-2 right-2 bg-red-600 text-white px-2 py-1 text-xs rounded flex items-center ${
                deleting === src?.public_id
                  ? "opacity-70 cursor-not-allowed"
                  : ""
              }`}
            >
              {deleting === src?.public_id ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <>
                  <Trash2 size={14} className="mr-1" /> Delete
                </>
              )}
            </button>
          </div>
        ))}

        {/* Add More Button */}
        <div
          onClick={!loading ? triggerFileInput : undefined}
          className="w-56 h-36 border-2 border-dashed flex flex-col items-center justify-center rounded-xl text-gray-500 cursor-pointer"
        >
          {loading ? (
            <Loader2 size={24} className="animate-spin" />
          ) : (
            <>
              <Plus size={24} />
              <span className="mt-2 text-sm">Add More</span>
            </>
          )}
        </div>

        {/* Preview newly selected image */}
        {previewImage && (
          <div className="relative w-56 h-36 border rounded-xl overflow-hidden">
            <Image
              src={`${previewImage}`}
              alt="Preview"
              className="w-full h-full object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw"
            />
          </div>
        )}

        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
