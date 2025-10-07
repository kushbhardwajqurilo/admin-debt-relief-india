"use client";
import { ApiRute } from "@/url/ApiRoute";
import { API_BASE_URL } from "@/url/BaseURL";
import { getStroage } from "@/url/storage";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
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

export default function UserDashboard() {
  const { details } = useParams();

  // ✅ Independent tab states
  const [subscriptionTab, setSubscriptionTab] = useState("current");
  const [serviceTab, setServiceTab] = useState("current");

  // ✅ Separate states for subscriptions
  const [currentSubscriptions, setCurrentSubscriptions] = useState([]);
  const [paidSubscriptions, setPaidSubscriptions] = useState([]);

  // ✅ Separate states for services
  const [currentServices, setCurrentServices] = useState([]);
  const [paidServices, setPaidServices] = useState([]);

  const getStatusClass = (status) => {
    if (status === "paid") return "bg-green-100 text-green-600";
    if (status === "pending") return "bg-yellow-100 text-yellow-600";
    return "bg-gray-200 text-gray-500";
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
      console.error(err);
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
      console.error(err);
      console.error("Error fetching paid subscriptions.");
    }
  };

  // ✅ Fetch unpaid/current services
  const fetchCurrentServices = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}${ApiRute?.services?.current}?userId=${details}`,
        { method: "GET", headers: { "content-type": "application/json" } }
      );
      const result = await response.json();
      if (result.data && result.data.length > 0) {
        setCurrentServices(
          result.data
            .map((svc) => ({ ...svc, status: svc.isPaid ? "paid" : "pending" }))
            .filter((s) => s.status === "pending")
        );
      } else {
        setCurrentServices([]);
      }
    } catch (err) {
      console.error(err);
      console.error("Error fetching current services.");
    }
  };

  // ✅ Fetch paid services
  const fetchPaidServices = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}${ApiRute?.services?.paid}?userId=${details}`,
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
        setPaidServices(result.data.map((svc) => ({ ...svc, status: "paid" })));
      } else {
        setPaidServices([]);
      }
    } catch (err) {
      console.error(err);
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
      console.error(err);
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

  // ✅ Initial fetch
  useEffect(() => {
    fetchCurrentSubscriptions();
    fetchPaidSubscriptions();
    fetchCurrentServices();
    fetchPaidServices();
  }, [details]);

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
                          <div className="mt-4 flex justify-start">
                            <button
                              onClick={() => subscriptionMarkAsPaid(sub)}
                              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-green-700 transition text-sm"
                            >
                              Mark as Paid
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

                        {sub?.status === "pending" && (
                          <div className="mt-4 flex justify-start">
                            <button
                              onClick={() => subscriptionMarkAsPaid(sub)}
                              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-green-700 transition text-sm"
                            >
                              Mark as Paid
                            </button>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Right: Services */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Services
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

              <div className="max-h-[250px] overflow-y-auto space-y-3 border border-gray-200 rounded-xl p-4 bg-gray-50">
                {servicesToShow.length === 0 ? (
                  <p className="text-gray-500 text-sm">No services found.</p>
                ) : (
                  servicesToShow.map((service, index) => (
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
                          sub?.status?.slice(1).toLowerCase()}
                      </span>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {service.paidForMonth}
                        </p>
                        <p className="text-sm text-gray-500">
                          EMI Number: {service.emiNumber}
                        </p>
                      </div>
                      <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
                        <p>EMI Amount: ₹{service.emiAmount}</p>
                        <p>Due Date: {formatDate(service.dueDate)}</p>
                      </div>
                      {service.status === "pending" && (
                        <button
                          onClick={() => checkServicePayment(index)}
                          className="absolute bottom-4 right-4 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm"
                        >
                          Mark as Paid
                        </button>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
