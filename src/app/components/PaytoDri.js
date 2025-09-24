import { ApiRute } from "@/url/ApiRoute";
import { API_BASE_URL } from "@/url/BaseURL";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function PayToDri({ phone, show, handleClose }) {
  const [formData, setFormData] = useState({
    emiType: "",
    noOfEmi: "",
    emiAmount: "",
    dueDate: "",
    phone,
    settlementAount: "",
    loanType: "",
  });
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setFormData((prev) => ({ ...prev, phone }));
  }, [phone]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addTpDri = async () => {
    const finalData = {
      ...formData,
    };
    try {
      setLoad(true);
      const res = await fetch(`${API_BASE_URL}${ApiRute.emi.mannual}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });
      const result = await res.json();
      if (result?.success) {
        toast.success(result?.message);
      } else {
        toast.error(result?.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
      // handleClose();
    }
  };
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-bold mb-4">Pay to DRI</h2>

        <div className="space-y-3">
          {/* EMI Type */}
          <div>
            <label className="block text-sm font-medium">EMI Type</label>
            <select
              name="emiType"
              value={formData.emiType}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1 mt-1"
            >
              <option value="">Select</option>
              <option>Settlement_Advance</option>
              <option>Service_Fees</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Loan Type</label>
            <select
              name="loanType"
              value={formData.loanType}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1 mt-1"
            >
              <option value="">Select</option>
              <option value="Credit Cards">Credit Card</option>
              <option value="Personal Loan">Personal Loan</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">
              Settlement Amount
            </label>
            <input
              type="text"
              name="settlementAount" //
              value={formData.settlementAount}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1 mt-1"
            />
          </div>
          {/* No of EMI */}
          <div>
            <label className="block text-sm font-medium">No. of EMI</label>
            <input
              type="text"
              name="noOfEmi"
              value={formData.noOfEmi}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1 mt-1"
            />
          </div>

          {/* Monthly EMI */}
          <div>
            <label className="block text-sm font-medium">EMI Amount</label>
            <input
              type="text"
              name="emiAmount"
              value={formData.emiAmount}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1 mt-1"
            />
          </div>

          {/* Due Date */}
          <div>
            <label className="block text-sm font-medium">Select Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1 mt-1"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            onClick={addTpDri}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
