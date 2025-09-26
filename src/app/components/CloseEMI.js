"use client";
import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import toast from "react-hot-toast";
import { getStroage } from "@/url/storage";

export default function CloseEMI({ show, handleClose, phone, id }) {
  const [loading, setLoading] = useState(false);
  const [personalLoans, setPersonalLoans] = useState([]);
  const [creditCards, setCreditCards] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState(null);

  const [formData, setFormData] = useState({
    loanId: "",
    finaloutamount: "",
    finalsettelement: "",
    finalpercentage: "",
    finalsaving: "",
    phone: phone,
    user_id: id,
  });
  const handleLoanSelect = (loan) => {
    setSelectedLoan(loan.id);
    setFormData((prev) => ({ ...prev, loanId: loan.id }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = async () => {
    try {
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
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
      handleClose();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}${ApiRute.driUser.singe}`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ phone }),
        });
        const json = await res.json();
        if (json.success && json.data) {
          const data = json.data;

          const normalize = (item, type) => ({
            id: item?._id || null,
            bank: item?.bank || "",
            amount: Number(item?.amount) || 0,
            total: Number(item?.total) || 0,
            settlementPercent:
              parseInt((item?.settlement || "").toString().replace("%", "")) ||
              0,
            type,
            isOutstanding: item?.isOutstanding,
          });

          setPersonalLoans(
            (data.personal_Loans || []).map((pl) => normalize(pl, "personal"))
          );
          setCreditCards(
            (data.credit_Cards || []).map((cc) => normalize(cc, "credit"))
          );
        }
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };

    fetchData();
  }, [phone]);

  return (
    <Dialog open={show} onClose={handleClose} className="relative z-50">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-2xl shadow-xl w-full max-w-5xl max-h-screen overflow-auto p-6">
          <Dialog.Title className="text-2xl font-semibold mb-6 text-gray-800">
            Close EMI
          </Dialog.Title>

          <div className="grid grid-cols-2 gap-6">
            {/* LEFT: Loan Selection */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg  text-gray-700 mb-3 font-black">
                  Credit Cards
                </h3>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {creditCards?.map((loan) => (
                    <div
                      key={loan.id}
                      onClick={() => handleLoanSelect(loan)}
                      className={`p-3 border rounded-lg cursor-pointer transition
      ${
        selectedLoan === loan.id
          ? "bg-blue-50 border-blue-400"
          : "bg-gray-50 hover:bg-gray-100 border-gray-200"
      }
      ${loan?.isOutstanding ? "border-red-500" : ""} 
    `}
                    >
                      <p className="font-medium">{loan.bank}</p>
                      <p className="text-sm text-gray-600">
                        Amount: ₹{loan.amount} | Settlement:{" "}
                        {loan.settlementPercent}%
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-3">
                  Personal Loans
                </h3>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {personalLoans?.map((loan) => (
                    <div
                      key={loan.id}
                      onClick={() => handleLoanSelect(loan)}
                      className={`p-3 border rounded-lg cursor-pointer transition ${
                        selectedLoan === loan.id
                          ? "bg-blue-50 border-blue-400"
                          : "bg-gray-50 hover:bg-gray-100 border-gray-200"
                      } ${loan?.isOutstanding ? "border-red-500" : ""} `}
                    >
                      <p className="font-medium">{loan.bank}</p>
                      <p className="text-sm text-gray-600">
                        Amount: ₹{loan.amount} | Settlement:{" "}
                        {loan.settlementPercent}%
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="space-y-4">
              {[
                { label: "Final Outstanding Amount", name: "finaloutamount" },
                { label: "Final Settlement", name: "finalsettelement" },
                { label: "Final Percentage", name: "finalpercentage" },
                { label: "Final Savings", name: "finalsaving" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    autoComplete="off"
                    type="text"
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-8">
            <button
              onClick={handleClose}
              className="px-5 py-2 rounded-lg border border-gray-300 bg-gray-100 hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleAdd}
              disabled={loading || !selectedLoan}
              className={`px-5 py-2 rounded-lg text-white transition ${
                loading || !selectedLoan
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
