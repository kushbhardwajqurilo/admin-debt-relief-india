"use client";
import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import toast from "react-hot-toast";
import Image from "next/image";
import { getStroage } from "@/url/storage";

export default function LoanEMIForm({ show, handleClose, phone, id }) {
  const [loading, setLoading] = useState(false);
  const [banks, setBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState("");

  // ✅ keep all input fields in formData
  const [formData, setFormData] = useState({
    loanType: "",
    amount: "",
    settlmentPercentage: "",
    total: "",
    bank: "",
    phone: phone,
  });

  // ✅ handle input change for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ handle bank selection
  const handleBankSelect = (val) => {
    setSelectedBank(val._id);
    setFormData((prev) => ({ ...prev, bank: val.bankName }));
  };

  // ✅ fetch banks
  const getBanks = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}${ApiRute.bank.getbanks}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const result = await res.json();
      if (result?.success) setBanks(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBanks();
  }, []);

  // ✅ handle form submit (API call)
  const handleAdd = async () => {
    if (!formData.bank || !formData.loanType) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}${ApiRute.emi.addLoan}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${getStroage().token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result?.success) {
        toast.success(result.message || "Loan added successfully!");
        setFormData({
          loanType: "",
          amount: "",
          settlmentPercentage: "",
          total: "",
          bank: "",
          phone: phone,
        });
        handleClose();
      } else {
        toast.error(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={show} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-xl max-w-2xl w-full p-6">
          <Dialog.Title className="text-xl font-bold mb-4">
            Loan EMI Form
          </Dialog.Title>

          <div className="grid grid-cols-2 gap-4">
            {/* Left side form */}
            <div className="space-y-3">
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
                <label>Amount</label>
                <input
                  autoComplete="off"
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>

              <div>
                <label>CC/PL Settlement Percentage</label>
                <input
                  autoComplete="off"
                  type="number"
                  name="settlmentPercentage"
                  value={formData.settlmentPercentage}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>

              <div>
                <label>CC/PL Total</label>
                <input
                  autoComplete="off"
                  type="text"
                  name="total"
                  value={formData.total}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
            </div>

            {/* Right side: Bank list */}
            <div>
              <h1 className="font-semibold mb-2">Select Bank</h1>
              <div className="h-[400px] overflow-y-auto border p-2 rounded space-y-1">
                {banks.length > 0 ? (
                  banks.map((val) => (
                    <div
                      key={val._id}
                      onClick={() => handleBankSelect(val)}
                      className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer border transition-all duration-200 ${
                        selectedBank === val._id
                          ? "bg-blue-600 text-white border-blue-600 shadow-md scale-[1.02]"
                          : "bg-gray-100 hover:bg-gray-200 border-gray-300"
                      }`}
                    >
                      <Image
                        src={val?.icon || "/bank-placeholder.png"}
                        alt={val?.bankName}
                        className="object-contain rounded bg-white p-1"
                        height={24}
                        width={24}
                      />
                      <span className="font-medium">{val?.bankName}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">No banks found</p>
                )}
              </div>
            </div>
          </div>

          {/* Footer buttons */}
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
