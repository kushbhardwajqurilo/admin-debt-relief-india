import { ApiRute } from "@/url/ApiRoute";
import { API_BASE_URL } from "@/url/BaseURL";
import { getStroage } from "@/url/storage";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ServiceAndSubscription() {
  const [service, setService] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [subscription, setSubscription] = useState("");
  const [gst, setGst] = useState("");

  // 👉 Service API call
  const addService = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}${ApiRute.service.addService}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${getStroage().token}`,
        },
        body: JSON.stringify({ fees: service, dueDate }),
      });

      const result = await res.json();
      if (result?.success) {
        toast.success(result?.message);
        setService("");
        setDueDate("");
      } else {
        toast.error(result?.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 👉 Subscription API call with GST
  const addSubscription = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}${ApiRute.subscription.add}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${getStroage().token}`,
        },
        body: JSON.stringify({
          subscription: subscription,
          gst, // 👈 backend me parseInt ya Number kar lena
        }),
      });

      const result = await res.json();
      if (result?.success) {
        toast.success(result?.message);
        setSubscription("");
        setGst("");
      } else {
        toast.error(result?.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-5">
      <h2 className="text-xl font-semibold mb-4">Service & Subscriptions</h2>
      <div className="flex w-full flex-row">
        {/* Service Section */}
        <div className="flex w-[45%] flex-col">
          <h2 className="text-xl font-semibold ml-1">Service </h2>

          <input
            placeholder="Service Fees"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-sm border border-gray-400 rounded p-1.5 m-1"
          />

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-sm border border-gray-400 rounded p-1.5 m-1"
          />
          <small className="p-1.5 m-1">Select Due Date</small>

          <button
            onClick={addService}
            disabled={!service || !dueDate}
            className="w-25 bg-[#2B7FFF] text-white capitalize cursor-pointer rounded p-1.5 mt-2 ml-1 disabled:opacity-50"
          >
            add
          </button>
        </div>

        {/* Monthly Subscription Section */}
        <div className="w-sm flex flex-col">
          <h2 className="text-xl font-semibold ml-1">Monthly Subscription </h2>
          <input
            placeholder="Subscription Fees"
            value={subscription}
            onChange={(e) => setSubscription(e.target.value)}
            className="w-sm border border-gray-400 rounded p-1.5 m-1"
          />
          <input
            placeholder="GST In Numbers (e.g. 18)"
            type="number"
            value={gst}
            onChange={(e) => setGst(e.target.value)}
            className="w-sm border border-gray-400 rounded p-1.5 m-1"
          />
          <button
            onClick={addSubscription}
            disabled={!subscription || !gst}
            className="w-25 bg-[#2B7FFF] text-white capitalize cursor-pointer rounded p-1.5 ml-1 mt-2 disabled:opacity-50"
          >
            add
          </button>
        </div>
      </div>
    </div>
  );
}
