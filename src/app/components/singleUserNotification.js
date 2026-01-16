"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import { getStroage } from "@/url/storage";
import toast from "react-hot-toast";

export default function SingleUserNotification({ isOpen, onClose, title }) {
  const [userData, setUserData] = useState([]);

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    message: "",
    type: "",
    subtitle: "",
  });

  /* ---------- GET USERS ---------- */
  const getUserData = async () => {
    const res = await fetch(`${API_BASE_URL}${ApiRute.driUser.getAll}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getStroage("token")}`,
      },
    });
    const data = await res.json();
    setUserData(data?.data || []);
  };

  useEffect(() => {
    if (isOpen) getUserData();
  }, [isOpen]);

  /* ---------- HANDLE CHANGE ---------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ---------- SUBMIT ---------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.id || !formData.title || !formData.message) {
      alert("All fields are required");
      return;
    }

    const res = await fetch(`${API_BASE_URL}${ApiRute.notifications.single}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getStroage("token")}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log(data);

    if (data?.status) {
      toast.success(data?.message);
      onClose();
    } else {
      toast.error(data?.message);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <motion.div className="relative w-full max-w-xl rounded-2xl bg-white p-6">
            <button onClick={onClose} className="absolute right-3 top-3">
              <X />
            </button>

            {title && <h2 className="mb-4 text-xl font-semibold">{title}</h2>}

            {/* ===== FORM ===== */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* User */}
              <select
                name="id"
                value={formData.userId}
                onChange={handleChange}
                className="rounded border p-2"
              >
                <option value="">Select User</option>
                {userData.map((u) => (
                  <option key={u.userId} value={u.userId}>
                    {u.name} ({u.id})
                  </option>
                ))}
              </select>

              {/* Title */}
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Notification title"
                className="rounded border p-2"
              />

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Notification message"
                className="rounded border p-2"
              />

              {/* Type */}
              <input
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="rounded border p-2"
                placeholder="Notification Type"
              />
              <input
                name="subtitle"
                value={formData.subtitle}
                onChange={handleChange}
                className="rounded border p-2"
                placeholder="Subtitle"
              />

              {/* Buttons */}
              <div className="flex justify-end gap-3">
                <button type="button" onClick={onClose}>
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
