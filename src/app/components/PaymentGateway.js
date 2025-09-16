"use client";
import { Pencil, Upload, Save, X } from "lucide-react";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
export default function PaymentGateway() {
  const [upiData, setUpiData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [newUpiId, setNewUpiId] = useState("");
  const [newQr, setNewQr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // 👈 Modal state

  // Fetch UPI + QR
  const GetPaymentQrAndUPI = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}${ApiRute.upi.get}`);
      const data = await res.json();
      setUpiData(data?.data || []);
    } catch (err) {
      toast.error("Failed to fetch payment details");
    }
  };

  useEffect(() => {
    GetPaymentQrAndUPI();
  }, []);

  // Handle Save Update
  const handleUpdate = async (id) => {
    if (!newUpiId && !newQr) {
      toast.error("Nothing to update");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      if (newUpiId) formData.append("upi_id", newUpiId);
      if (newQr) formData.append("image", newQr);

      const res = await fetch(`${API_BASE_URL}${ApiRute.upi.update}`, {
        method: "PUT",
        body: formData,
      });

      const result = await res.json();

      if (res.ok && result?.success) {
        toast.success("Updated successfully!");
        setEditIndex(null);
        setNewUpiId("");
        setNewQr(null);
        GetPaymentQrAndUPI();
      } else {
        toast.error(result?.message || "Update failed");
      }
    } catch (err) {
      toast.error("Update failed");
    } finally {
      setLoading(false);
    }
  };

  // Handle Add New
  const handleAdd = async () => {
    if (!newUpiId || !newQr) {
      toast.error("Please provide both UPI ID and QR");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("upi_id", newUpiId);
      formData.append("image", newQr);

      const res = await fetch(`${API_BASE_URL}${ApiRute.upi.add}`, {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (res.ok && result?.success) {
        toast.success("Added successfully!");
        setIsModalOpen(false);
        setNewUpiId("");
        setNewQr(null);
        GetPaymentQrAndUPI();
      } else {
        toast.error(result?.message || "Failed to add");
      }
    } catch (err) {
      toast.error("Failed to add");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center justify-center mt-10 w-[400px]">
      <h2 className="text-xl font-semibold mb-4">Payment Gateway</h2>

      {upiData?.map((e, i) => {
        return (
          <div key={e._id} className="mb-6 w-full flex flex-col items-center">
            {/* QR Preview */}
            <Image
              src={
                newQr && editIndex === i ? URL.createObjectURL(newQr) : e.qrCode
              }
              alt="QR Code"
              width={180}
              height={180}
              className="rounded shadow"
            />

            {/* Upload new QR */}
            {editIndex === i && (
              <input
                type="file"
                accept="image/*"
                className="mt-2 text-sm"
                onChange={(e) => setNewQr(e.target.files[0])}
              />
            )}

            {/* UPI ID */}
            <div className="mt-4 flex w-full items-center gap-2">
              {editIndex === i ? (
                <input
                  type="text"
                  value={newUpiId || e.upi_id}
                  onChange={(e) => setNewUpiId(e.target.value)}
                  className="flex-1 border px-2 py-1 text-sm rounded"
                />
              ) : (
                <input
                  readOnly
                  value={e.upi_id}
                  className="flex-1 border px-2 py-1 text-sm rounded bg-gray-100"
                />
              )}

              {editIndex === i ? (
                <button
                  onClick={() => handleUpdate(e._id)}
                  disabled={loading}
                  className="bg-green-500 text-white px-2 py-1 rounded text-sm flex items-center gap-1"
                >
                  <Save size={14} />
                  {loading ? "Saving..." : "Save"}
                </button>
              ) : (
                <Pencil
                  size={16}
                  className="text-gray-500 cursor-pointer"
                  onClick={() => {
                    setEditIndex(i);
                    setNewUpiId(e.upi_id);
                  }}
                />
              )}
            </div>
          </div>
        );
      })}

      {/* Upload New Button -> Opens Modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded flex items-center text-sm"
      >
        <Upload size={16} className="mr-2" /> Upload New
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[400px] relative shadow-lg">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={20} />
            </button>

            <h3 className="text-lg font-semibold mb-4">Add New UPI + QR</h3>

            {/* QR Preview */}
            {newQr && (
              <Image
                src={URL.createObjectURL(newQr)}
                alt="New QR"
                width={180}
                height={180}
                className="rounded shadow mb-2 mx-auto"
              />
            )}

            <input
              type="file"
              accept="image/*"
              className="mt-2 text-sm w-full"
              onChange={(e) => setNewQr(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="Enter UPI ID"
              value={newUpiId}
              onChange={(e) => setNewUpiId(e.target.value)}
              className="border px-2 py-1 text-sm rounded mt-2 w-full"
            />

            <button
              onClick={handleAdd}
              disabled={loading}
              className="bg-green-500 text-white px-3 py-1 rounded text-sm flex items-center gap-1 mt-4 w-full justify-center"
            >
              <Save size={14} />
              {loading ? "Uploading..." : "Upload Now"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
