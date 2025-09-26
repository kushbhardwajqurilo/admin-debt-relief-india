// import { Dialog } from "@headlessui/react";
// import { useState } from "react";

// export default function UpdateProfile({ isOpen, onClose, userData }) {
//   const [loading, setLoading] = useState(false);
//   const [updateData, setUpdateData] = useState({
//     id: "",
//     phone: "",
//   });
//   const handleUpdate = async () => {
//     try {
//       alert(updateData.id + updateData.phone);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <Dialog open={isOpen} onClose={onClose} className="relative z-50">
//       <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
//       <div className="fixed inset-0 flex items-center justify-center p-4">
//         <Dialog.Panel className="bg-white rounded-xl max-w-xl w-[450px] p-6">
//           <Dialog.Title className="text-xl font-bold mb-4">
//             Update Profile
//           </Dialog.Title>

//           {/* Example fields */}
//           <input
//             type="text"
//             name="id"
//             onChange={(e) =>
//               setUpdateData((prev) => ({
//                 ...prev,
//                 [e.target.name]: e.target.value,
//               }))
//             }
//             placeholder="Enter User ID"
//             className="w-full border p-2 rounded mb-3"
//           />
//           {/* Example fields */}
//           <input
//             type="text"
//             name="phone"
//             onChange={(e) =>
//               setUpdateData((prev) => ({
//                 ...prev,
//                 [e.target.name]: e.target.value,
//               }))
//             }
//             placeholder="Phone Number"
//             className="w-full border p-2 rounded mb-3"
//           />
//           {/* Add other fields similarly */}

//           <div className="flex justify-end gap-2 mt-4">
//             <button
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-300 rounded cursor-pointer"
//             >
//               Cancel
//             </button>
//             <button
//               disabled={loading}
//               onClick={handleUpdate}
//               className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
//             >
//               {loading ? "Updating..." : "Update"}
//             </button>
//           </div>
//         </Dialog.Panel>
//       </div>
//     </Dialog>
//   );
// }

import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import { getStroage } from "@/url/storage";
import toast from "react-hot-toast";

export default function UpdateProfile({ isOpen, onClose, userData }) {
  const [loading, setLoading] = useState(false);
  const [updateData, setUpdateData] = useState({
    id: "",
    phone: "",
  });
  async function handleUpdate() {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}${ApiRute.driUser.update}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${getStroage().token}`,
        },
        body: JSON.stringify(updateData),
      });
      const result = await res.json();
      if (result?.success) {
        toast.success(result?.message);
      } else toast.error(result?.message);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (isOpen && userData) {
      setUpdateData({
        id: userData?.id || "",
        phone: userData?.phone || "",
      });
    }
  }, [userData, isOpen]);

  // const handleUpdate = async () => {
  //   try {
  //     alert(updateData.id + " | " + updateData.phone);
  //     // 🔥 here you can call API to update user
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-xl max-w-xl w-[450px] p-6">
          <Dialog.Title className="text-xl font-bold mb-4">
            Update Profile
          </Dialog.Title>

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
            className="w-full border p-2 rounded mb-3"
          />
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
            className="w-full border p-2 rounded mb-3"
          />

          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded cursor-pointer"
            >
              Cancel
            </button>
            <button
              disabled={loading}
              onClick={handleUpdate}
              className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
