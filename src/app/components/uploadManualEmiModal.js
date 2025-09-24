"use client";
import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import toast from "react-hot-toast";
import Image from "next/image";

export default function LoanEMIForm({ show, handleClose, phone, id }) {
  const [loading, setLoading] = useState(false);
  const [banks, setBanks] = useState();
  const [formData, setFormData] = useState({
    principleAmount: "",
    estimatedSettlement: "",
    bank: "",
    savings: "",
    phone: phone,
    user_id: "",
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
      const res = await fetch(`${API_BASE_URL}${ApiRute.loan.addLoan}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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

  const getBanks = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}${ApiRute.bank.getbanks}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      const result = await res.json();
      if (result?.success) {
        setBanks(result);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getBanks();
  }, []);
  return (
    <Dialog open={show} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-xl max-w-2xl w-full p-6">
          <Dialog.Title className="text-xl font-bold mb-4">
            Loan EMI Form
          </Dialog.Title>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div>
                <label>Loan Type</label>
                <select
                  name="loanType"
                  value={formData.loanType}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                >
                  <option value="">Select Type</option>
                  <option value="Personal_Loan">Personal Loan</option>
                  <option value="Credit_Loan">Credit Loan</option>
                </select>
              </div>

              <div>
                <label>Principal Amount</label>
                <input
                  type="text"
                  name="principleAmount"
                  value={formData.principleAmount}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>

              <div>
                <label>Estimated Settlement</label>
                <input
                  type="text"
                  name="estimatedSettlement"
                  value={formData.estimatedSettlement}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>

              <div>
                <label>Savings</label>
                <input
                  type="text"
                  name="savings"
                  value={formData.savings}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
            </div>
            <div>
              <h1 className="font-semibold mb-2">Select Banks</h1>
              <div className="h-[230px] overflow-x-hidden overflow-y-auto border p-2 rounded">
                {banks?.data?.length > 0 ? (
                  <ul className="space-y-1">
                    {banks.data.map((val, i) => (
                      <li
                        key={i}
                        onClick={() => handleBankSelect(val)}
                        className={`flex items-center gap-2 p-1 rounded cursor-pointer transition-colors bg-gray-200 border-1 border-gray-300 ${
                          selectedBank === val.bankName
                            ? "bg-blue-100 border border-blue-400"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <Image
                          src={val.icon || "/bank-placeholder.png"}
                          alt={val.bankName}
                          className="object-contain rounded"
                          height={20}
                          width={20}
                        />
                        <span>{val.bankName}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No banks found</p>
                )}
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
