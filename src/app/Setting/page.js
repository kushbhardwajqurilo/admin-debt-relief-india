"use client";

import { useState, useEffect, useCallback } from "react";
import { Pencil, Plus, X, Check, XCircle } from "lucide-react";
import Header from "../components/Header";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import { getStroage } from "@/url/storage";
import toast from "react-hot-toast";
import NotificationModal from "../components/NotificationsComonent";
import SingleUserNotification from "../components/singleUserNotification";

export default function NotificationSettingsPage() {
  // LEFT SIDE SIMPLE MODAL
  const [leftModalOpen, setLeftModalOpen] = useState(false);

  const [terms, setTerms] = useState([]);
  const [buttonId, setButtonId] = useState(0);
  const [policies, setPolicies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);

  // Edit states
  const [editTermIndex, setEditTermIndex] = useState(null);
  const [editTermValue, setEditTermValue] = useState("");

  const [editPolicyIndex, setEditPolicyIndex] = useState(null);
  const [editPolicyTitle, setEditPolicyTitle] = useState("");
  const [editPolicyPoints, setEditPolicyPoints] = useState([]);

  // Modals
  const [showTermModal, setShowTermModal] = useState(false);
  const [newTerm, setNewTerm] = useState("");

  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const [policyTitle, setPolicyTitle] = useState("");
  const [policyPoints, setPolicyPoints] = useState([""]);

  // Toggles
  const [isWhatsAppEnabled, setIsWhatsAppEnabled] = useState(false);
  const [isSMSEnabled, setIsSMSEnabled] = useState(false);

  const [notification, setNotification] = useState("");
  const [send, setSend] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [kycmsg, setKycMsg] = useState({
    kyc_submit: "kyc submit",
    kyc_approve: "kyc approve",
    invoice: "invoice",
  });

  //  send notification to all
  const sendNotification = async () => {
    try {
      setSend(true);
      const res = await fetch(`${API_BASE_URL}${ApiRute.notifications.all}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ message: notification }),
      });
      const result = await res.json();
      if (result?.success) {
        toast.success(result?.message);
        setNotification(null);
      } else {
        toast.error(result?.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSend(false);
    }
  };

  // Fetch Policies
  const fetchSettings = useCallback(async () => {
    try {
      setLoading(true);
      const policy = await fetch(`${API_BASE_URL}${ApiRute.policy.get}`);
      const result = await policy.json();
      setPolicies(result?.data || []);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch data:", err);
      setError("Failed to load settings. Please try again later.");
      setTerms([]);
      setPolicies([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch Terms
  const handleGetTerms = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE_URL}${ApiRute.terms.get}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const result = await res.json();
      if (result?.success) setTerms(result.data);
    } catch (error) {
      console.error("Failed to fetch terms:", error);
    }
  }, []);

  // Add Term
  const handleAddTerm = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}${ApiRute.terms.add}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${getStroage().token}`,
        },
        body: JSON.stringify({ content: newTerm }),
      });
      const result = await response.json();
      if (!result?.success) throw new Error("Failed to add term.");
      alert(result?.message);
      setNewTerm("");
      setShowTermModal(false);
      handleGetTerms();
    } catch (err) {
      console.error("Failed to add term:", err);
      alert("Failed to add term.");
    }
  }, [newTerm, handleGetTerms]);

  // Add Policy
  const handleAddPolicy = useCallback(async () => {
    if (
      policyTitle.trim() &&
      policyPoints.every((point) => point.trim() !== "")
    ) {
      try {
        const newPolicyData = {
          title: policyTitle.trim(),
          points: policyPoints.filter((point) => point.trim() !== ""),
        };

        const response = await fetch(`${API_BASE_URL}${ApiRute.policy.add}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newPolicyData),
        });

        const result = await response.json();
        if (result?.success) {
          alert(result?.message || "Policy added successfully.");
          setPolicyTitle("");
          setPolicyPoints([""]);
          setShowPolicyModal(false);
          fetchSettings(); // Refresh data
        }
      } catch (err) {
        console.error("Failed to add policy:", err);
        alert("Failed to add policy.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  }, [policyTitle, policyPoints, fetchSettings]);

  // Save Edited Term
  const handleSaveTerm = async (index) => {
    try {
      const termId = terms[index]._id;
      const response = await fetch(
        `${API_BASE_URL}${ApiRute.terms.update}/${termId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: editTermValue }),
        }
      );
      const result = await response.json();
      if (result?.success) {
        alert(result?.message);
        setEditTermIndex(null);
        setEditTermValue("");
        handleGetTerms();
      }
    } catch (error) {
      console.error("Failed to update term:", error);
    }
  };

  // Save Edited Policy
  const handleSavePolicy = async (index) => {
    try {
      const policyId = policies[index]._id;
      const updatedData = {
        title: editPolicyTitle,
        points: editPolicyPoints,
      };
      const response = await fetch(
        `${API_BASE_URL}${ApiRute.policy.update}/${policyId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedData),
        }
      );
      const result = await response.json();
      if (result?.success) {
        alert(result?.message);
        setEditPolicyIndex(null);
        fetchSettings();
      }
    } catch (error) {
      console.error("Failed to update policy:", error);
    }
  };

  async function updateTNC(id) {
    try {
      const payload = {
        content: editTermValue,
      };
      const res = await fetch(
        `${API_BASE_URL}${ApiRute.terms.update}?id=${id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${getStroage().token}`,
          },
          body: JSON.stringify(payload),
        }
      );
      const result = await res.json();
      if (result?.success) {
        handleGetTerms();
        alert(result?.message);
      } else {
        alert(result?.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  // delete TNC
  async function deleteTNC(id) {
    try {
      setButtonLoading(true);
      const res = await fetch(
        `${API_BASE_URL}${ApiRute.terms.delete}?id=${id}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${getStroage().token}`,
          },
        }
      );
      const result = await res.json();
      if (result?.success) {
        handleGetTerms();
        toast.success(result?.message);
      } else {
        toast.error(result?.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setButtonLoading(false);
    }
  }

  // delete policy
  async function deletePolicy(id) {
    try {
      setButtonLoading(true);
      const res = await fetch(
        `${API_BASE_URL}${ApiRute.policy.delete}?id=${id}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${getStroage().token}`,
          },
        }
      );
      const result = await res.json();
      if (result?.success) {
        handleGetTerms();
        fetchSettings();
        toast.success(result?.message);
      } else {
        toast.error(result?.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setButtonLoading(false);
    }
  }

  //  custom notification
  const customNotifications = async (type, val) => {
    try {
      if (notification.length === 0 || !notification) {
        toast("Please fill notification", {
          style: {
            border: "1px solid #facc15",
            padding: "px",
            fontSize: "12px",
            textAlign: "center",
            color: "#ca8a04",
          },
          icon: "⚠️",
        });
        setButtonId(0);
        return;
      }
      setButtonId(val);
      const formData = { message: notification, type: type };
      const res = await fetch(
        `${API_BASE_URL}${ApiRute.notifications.custome.all}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const result = await res.json();
      if (result?.success) {
        getCustomNotification();
        setNotification("");
        toast.success(result?.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setButtonId(0);
    }
  };

  // get custom notification
  const getCustomNotification = useCallback(async () => {
    try {
      const res = await fetch(
        `${API_BASE_URL}${ApiRute.notifications.custome.get}`
      );
      const result = await res.json();
      if (result?.success) {
        setKycMsg((prev) => ({
          ...prev,
          kyc_submit: result?.data[0]?.kyc_submit,
          kyc_approve: result?.data[0]?.kyc_approve,
          invoice: result?.data[0]?.invoice || prev.invoice,
        }));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchSettings();
    handleGetTerms();
    getCustomNotification();
  }, [fetchSettings, handleGetTerms, getCustomNotification]);

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-[#edf0ff] p-6 flex gap-4">
        {/* Left Panel */}
        <div className="w-[400px] bg-white  rounded-xl shadow space-y-6 h-full p-10">
          <h2 className="text-2xl font-bold">Notification Settings</h2>

          {/* WhatsApp Toggle */}
          <div className="flex justify-between items-center mt-6">
            <span>Enable WhatsApp Alert :</span>
            <label className="relative inline-block w-12 h-6">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isWhatsAppEnabled}
                onChange={(e) => setIsWhatsAppEnabled(e.target.checked)}
              />
              <div className="w-full h-full bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-colors duration-300"></div>
              <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-6"></div>
            </label>
          </div>

          {/* SMS Toggle */}
          <div className="flex justify-between items-center mt-4">
            <span>Enable SMS Alert :</span>
            <label className="relative inline-block w-12 h-6">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isSMSEnabled}
                onChange={(e) => setIsSMSEnabled(e.target.checked)}
              />
              <div className="w-full h-full bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-colors duration-300"></div>
              <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-6"></div>
            </label>
          </div>

          {/* Service Timing */}
          <div>
            <p className="font-medium mb-1">Service Timing :</p>
            <div className="bg-gray-100 px-4 py-2 rounded-xl text-sm text-gray-600 mt-4">
              Available from 9:00 AM - 11:00 AM
            </div>
          </div>
          <div>
            <p className="font-medium mb-1">Notification Setup</p>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="px-4 py-1 bg-blue-600 text-white font-medium rounded-sm shadow hover:bg-blue-700 mt-2"
            >
              Set Notification
            </button>
          </div>
          <div>
            <p className="font-medium mb-1">Single User Notification</p>

            {/* ✅ NEW BUTTON */}
            <button
              type="button"
              onClick={() => setLeftModalOpen(true)}
              className="px-4 py-1 bg-blue-600 text-white font-medium rounded-sm shadow hover:bg-green-700 mt-2"
            >
              Set Notification
            </button>
          </div>

          {/* Notification Messages */}
          <div className="mt-5">
            <h3 className="font-bold text-2xl mb-5">
              Send Notification TO All
            </h3>

            <div className="flex items-start flex-col">
              <input
                type="text"
                placeholder="Enter notification message..."
                name="message"
                onChange={(e) => setNotification(e.target.value)}
                className="w-full flex-1 px-4 py-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={sendNotification}
                className="px-4 py-1 bg-blue-600 text-white font-medium rounded-sm shadow hover:bg-blue-700 mt-2"
              >
                {send ? "Sending.." : " Send"}
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-[65%] bg-white p-6 rounded-xl shadow space-y-6">
          {/* Terms */}
          <h2 className="text-xl font-bold">Terms & Conditions</h2>
          <div className="space-y-4">
            {terms?.map((item, idx) => (
              <div key={idx} className="bg-gray-100 px-3 py-2 rounded-xl">
                {editTermIndex === idx ? (
                  <>
                    <textarea
                      value={editTermValue}
                      onChange={(e) => setEditTermValue(e.target.value)}
                      className="border p-2 rounded w-full mb-2"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => updateTNC(item?._id)}
                        className="bg-green-500 text-white px-3 py-1 rounded flex items-center gap-1"
                      >
                        <Check size={14} /> Save
                      </button>
                      <button
                        onClick={() => {
                          setEditTermIndex(null);
                          setEditTermValue("");
                        }}
                        className="bg-gray-500 text-white px-3 py-1 rounded flex items-center gap-1"
                      >
                        <XCircle size={14} /> Cancel
                      </button>
                      <button
                        onClick={() => deleteTNC(item?._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded flex items-center gap-1"
                      >
                        <XCircle size={14} />{" "}
                        {buttonLoading ? "Deleting..." : "delete"}
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex justify-between items-start gap-2">
                    <p className="flex-1 break-words">{`${idx + 1}) ${
                      item.content
                    }`}</p>
                    <Pencil
                      className="cursor-pointer shrink-0"
                      onClick={() => {
                        setEditTermIndex(idx);
                        setEditTermValue(item.content);
                      }}
                    />
                  </div>
                )}
              </div>
            ))}

            <div className="flex gap-2 items-center">
              <input
                value={newTerm}
                onChange={(e) => setNewTerm(e.target.value)}
                placeholder="Enter Terms & Conditions"
                className="border border-gray-500 outline-none px-3 py-1 rounded w-full"
              />
              <button
                onClick={handleAddTerm}
                className="w-[100px] bg-[#044b99] p-2 py-1 rounded text-white cursor-pointer"
              >
                Add
              </button>
            </div>
          </div>

          {/* Policies */}
          <div className="pt-4">
            <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>

            {/* Existing Policies */}
            <div className="space-y-4">
              {policies.map((policy, idx) => (
                <div key={idx} className="bg-gray-100 px-4 py-3 rounded-xl">
                  {editPolicyIndex === idx ? (
                    <>
                      <input
                        type="text"
                        value={editPolicyTitle}
                        onChange={(e) => setEditPolicyTitle(e.target.value)}
                        className="border p-2 rounded w-full mb-2"
                      />
                      {editPolicyPoints.map((point, pIdx) => (
                        <input
                          key={pIdx}
                          type="text"
                          value={point}
                          onChange={(e) => {
                            const updated = [...editPolicyPoints];
                            updated[pIdx] = e.target.value;
                            setEditPolicyPoints(updated);
                          }}
                          className="border p-2 rounded w-full mb-2"
                        />
                      ))}
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleSavePolicy(idx)}
                          className="bg-green-500 text-white px-3 py-1 rounded flex items-center gap-1"
                        >
                          <Check size={14} /> Save
                        </button>
                        <button
                          onClick={() => setEditPolicyIndex(null)}
                          className="bg-gray-500 text-white px-3 py-1 rounded flex items-center gap-1"
                        >
                          <XCircle size={14} /> Cancel
                        </button>
                        <button
                          onClick={() => deletePolicy(policy?._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded flex items-center gap-1"
                        >
                          <XCircle size={14} /> Delete
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between items-center mb-1">
                        <p className="font-semibold">{`${idx + 1}) ${
                          policy.title
                        }`}</p>
                        <Pencil
                          className="cursor-pointer"
                          onClick={() => {
                            setEditPolicyIndex(idx);
                            setEditPolicyTitle(policy.title);
                            setEditPolicyPoints(policy.points);
                          }}
                        />
                      </div>
                      <ul className="list-disc list-inside">
                        {policy.points.map((point, pIdx) => (
                          <li key={pIdx}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Add New Policy */}
            {showPolicyModal ? (
              <div className="mt-4 p-4 border rounded bg-gray-50 space-y-3">
                <input
                  type="text"
                  value={policyTitle}
                  onChange={(e) => setPolicyTitle(e.target.value)}
                  placeholder="Policy Title"
                  className="border p-2 rounded w-full"
                />
                {policyPoints.map((point, idx) => (
                  <input
                    key={idx}
                    type="text"
                    value={point}
                    onChange={(e) => {
                      const updated = [...policyPoints];
                      updated[idx] = e.target.value;
                      setPolicyPoints(updated);
                    }}
                    placeholder={`Policy Point ${idx + 1}`}
                    className="border p-2 rounded w-full"
                  />
                ))}
                <button
                  onClick={() => setPolicyPoints([...policyPoints, ""])}
                  className="text-blue-600 text-sm"
                >
                  + Add Point
                </button>

                <div className="flex gap-2 mt-2">
                  <button
                    onClick={handleAddPolicy}
                    className="bg-[#044b99] text-white px-4 py-2 rounded"
                  >
                    Save Policy
                  </button>
                  <button
                    onClick={() => setShowPolicyModal(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowPolicyModal(true)}
                className="mt-4 flex items-center gap-2 bg-[#044b99] text-white px-4 py-2 rounded"
              >
                <Plus size={16} /> Add Policy
              </button>
            )}
          </div>
        </div>
      </div>
      <NotificationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Set Custom Notification"
      >
        <div className="w-full p-2 flex flex-col gap-3">
          {/* KYC Notification */}
          <div className="bg-white w-full p-4 border-1 border-gray-400 rounded-sm shadow-xl shadow-gray-100">
            <p>KYC Upload Notification</p>
            <div>
              <input
                className="w-full border-1 p-1 px-2 m-1 border-gray-400 rounded-sm"
                placeholder={`${
                  kycmsg?.kyc_submit
                    ? kycmsg?.kyc_submit
                    : "Your documents have been submitted. Admin will approve within 24 hours."
                }`}
                // value={kycmsg?.kyc_submit}
                onChange={(e) => {
                  setKycMsg((prev) => ({
                    ...prev,
                    kyc_submit: e.target.value,
                  }));
                  setNotification(e.target.value);
                }}
              ></input>
            </div>
            <div className="mt-2">
              <button
                className="border-1 border-[#47ff6c] p-1 px-2 m-1 rounded-sm text-[13px] hover:bg-[#47ff6c] hover:text-white transition cursor-pointer"
                onClick={() => customNotifications("submit", 1)}
              >
                {buttonId === 1 ? "Updating" : "Update"}
              </button>

              <button
                className="border-1 border-blue-500 p-1 px-2 m-1 rounded-sm text-[13px] hover:bg-blue-500 hover:text-white transition cursor-pointer "
                onClick={() => customNotifications("approve", 4)}
              >
                {buttonId === 4 ? "Waat..." : "Add"}
              </button>
            </div>
          </div>
          <div className="bg-white w-full p-4 border-1 border-gray-400 rounded-sm shadow-xl shadow-gray-100">
            <p>KYC Approve Notification</p>
            <div>
              <input
                className="w-full border-1 p-1 px-2 m-1 border-gray-400"
                placeholder={`${
                  kycmsg?.kyc_approve
                    ? kycmsg?.kyc_approve
                    : "Congratulations ${updateKYC?.name} your KYC Has been approved by admin"
                }`}
                // value={kycmsg.kyc_approve}
                onChange={(e) => {
                  setKycMsg((prev) => ({
                    ...prev,
                    kyc_approve: e.target.value,
                  }));
                  setNotification(e.target.value);
                }}
              ></input>
            </div>
            <div className="mt-2">
              <button
                className="border-1 border-[#47ff6c] p-1 px-2 m-1 rounded-sm text-[13px] hover:bg-[#47ff6c] hover:text-white transition cursor-pointer"
                onClick={() => customNotifications("approve", 2)}
              >
                {buttonId === 2 ? "Updating" : "Update"}
              </button>

              <button
                className="border-1 border-blue-500 p-1 px-2 m-1 rounded-sm text-[13px] hover:bg-blue-500 hover:text-white transition cursor-pointer "
                onClick={() => customNotifications("aprrove", 5)}
              >
                {buttonId === 5 ? "Wait..." : "Add"}
              </button>
            </div>
          </div>

          {/* Invoice Notification */}
          <div className="bg-white w-full p-4 border-1 border-gray-400 rounded-sm shadow-xl shadow-gray-100">
            <p>Invoice Notification</p>
            <div>
              <input
                className="w-full border-1 p-1 px-2 m-1 border-gray-400"
                placeholder={`${
                  kycmsg?.invoice
                    ? kycmsg?.invoice
                    : "Congratulations ${updateKYC?.name} your KYC Has been approved by admin"
                }`}
                // value={kycmsg.invoice}
                onChange={(e) => {
                  setKycMsg((prev) => ({ ...prev, invoice: e.target.value }));
                  setNotification(e.target.value);
                }}
              ></input>
            </div>
            <div className="mt-2">
              <button
                className="border-1 border-[#47ff6c] p-1 px-2 m-1 rounded-sm text-[13px] hover:bg-[#47ff6c] hover:text-white transition cursor-pointer"
                onClick={() => customNotifications("invoice", 3)}
              >
                {buttonId === 3 ? "Updating" : "Update"}
              </button>

              <button
                className="border-1 border-blue-500 p-1 px-2 m-1 rounded-sm text-[13px] hover:bg-blue-500 hover:text-white transition cursor-pointer "
                onClick={() => customNotifications("invoice", 6)}
              >
                {buttonId === 6 ? "Wait..." : "Add"}
              </button>
            </div>
          </div>
        </div>
      </NotificationModal>
      <SingleUserNotification
        isOpen={leftModalOpen}
        onClose={() => setLeftModalOpen(false)}
        title="Set Single User Notification"
      />
    </div>
  );
}
