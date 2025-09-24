"use client";
import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import toast from "react-hot-toast";
import Image from "next/image";
import { getStroage } from "@/url/storage";

export default function CloseEMI({ show, handleClose, phone, id }) {
  const [loading, setLoading] = useState(false);
  const [banks, setBanks] = useState();
  const [formData, setFormData] = useState({
    finaloutamount: "",
    finalsettelement: "",
    finalpercentage: "",
    finalsaving: "",
    phone: phone,
  });
  const [selectedBank, setSelectedBank] = useState("");
  const handleBankSelect = (val) => {
    setSelectedBank(val.bankName);
    setFormData((prev) => ({ ...prev, bank: val._id }));
    setFormData((prev) => ({ ...prev, user_id: id }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = async () => {
    try {
      console.log("formdata", formData);
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}${ApiRute.admin.outstanding}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${getStroage().token}`,
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (result?.success) toast.success(result?.message);
      else toast.error(result?.message);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      handleClose();
    }
  };
  return (
    <Dialog open={show} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-xl max-w-xl w-[450px] p-6">
          <Dialog.Title className="text-xl font-bold mb-4">
            Close EMI
          </Dialog.Title>

          <div className="grid grid-cols-2 w-full">
            <div className="w-full">
              <div className="w-full mb-3">
                <label className="mb-2">Final Outstanding Amount</label>
                <input
                  type="text"
                  name="finaloutamount"
                  onChange={handleChange}
                  className="w-[300px] border p-2 rounded"
                />
              </div>

              <div className="w-full mb-3">
                <label className="mb-2">Final Settlement</label>
                <input
                  type="text"
                  name="finalsettelement"
                  onChange={handleChange}
                  className="w-[300px] border p-2 rounded"
                />
              </div>

              <div className="w-full mb-3">
                <label className="mb-2">Final Percentage</label>
                <input
                  type="text"
                  name="finalpercentage"
                  onChange={handleChange}
                  className="w-[300px] border p-2 rounded"
                />
              </div>

              <div className="w-full mb-3">
                <label className="mb-2">Final Savings</label>
                <input
                  type="text"
                  name="finalsaving"
                  onChange={handleChange}
                  className="w-[300px] border p-2 rounded"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={handleClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleAdd}
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {loading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
