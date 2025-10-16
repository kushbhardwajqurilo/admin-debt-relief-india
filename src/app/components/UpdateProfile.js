import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import { getStroage } from "@/url/storage";
import toast from "react-hot-toast";
import { CheckCircle } from "lucide-react";

export default function UpdateProfile({ isOpen, onClose, userData }) {
  const [loading, setLoading] = useState(false);
  const [advocates, setAdvocates] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedAdvocate, setSelectedAdvocate] = useState("");
  const [updateData, setUpdateData] = useState({
    id: "",
    phone: "",
    advocate: "",
  });

  async function getAdvocates() {
    try {
      const response = await fetch(
        `${API_BASE_URL}${ApiRute.advocate.getAll}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${getStroage().token}`,
          },
        }
      );
      const result = await response.json();
      if (result?.success) setAdvocates(result?.data);
    } catch (error) {
      console.error("Failed to fetch advocates", error);
    }
  }

  async function handleUpdate() {
    setLoading(true);
    try {
      const body = { ...updateData, advocate: selectedAdvocate };
      const res = await fetch(`${API_BASE_URL}${ApiRute.driUser.update}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${getStroage().token}`,
        },
        body: JSON.stringify(body),
      });
      const result = await res.json();
      if (result?.success) {
        toast.success(result.message);
        onClose();
      } else toast.error(result?.message);
    } catch (error) {
      console.error(error);
      toast.error("Update failed");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (isOpen && userData) {
      setUpdateData({
        id: userData?.id || "",
        phone: userData?.phone || "",
        advocate: userData?.advocate || "",
      });
      setSelectedAdvocate(userData?.advocate || "");
      getAdvocates();
    }
  }, [userData, isOpen]);

  const filteredAdvocates = advocates.filter((a) =>
    a?.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-2xl shadow-lg max-w-xl w-[480px] p-6">
          <Dialog.Title className="text-2xl font-semibold mb-4 text-gray-800">
            Update Profile
          </Dialog.Title>

          {/* ID */}
          <input
            type="text"
            name="id"
            value={updateData.id}
            onChange={(e) =>
              setUpdateData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            placeholder="Enter User ID"
            className="w-full border p-2 rounded-lg mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            value={updateData.phone}
            onChange={(e) =>
              setUpdateData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            placeholder="Phone Number"
            className="w-full border p-2 rounded-lg mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Advocate Section */}
          <label className="block font-medium mb-2 text-gray-700">
            Assign Advocate
          </label>

          {/* Search bar */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search advocate..."
            className="w-full border p-2 rounded-lg mb-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Advocate List (Row-wise) */}
          <div className="border rounded-lg divide-y divide-gray-200 h-[220px] overflow-y-auto">
            {filteredAdvocates.length > 0 ? (
              filteredAdvocates.map((val) => (
                <div
                  key={val._id}
                  onClick={() => setSelectedAdvocate(val._id)}
                  className={`flex justify-between items-center px-4 py-3 cursor-pointer transition ${
                    selectedAdvocate === val._id
                      ? "bg-blue-50 border-l-4 border-blue-500"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <div>
                    <p className="font-medium text-gray-800">{val?.name}</p>
                  </div>
                  {selectedAdvocate === val._id && (
                    <CheckCircle size={20} className="text-blue-500" />
                  )}
                </div>
              ))
            ) : (
              <p className="text-center py-6 text-gray-500">
                No advocates found
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              disabled={loading}
              onClick={handleUpdate}
              className={`px-5 py-2 rounded-lg text-white transition ${
                loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
