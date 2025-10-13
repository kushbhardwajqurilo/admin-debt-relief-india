"use client";
import { ApiRute } from "@/url/ApiRoute";
import { API_BASE_URL } from "@/url/BaseURL";
import { getStroage } from "@/url/storage";
import { useParams } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Header from "../Header";

// ✅ Safe date formatter
const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  const day = d.getDate().toString().padStart(2, "0");
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};
const months = [
  { month: "01", val: "January" },
  { month: "02", val: "February" },
  { month: "03", val: "March" },
  { month: "04", val: "April" },
  { month: "05", val: "May" },
  { month: "06", val: "June" },
  { month: "07", val: "July" },
  { month: "08", val: "August" },
  { month: "09", val: "September" },
  { month: "10", val: "October" },
  { month: "11", val: "November" },
  { month: "12", val: "December" },
];

const formatPaidServiceDate = (isoStr) => {
  if (!isoStr) return "N/A";
  const d = new Date(isoStr);

  // Get UTC components
  const day = String(d.getUTCDate()).padStart(2, "0");
  const month = String(d.getUTCMonth() + 1).padStart(2, "0");
  const year = d.getUTCFullYear();

  return `${day}/${month}/${year}`;
};

function PaidFormate(date) {
  const [day, month, year] = date.split("-").map(Number);
  const dateObj = new Date(year, month - 1, day);
  return dateObj;
}

