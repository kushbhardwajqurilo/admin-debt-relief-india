"use client";

import { useState, useEffect, use } from "react";
import Image from "next/image";
import { Phone, Pencil, Upload, MessageCircle } from "lucide-react";
import Header from "../components/Header";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import { getStroage } from "@/url/storage";
import toast from "react-hot-toast";

function date(newdate) {
  const x_date = new Date(newdate);
  const formatted = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(x_date);
  return formatted;
}
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
  console.log("form", formData);
  const res = await fetch(`${API_BASE_URL}${ApiRute.advocate.add}`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${getStroage().token}`,
    },
    body: formData,
  });

  const result = await res.json();
  if (!result.success) throw new Error("Failed to add advocate");
  return result;
};

export default function AdvocateService() {
  const [advocates, setAdvocates] = useState([]);
  const [form, setForm] = useState({
    name: "",
    contactNumber: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("/user-placeholder.png");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);

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
      toast.success("All fields are required");
      return;
    }
    const data = new FormData();
    data.append("name", form.name);
    data.append("contactNumber", form.contactNumber);
    if (selectedImage) {
      data.append("image", selectedImage);
    }

    try {
      setButtonLoading(true);
      const result = await addAdvocate(data);
      if (result?.success) {
        setForm({ name: "", contactNumber: "" });
        setSelectedImage(null);
        setAdvocates((prev) => [result.data, ...prev]);
        setPreviewUrl("/user-placeholder.png");
        toast.success("Advocate added successfully!");
        window.location.reload();
      } else {
        toast.error("Upload failed.");
      }
    } catch (error) {
      console.error("advocate error", error);
      toast.error("An error occurred.");
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#edf0ff] to-[#edf0ff] flex justify-center text-black">
        <div className="w-[450px] flex flex-col items-center gap-6 pt-10">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm">
            <div className="flex flex-col items-center gap-3">
              <div className="w-30 h-30 rounded-full bg-gray-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                  {previewUrl ? (
                    <Image
                      src={previewUrl}
                      alt="Preview"
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                  ) : (
                    <span className="text-gray-400">No Image</span>
                  )}
                  {/* <Image src={previewUrl} alt="user" width={80} height={80}  /> */}
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
                type="text"
                name="name"
                value={form?.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className="w-full px-4 py-2 rounded-xl bg-gray-100 border border-gray-300"
              />
              <input
                type="text"
                name="contactNumber"
                value={form?.contactNumber}
                onChange={handleChange}
                placeholder="PNS Number"
                className="w-full px-4 py-2 rounded-xl bg-gray-100 border border-gray-300"
              />
              {/* <input
                type="text"
                name="whatsappNumber"
                value={form.whatsappNumber}
                onChange={handleChange}
                placeholder="WhatsApp No."
                className="w-full px-4 py-2 rounded-xl bg-gray-100 border border-gray-300"
              /> */}
              <button
                onClick={handleSubmit}
                className="w-[250px] bg-red-600 text-white py-2 rounded-2xl mt-2 hover:bg-red-700 font-bold shadow"
              >
                {buttonLoading ? (
                  <span>Processing....</span>
                ) : (
                  <span> Add Advocate</span>
                )}
              </button>
            </div>
          </div>
          {/* Static Contact Info */}
          {/* <div className="bg-white rounded-xl shadow p-4 w-full max-w-sm">
            <h2 className="text-xl font-bold mb-3">Advocate Contact</h2>
            <div className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded mb-2">
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="text-blue-600" /> +91 0110101011
              </div>
              <Pencil size={16} className="text-gray-600 cursor-pointer" />
            </div>
            <div className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded">
              <div className="flex items-center gap-2 text-gray-700">
                <MessageCircle className="text-green-500" /> +91 0110101011
              </div>
              <Pencil size={16} className="text-gray-600 cursor-pointer" />
            </div>
          </div> */}
        </div>

        {/* Advocate List */}
        <div className="w-[45%] bg-white rounded-xl shadow-xl p-6 mt-10 mr-6 h-[425px]">
          <div className="flex justify-between items-center border-b pb-2 mb-4 ">
            <h2 className="text-xl font-bold">Advocate List</h2>
            <h2 className="text-xl font-bold">No. of Users</h2>
          </div>

          {loading && <p>Loading advocates...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && (
            <div className="space-y-4 h-[320]  overflow-x-hidden overflow-y-auto pr-2 shadow-amber-50">
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
                            src={`${
                              adv?.advocateImage || "/user-placeholder.png"
                            }`}
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
                    <div className="bg-[#004AAD] text-white px-4 py-1 rounded-lg text-lg font-bold">
                      {adv?.assignUsers.length}
                    </div>
                  </div>
                ))
              ) : (
                <p>No advocates found. Add one above.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
