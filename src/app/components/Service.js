import { ApiRute } from "@/url/ApiRoute";
import { API_BASE_URL } from "@/url/BaseURL";
import { getStroage } from "@/url/storage";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function validateDueDate(dueDate) {
  const now = new Date();
  const inputDate = new Date(dueDate);
  if (inputDate <= now) {
    return false;
  }

  return true;
}

export default function ServiceAndSubscription() {
  const [bank, setBank] = useState({
    bankName: "",
    image: "",
  });
  const [subscription, setSubscription] = useState({
    gst: "",
    duedate: "",
    client: "",
    subscription: "",
  });

  const [clientList, setClientList] = useState([]);

  const getUser = async () => {
    try {
      const res = await fetch(
        `${API_BASE_URL}${ApiRute.subscription.getuser}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${getStroage().token}`,
          },
        }
      );
      const result = await res.json();
      if (result?.success) {
        setClientList(result?.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  function validationCheck(valid) {
    if (valid.gst < 0) {
      toast.error("gst should not negative");
      return false;
    }
    if (!validateDueDate(valid.duedate)) {
      toast.error("Due date must be in the future");
      return false;
    }
    if (!valid.duedate) {
      toast.error("due date is required");
    }
    if (!valid.client) {
      toast.error("client is required");
      return false;
    }
    if (!valid.subscription) {
      toast.error("subscrint amount is requird");
      return false;
    }
    if (!valid.gst) {
      toast.error("gst required");
      return false;
    }
    return true;
  }
  const addSubscription = async (e) => {
    e.preventDefault();
    const isValid = validationCheck(subscription);
    if (!isValid) return;
    try {
      const res = await fetch(`${API_BASE_URL}${ApiRute.subscription.add}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${getStroage().token}`,
        },
        body: JSON.stringify(subscription),
      });

      const result = await res.json();
      if (result?.success) {
        toast.success(result?.message);
        setSubscription("");
      } else {
        toast.error(result?.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addBanks = async () => {
    const formdata = new FormData();
    formdata.append("bankName", bank.bankName);
    formdata.append("image", bank.image);
    try {
      const res = await fetch(`${API_BASE_URL}${ApiRute.bank.addbanks}`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${getStroage().token}`,
        },
        body: formdata,
      });
      const result = await res.json();
      if (result?.success) {
        toast.success("Bank added");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="bg-white p-6 rounded-xl shadow mt-5">
      <h2 className="text-xl font-semibold mb-4">Banks & Subscriptions</h2>
      <div className="flex w-full flex-row gap-3 ">
        {/* Monthly Subscription Section */}
        <form className="w-[50%] flex flex-col shadow-lg shadow-gray-200 p-4 rounded-sm border border-gray-200">
          <h2 className="text-xl font-semibold ml-1">Monthly Subscription </h2>
          <input
            placeholder="Subscription Fees"
            name="subscription"
            onChange={(e) =>
              setSubscription((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            required
            className="w-sm border border-gray-400 rounded p-1.5 mt-3 ml-1"
          />
          <input
            placeholder="GST In Numbers (e.g. 18)"
            type="number"
            name="gst"
            onChange={(e) =>
              setSubscription((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            required
            className="w-sm border border-gray-400 rounded p-1.5 m-1 mt-3"
          />
          <input
            type="date"
            name="duedate"
            onChange={(e) =>
              setSubscription((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            className="w-sm border border-gray-400 rounded p-1.5 m-1 mt-3"
          />
          <select
            className="w-sm border border-gray-400 rounded p-1.5 m-1 mt-3 outline-neutral-50"
            size={clientList.length === 0 ? 0 : 5}
            onChange={(e) => {
              setSubscription((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
            name="client"
          >
            <option className="p-2">Select Clients</option>
            {clientList?.map((val, pos) => (
              <option
                className="p-2 hover:bg-blue-300 cursor-pointer"
                value={val?._id}
                key={pos}
              >
                {val?.name}&nbsp;({val?.id})
              </option>
            ))}
          </select>
          <button
            onClick={addSubscription}
            className="w-25 bg-[#2B7FFF] text-white capitalize cursor-pointer rounded p-1.5 ml-1 mt-2 disabled:opacity-50"
          >
            add
          </button>
        </form>

        {/* add banks */}
        <div className="w-[50%] flex flex-col shadow-lg shadow-gray-200 p-4 rounded-sm border border-gray-200">
          <h2 className="text-xl font-semibold ml-1">Add Banks</h2>
          <input
            placeholder="Bank Name"
            type="text"
            name="bankName"
            onChange={(e) => {
              setBank((pre) => ({ ...pre, [e.target.name]: e.target.value }));
              console.log("banks", bank);
            }}
            className="w-sm border border-gray-400 rounded p-1.5 mt-3 ml-1"
          />
          <input
            type="file"
            name="image"
            onChange={(e) => {
              setBank((pre) => ({
                ...pre,
                [e.target.name]: e.target.files[0],
              }));
            }}
            className="w-sm border border-gray-400 rounded p-1.5 mt-3 ml-1"
          />
          <button
            onClick={addBanks}
            className="w-25 bg-[#2B7FFF] text-white capitalize cursor-pointer rounded p-1.5 ml-1 mt-2 disabled:opacity-50"
          >
            add
          </button>
        </div>
      </div>
    </div>
  );
}