// update date modal
export function UpdateDateModal({ isOpen, onClose, onUpdate, userId }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [days, setdays] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ]);
  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };
  const handleUpdate = async () => {
    if (!selectedDate) return alert("Please select a date!");
    onUpdate(selectedDate);
    try {
      const response = await fetch(
        `${API_BASE_URL}${ApiRute.subscription.updateDueDate}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${getStroage().token}`,
          },
          body: JSON.stringify({ date: selectedDate, user_id: userId }),
        }
      );
      const result = await response.json();
      if (result?.success) {
        toast.success(result?.message);
      } else {
        toast.error(result?.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSelectedDate("");
      onClose();
    }
  };

  if (!isOpen) return null; // hide modal if not open

  return (
    <div className="fixed inset-0 bg-white-1 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Select Date to Update</h2>

        <div className="flex w-full flex-wrap  p-2 gap-2 mb-2 border-gray-400 rounded-sm border-1 ">
          {days?.map((val, pos) => (
            <span
              onClick={() => handleSelectDate(val)}
              key={pos}
              value={selectedDate}
              className={`flex-1 text-center p-2 rounded hover:bg-indigo-400 cursor-pointer transition hover:text-white ${
                selectedDate == val ? "bg-indigo-400 text-white" : ""
              }`}
            >
              {val}
            </span>
          ))}
        </div>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export function UpdateServiceDateModal({ isOpen, onClose, onUpdate, phone }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [days, setdays] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ]);
  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };
  const handleUpdate = async () => {
    if (!selectedDate) return alert("Please select a date!");
    onUpdate(selectedDate);
    try {
      const response = await fetch(
        `${API_BASE_URL}${ApiRute.emi.updateDueDate}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${getStroage().token}`,
          },
          body: JSON.stringify({ date: selectedDate, phone }),
        }
      );
      const result = await response.json();
      if (result?.success) {
        toast.success(result?.message);
      } else {
        toast.error(result?.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSelectedDate("");
      onClose();
    }
  };

  if (!isOpen) return null; // hide modal if not open

  return (
    <div className="fixed inset-0 bg-white-1 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Select Date to Update</h2>

        <div className="flex w-full flex-wrap  p-2 gap-2 mb-2 border-gray-400 rounded-sm border-1 ">
          {days?.map((val, pos) => (
            <span
              onClick={() => handleSelectDate(val)}
              key={pos}
              value={selectedDate}
              className={`flex-1 text-center p-2 rounded hover:bg-indigo-400 cursor-pointer transition hover:text-white ${
                selectedDate == val ? "bg-indigo-400 text-white" : ""
              }`}
            >
              {val}
            </span>
          ))}
        </div>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

// update date modal end

// user dashboard for admin to check service and subscription details
export default function UserDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const { details } = useParams();
  const [usesrId, setUserId] = useState("");
  const [phone, setPhone] = useState(0);
  // ✅ Independent tab states
  const [subscriptionTab, setSubscriptionTab] = useState("current");
  const [serviceTab, setServiceTab] = useState("current");

  // ✅ Separate states for subscriptions
  const [currentSubscriptions, setCurrentSubscriptions] = useState([]);
  const [paidSubscriptions, setPaidSubscriptions] = useState([]);

  // ✅ Separate states for services
  const [currentServices, setCurrentServices] = useState([]);
  const [paidServices, setPaidServices] = useState([]);
  const [isButton, setIsButton] = useState(false);
  const handleUpdateDate = (date) => {
    console.log("Updated date:", date);
    // call API or update state here
  };
  const handleServiceUpdateDate = (date) => {
    console.log("Updated date:", date);
    // call API or update state here
  };
  const fetchUserId = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}${ApiRute.user.single}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${getStroage().token}`,
        },
        body: JSON.stringify({ user_id: details }),
      });
      const result = await response.json();
      if (result?.success) {
        setPhone(result?.userData?.phone);
        setUserId(result?.userData);
        fetchCurrentServices(result?.userData?.phone);
        fetchPaidServices(result?.userData?.phone);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getStatusClass = (status) => {
    if (status === "paid") return "bg-green-100 text-green-600";
    if (status === "pending") return "bg-yellow-100 text-yellow-600";
    return "bg-white text-red-500 border-1 border-red-500";
  };

  // ✅ Fetch unpaid/current subscriptions
  const fetchCurrentSubscriptions = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}${ApiRute.subscription.singerSubscription}/${details}`,
        { method: "GET", headers: { "content-type": "application/json" } }
      );
      const result = await response.json();
      if (result.data && result.data.length > 0) {
        const unpaidSubs = result.data
          .filter((sub) => !sub.isPaid)
          .map((sub) => ({
            ...sub,
            paidForMonth: new Date(sub.dueDate).toLocaleString("default", {
              month: "long",
              year: "numeric",
            }),
            status: "pending",
          }));
        setCurrentSubscriptions(unpaidSubs);
      } else {
        setCurrentSubscriptions([]);
      }
    } catch (err) {
      console.error("Error fetching current subscriptions.");
    }
  };

  // ✅ Fetch paid subscriptions
  const fetchPaidSubscriptions = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}${ApiRute.subscription.paidSubs}?userId=${details}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${getStroage().token}`,
          },
        }
      );
      const result = await response.json();

      if (result.data && result.data.length > 0) {
        setPaidSubscriptions(
          result.data.map((sub) => ({
            ...sub,
            status: sub.status || "paid",
          }))
        );
      } else {
        setPaidSubscriptions([]);
      }
    } catch (err) {
      console.error("Error fetching paid subscriptions.");
    }
  };

  // ✅ Fetch unpaid/current services
  const fetchCurrentServices = async (phone) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}${ApiRute?.driUser?.singe}`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ phone }),
        }
      );

      const result = await response.json();
      if (result?.success) {
        const [day, month, year] = result?.data?.dueDate.split("-").map(Number);
        const dateObj = new Date(year, month - 1, day);
        const serviceType =
          !result?.data?.Service_Fees ||
          result?.data?.Service_Fees === 0 ||
          result?.data?.Service_Fees === ""
            ? "service Advance"
            : "service Fees";

        let status;
        if (result?.data?.totalEmi == result?.data?.emiPay) {
          status = "closed";
          setIsButton(true);
        } else {
          status = "pending";
          setIsButton(false);
        }
        const payload = [
          {
            emiPay: result?.data?.emiPay,
            userId: result?.data?.id,
            dueDate: dateObj, // ✅ assign Date object
            paidForMonth: dateObj.toLocaleString("default", {
              month: "long",
              year: "numeric",
            }),
            totalEMI: result?.data?.totalEmi,
            emiAmount: result?.data?.monthlyEmi,
            status: status,
            serviceType: serviceType,
          },
        ];
        console.log("payload", payload);
        setCurrentServices(payload);
      } else {
        setCurrentServices([]);
      }
    } catch (err) {
      console.error("Error fetching current services:", err);
    }
  };

  // ✅ Fetch paid services
  const fetchPaidServices = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}${ApiRute?.emi.getPaidService}/${details}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${getStroage().token}`,
          },
        }
      );
      const result = await response.json();
      if (result.data && result.data.length > 0) {
        setPaidServices(
          result.data.map((svc) => {
            const strMonth = months?.find(
              (month) => month?.month === svc?.date.split("/")[1]
            );
            return {
              ...svc,
              status: "paid",
              paidForMonth: strMonth?.val,
            };
          })
        );
      } else {
        setPaidServices([]);
      }
    } catch (err) {
      console.log("user", err);
      console.error("Error fetching paid services.");
    }
  };

  // ✅ Mark subscription as paid
  const subscriptionMarkAsPaid = async (subscription) => {
    try {
      const res = await fetch(
        `${API_BASE_URL}${ApiRute.subscription.markaspaid}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${getStroage().token}`,
          },
          body: JSON.stringify({
            subscriptionId: subscription?._id,
            paymentMode: "UPI",
          }),
        }
      );
      const data = await res.json();
      if (data.success) {
        toast.success("Subscription marked as paid!");
        fetchCurrentSubscriptions();
        fetchPaidSubscriptions();
      } else {
        toast.error(data.message || "Failed to mark as paid.");
      }
    } catch (err) {
      toast.error("Error marking subscription as paid.");
    }
  };

  // ✅ Mark service as paid
  const checkServicePayment = (svcIndex) => {
    const paidService = { ...currentServices[svcIndex], status: "paid" };
    setPaidServices((prev) => [...prev, paidService]);
    setCurrentServices((prev) => prev.filter((_, idx) => idx !== svcIndex));
    toast.success(`Service for ${paidService.paidForMonth} marked as PAID.`);
  };

  // ✅ Decide which subscriptions/services to show based on tab
  const subscriptionsToShow =
    subscriptionTab === "paid" ? paidSubscriptions : currentSubscriptions;
  const servicesToShow = serviceTab === "paid" ? paidServices : currentServices;

  const markAsPaid = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}${ApiRute.emi.markaspaid}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${getStroage().token}`,
        },
        body: JSON.stringify({
          phone: phone,
          user_id: details,
        }),
      });
      const result = await res.json();
      fetchCurrentSubscriptions();
      fetchPaidSubscriptions();
      fetchUserId();
      result?.success
        ? toast.success(result?.message)
        : toast.error(result?.message);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Initial fetch
  useEffect(() => {
    fetchCurrentSubscriptions();
    fetchPaidSubscriptions();
    fetchUserId();
  }, [details, isModalOpen, isServiceModalOpen]);

  return (
    <>
      <Header />
      <div className="min-h-screen flex justify-center items-start bg-gray-100 p-6">
        <div className="max-w-6xl w-full flex flex-col space-y-8 justify-center rounded-xl bg-white p-5">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left: Subscriptions */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Monthly Subscriptions
              </h3>
              <ul className="flex border-b mb-3">
                <li
                  className={`cursor-pointer px-4 py-2 ${
                    subscriptionTab === "current"
                      ? "border-b-2 border-blue-600 font-semibold text-blue-600"
                      : "text-gray-500 hover:text-blue-600"
                  }`}
                  onClick={() => setSubscriptionTab("current")}
                >
                  Current
                </li>
                <li
                  className={`cursor-pointer px-4 py-2 relative ${
                    subscriptionTab === "paid"
                      ? "border-b-2 border-blue-600 font-semibold text-blue-600"
                      : "text-gray-500 hover:text-blue-600"
                  }`}
                  onClick={() => setSubscriptionTab("paid")}
                >
                  Paid{" "}
                  {/* <span className="absolute top-0.5 right-0.3 bg-red-400 w-[15px] h-[15px] text-center align-middle rounded-xl text-[13px] text-white">
                    {paidSubscriptions.length}
                  </span> */}
                </li>
              </ul>

              {subscriptionTab === "current" ? (
                <div className="max-h-[250px] overflow-y-auto space-y-3 border border-gray-200 rounded-xl p-4 bg-gray-50">
                  {subscriptionsToShow.length === 0 ? (
                    <p className="text-gray-500 text-sm">
                      No subscriptions found.
                    </p>
                  ) : (
                    currentSubscriptions.map((sub, index) => (
                      <div
                        key={index}
                        className="p-4 border rounded-xl bg-white hover:bg-gray-100 transition flex flex-col relative"
                      >
                        <span
                          className={`absolute top-4 right-4 text-sm font-medium px-3 py-1 rounded-full ${getStatusClass(
                            sub?.status
                          )}`}
                        >
                          {sub?.status.charAt(0).toUpperCase() +
                            sub?.status?.slice(1).toLowerCase()}
                        </span>

                        <div>
                          <p className="font-semibold text-gray-800">
                            {sub.paidForMonth}
                          </p>
                          <p className="text-sm text-red-500 ">
                            Due Date:{" "}
                            {formatDate(sub?.paidForDueDate || sub?.dueDate)}
                          </p>
                        </div>

                        <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
                          <p>Amount: ₹{sub?.subscription || sub?.amount}</p>
                          <p>GST: {sub?.gst}%</p>
                          <p>Total: ₹{sub?.totalAmount || sub?.amount}</p>
                        </div>

                        {sub?.status === "pending" && (
                          <div className="mt-4 flex bg-red-50 w-[230px] justify-between">
                            <button
                              onClick={() => subscriptionMarkAsPaid(sub)}
                              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-green-700 transition text-sm"
                            >
                              Mark as Paid
                            </button>
                            <button
                              onClick={() => setIsModalOpen(true)}
                              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-green-700 transition text-sm"
                            >
                              Update Date
                            </button>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              ) : (
                <div className="max-h-[250px] overflow-y-auto space-y-3 border border-gray-200 rounded-xl p-4 bg-gray-50">
                  {subscriptionsToShow.length === 0 ? (
                    <p className="text-gray-500 text-sm">
                      No paid subscriptions found.
                    </p>
                  ) : (
                    paidSubscriptions.map((sub, index) => (
                      <div
                        key={index}
                        className="p-4 border rounded-xl bg-white hover:bg-gray-100 transition flex flex-col relative"
                      >
                        <span
                          className={`absolute top-4 right-4 text-sm font-medium px-3 py-1 rounded-full ${getStatusClass(
                            sub?.status
                          )}`}
                        >
                          {sub?.status.charAt(0).toUpperCase() +
                            sub?.status?.slice(1).toLowerCase()}
                        </span>

                        <div>
                          <p className="font-semibold text-gray-800">
                            {sub.paidForMonth}
                          </p>
                          <p className="text-sm text-green-500">
                            Date:{" "}
                            {formatDate(sub?.paidForDueDate || sub?.dueDate)}
                          </p>
                        </div>

                        <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
                          <p>Amount: ₹{sub?.subscriptionId?.subscription}</p>
                          <p>GST: {sub?.gst}%</p>
                          <p>Total: ₹{sub?.subscriptionId?.amount}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Right: Services */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 capitalize">
                {currentServices[0]?.serviceType}
              </h3>
              <ul className="flex border-b mb-3">
                <li
                  className={`cursor-pointer px-4 py-2 ${
                    serviceTab === "current"
                      ? "border-b-2 border-blue-600 font-semibold text-blue-600"
                      : "text-gray-500 hover:text-blue-600"
                  }`}
                  onClick={() => setServiceTab("current")}
                >
                  Current
                </li>
                <li
                  className={`cursor-pointer px-4 py-2 ${
                    serviceTab === "paid"
                      ? "border-b-2 border-blue-600 font-semibold text-blue-600"
                      : "text-gray-500 hover:text-blue-600"
                  }`}
                  onClick={() => setServiceTab("paid")}
                >
                  Paid
                </li>
              </ul>

              {/* Current Services */}
              {serviceTab === "current" ? (
                <div className="max-h-[250px] overflow-y-auto space-y-3 border border-gray-200 rounded-xl p-4 bg-gray-50">
                  {currentServices.length === 0 ? (
                    <p className="text-gray-500 text-sm">No Current Services</p>
                  ) : (
                    currentServices.map((service, index) => (
                      <div
                        key={index}
                        className="p-4 border rounded-xl bg-white hover:bg-gray-100 transition relative"
                      >
                        <span
                          className={`absolute top-4 right-4 text-sm font-medium px-3 py-1 rounded-full ${getStatusClass(
                            service.status
                          )}`}
                        >
                          {service?.status?.charAt(0).toUpperCase() +
                            service?.status?.slice(1).toLowerCase()}
                        </span>

                        <div>
                          <p className="font-semibold text-gray-800">
                            {service?.paidForMonth}
                          </p>
                          <p className="text-sm text-red-500">
                            Due Date:{" "}
                            {service?.dueDate
                              ? formatDate(service?.dueDate)
                              : "N/A"}
                          </p>
                        </div>

                        <div className="mt-2 flex text-sm text-gray-700 justify-between items-start">
                          <p>Total EMI: {service.totalEMI || "N/A"}</p>
                          <p>EMI: {service.emiPay}</p>
                          <p>EMI Amount: ₹ {service.emiAmount || "N/A"}</p>
                        </div>

                        <div className="mt-4 flex bg-red-50 w-[230px] justify-between">
                          <button
                            onClick={markAsPaid}
                            className={`px-3 py-1 rounded text-sm text-white transition ${
                              service.status === "closed"
                                ? "bg-blue-600  cursor-not-allowed"
                                : "bg-blue-600 hover:bg-green-700"
                            }`}
                            disabled={service.status === "closed"}
                          >
                            Mark as Paid
                          </button>
                          <button
                            onClick={() => setIsServiceModalOpen(true)}
                            className={`px-3 py-1 rounded text-sm text-white transition ${
                              service.status === "closed"
                                ? "bg-blue-600 cursor-not-allowed"
                                : "bg-blue-600 hover:bg-green-700"
                            }`}
                            disabled={service.status === "closed"}
                          >
                            Update Date
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              ) : (
                // Paid Services
                <div className="max-h-[250px] overflow-y-auto space-y-3 border border-gray-200 rounded-xl p-4 bg-gray-50">
                  {paidServices.length === 0 ? (
                    <p className="text-gray-500 text-sm">No Paid Services</p>
                  ) : (
                    paidServices.map((service, index) => (
                      <div
                        key={index}
                        className="p-4 border rounded-xl bg-white hover:bg-gray-100 transition relative"
                      >
                        <span
                          className={`absolute top-4 right-4 text-sm font-medium px-3 py-1 rounded-full ${getStatusClass(
                            service.status
                          )}`}
                        >
                          {service.status.charAt(0).toUpperCase() +
                            service.status.slice(1).toLowerCase()}
                        </span>

                        <div>
                          <p className="font-semibold text-gray-800">
                            {service.paidForMonth || "N/A"}
                          </p>

                          <p className="text-sm text-green-500">
                            Date: {service?.date}
                          </p>
                        </div>

                        <div className="mt-2 flex text-sm text-gray-700 justify-between items-start">
                          <p>EMI: {service.emiNo || "N/A"}</p>
                          <p>EMI Amount: ₹ {service.emiAmount || "N/A"}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <UpdateDateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdate={handleUpdateDate}
        userId={details}
      />
      <UpdateServiceDateModal
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
        onUpdate={handleServiceUpdateDate}
        phone={phone}
      />
    </>
  );
}
