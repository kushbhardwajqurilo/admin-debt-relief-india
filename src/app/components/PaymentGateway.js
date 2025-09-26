"use client";
import { Upload, Save, X } from "lucide-react";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";

export default function PaymentGateway() {
  const [upiData, setUpiData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [newQr, setNewQr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form data
  const [formData, setFormData] = useState({
    upi_id: "",
    AcNumber: "",
    IFSC: "",
    Payee: "",
    AccountType: "",
  });

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

  // Add new
  const handleAdd = async () => {
    if (!formData.upi_id || !newQr) {
      toast.error("Please provide UPI ID and QR");
      return;
    }
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("upi_id", formData.upi_id);
      fd.append("AcNumber", formData.AcNumber);
      fd.append("IFSC", formData.IFSC);
      fd.append("Payee", formData.Payee);
      fd.append("AccountType", formData.AccountType);
      fd.append("image", newQr);

      const res = await fetch(`${API_BASE_URL}${ApiRute.upi.add}`, {
        method: "POST",
        body: fd,
      });

      const result = await res.json();
      if (res.ok && result.success) {
        toast.success("Added successfully!");
        setIsModalOpen(false);
        setFormData({
          upi_id: "",
          AcNumber: "",
          IFSC: "",
          Payee: "",
          AccountType: "",
        });
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

  // Update existing
  const handleUpdate = async (id) => {
    if (
      !formData.upi_id &&
      !formData.AcNumber &&
      !formData.IFSC &&
      !formData.Payee &&
      !formData.AccountType &&
      !newQr
    ) {
      toast.error("Nothing to update");
      return;
    }
    setLoading(true);
    try {
      const fd = new FormData();
      if (formData.upi_id) fd.append("upi_id", formData.upi_id);
      if (formData.AcNumber) fd.append("AcNumber", formData.AcNumber);
      if (formData.IFSC) fd.append("IFSC", formData.IFSC);
      if (formData.Payee) fd.append("Payee", formData.Payee);
      if (formData.AccountType) fd.append("AccountType", formData.AccountType);
      if (newQr) fd.append("image", newQr);

      const res = await fetch(`${API_BASE_URL}${ApiRute.upi.update}/${id}`, {
        method: "PUT",
        body: fd,
      });

      const result = await res.json();
      if (res.ok && result.success) {
        toast.success("Updated successfully!");
        setEditIndex(null);
        setFormData({
          upi_id: "",
          AcNumber: "",
          IFSC: "",
          Payee: "",
          AccountType: "",
        });
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

  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center justify-center mt-10 w-[450px]">
      <h2 className="text-xl font-semibold mb-4">Payment Gateway</h2>

      {upiData.map((e, i) => (
        <div key={e._id} className="mb-6 w-full flex flex-col items-center">
          <Image
            src={
              newQr && editIndex === i ? URL.createObjectURL(newQr) : e.qrCode
            }
            alt="QR Code"
            width={150}
            height={150}
            className="rounded shadow"
          />
          <div className="mt-2 w-full flex flex-col p-2">
            <p className="font-bold m-1">UPI: {e.upi_id}</p>
            <p className="font-bold m-1">
              A/C Number: {e.AcNumber || "000405007899"}
            </p>
            <p className="font-bold m-1">
              Payee/Beneficiary: {e.Payee || "Debt Relief India"}
            </p>
            <p className="font-bold m-1">IFSC: {e.IFSC || "SBIN0001234"}</p>
            <p className="font-bold m-1">
              Account Type: {e.AccountType || "Current"}
            </p>
          </div>
        </div>
      ))}

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
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={20} />
            </button>

            <h3 className="text-lg font-semibold mb-4">
              Add / Update UPI + QR
            </h3>

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
              placeholder="UPI ID"
              value={formData.upi_id}
              onChange={(e) =>
                setFormData({ ...formData, upi_id: e.target.value })
              }
              className="border px-2 py-1 text-sm rounded mt-2 w-full"
            />
            <input
              type="text"
              placeholder="A/C Number"
              value={formData.AcNumber}
              onChange={(e) =>
                setFormData({ ...formData, AcNumber: e.target.value })
              }
              className="border px-2 py-1 text-sm rounded mt-2 w-full"
            />
            <input
              type="text"
              placeholder="IFSC"
              value={formData.IFSC}
              onChange={(e) =>
                setFormData({ ...formData, IFSC: e.target.value })
              }
              className="border px-2 py-1 text-sm rounded mt-2 w-full"
            />
            <input
              type="text"
              placeholder="Payee Name"
              value={formData.Payee}
              onChange={(e) =>
                setFormData({ ...formData, Payee: e.target.value })
              }
              className="border px-2 py-1 text-sm rounded mt-2 w-full"
            />
            <input
              type="text"
              placeholder="Account Type"
              value={formData.AccountType}
              onChange={(e) =>
                setFormData({ ...formData, AccountType: e.target.value })
              }
              className="border px-2 py-1 text-sm rounded mt-2 w-full"
            />

            <button
              onClick={
                editIndex !== null
                  ? () => handleUpdate(upiData[editIndex]._id)
                  : handleAdd
              }
              disabled={loading}
              className="bg-green-500 text-white px-3 py-1 rounded text-sm flex items-center gap-1 mt-4 w-full justify-center"
            >
              <Save size={14} />
              {loading
                ? "Uploading..."
                : editIndex !== null
                ? "Update"
                : "Upload Now"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
