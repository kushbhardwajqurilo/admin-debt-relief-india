"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import { getStroage } from "@/url/storage";
import toast from "react-hot-toast";

export default function ReviewAssignModal({
  isOpen,
  onClose,
  userData,
  onAssignSubmit,
}) {
  const [selectedAdvocate, setSelectedAdvocate] = useState(null);
  const [advocte, setAdvocate] = useState([]);
  const [assignedId, setAssignedId] = useState("");
  const [previewImage, setPreviewImage] = useState(null); // image preview state
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
    setAdvocate(result?.data);
  };

  useEffect(() => {
    if (userData?.assignedId) {
      setAssignedId(userData.assignedId);
    }
    getAdvocates();
  }, [userData?.assignedId]);

  if (!isOpen || !userData) return null;

  const handleApproveAssign = async () => {
    const updatedUser = {
      ...userData,
      assignedId,
      assignedAdvocate: selectedAdvocate,
    };
    const payload = {
      kycId: updatedUser?._id,
      advocate_id: updatedUser?.assignedAdvocate._id,
      assign_id: assignedId,
    };
    const res = await fetch(`${API_BASE_URL}${ApiRute.kyc.approve}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${getStroage().token}`,
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    if (result?.success) {
      toast.success(result?.message);
    } else {
      toast.error(result?.message);
    }
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <>
      {/* Main Modal */}
      <div className="fixed inset-0 backdrop-blur-sm bg-white/30 z-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-xl w-full max-w-5xl shadow-lg relative p-6">
          <button
            className="absolute top-3 right-4 text-xl text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            &times;
          </button>

          <div className="flex gap-6">
            {/* User Info */}
            <div className="w-1/3 border p-4 rounded-lg shadow">
              <div className="flex flex-col items-center">
                <Image
                  src={userData.profile || "/user1.jpg"}
                  width={80}
                  height={80}
                  alt="User"
                  className="rounded-full"
                />
                <h2 className="mt-3 text-xl font-bold text-[#00479C]">
                  {userData.name || "User Name"}
                </h2>
              </div>
              <div className="mt-4 text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <label className="font-medium whitespace-nowrap">
                    Assign ID:
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded px-3 py-1 w-[130px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={assignedId}
                    onChange={(e) => setAssignedId(e.target.value)}
                  />
                </div>
                <p>
                  <strong>Gender:</strong> {userData.gender}
                </p>
                <p>
                  <strong>Joining Date:</strong> {userData.date}
                </p>
                <p>
                  <strong>Phone:</strong> {userData.user_id.phone}
                </p>
                <p>
                  <strong>Email:</strong> {userData.email}
                </p>
                <div className="flex items-center">
                  <strong>PDF:</strong>
                  {userData?.pdf?.map((pdf, idx) => (
                    <span
                      key={idx}
                      className="w-[55px] text-center text-blue-700 font-bold underline bg-amber-100 p-1  ml-2"
                    >
                      {" "}
                      &nbsp;<a href={`${pdf}`}>{`PDF${idx + 1}`}</a>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Aadhar / PAN */}
            <div className="w-1/3 flex flex-col justify-around gap-4 max-h-[350px] overflow-auto">
              {userData?.image?.map((Image, idx) => (
                <div
                  key={idx}
                  className="border rounded-lg p-3 shadow cursor-pointer"
                  onClick={() => setPreviewImage(Image)}
                >
                  <Image
                    src={`${Image}`}
                    alt={Image.label}
                    width={300}
                    height={100}
                    className="rounded-md"
                  />
                  <p className="text-center text-xs mt-1">{Image.label}</p>
                </div>
              ))}
            </div>

            {/* Advocate List */}
            <div className="w-1/3 border rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">Assign Advocate</h3>
                <FaChevronDown />
              </div>
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {advocte.map((adv, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedAdvocate(adv)}
                    className={`flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-gray-100 transition ${
                      selectedAdvocate?.name === adv?.name ? "bg-blue-100" : ""
                    }`}
                  >
                    <Image
                      src={`${adv?.advocateImage}`}
                      width={40}
                      height={40}
                      alt={adv?.name}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">{adv?.name}</p>
                      <p className="text-xs text-gray-500">
                        {adv?.contactNumber} / {adv?.gender}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Approve Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleApproveAssign}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:scale-105 transition"
            >
              Approve & Assign
            </button>
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-2xl bg-opacity-70 flex items-center justify-center z-[60]"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-3xl max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* <button
              className="absolute top-[-5] right-[-2] text-black text-4xl bg-white rounded-4xl w-[40px] h-[40px] text-center cursor-pointer"
              onClick={() => setPreviewImage(null)}
            >
              &times;
            </button> */}
            <Image
              src={previewImage}
              alt="Preview"
              className="rounded-lg max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
