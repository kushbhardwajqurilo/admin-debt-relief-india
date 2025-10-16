// "use client";

// import { use, useEffect, useState } from "react";
// import { FaEnvelope, FaLock, FaCloudUploadAlt, FaEdit } from "react-icons/fa";
// import { MdCancel } from "react-icons/md";
// import Header from "../components/Header";
// import { API_BASE_URL } from "@/url/BaseURL";
// import { ApiRute } from "@/url/ApiRoute";
// import { getForgetStorage, getStroage, setFogetStorage } from "@/url/storage";
// import toast from "react-hot-toast";
// import Image from "next/image";

// export default function UserProfileAndAccount() {
//   const [showProgress, setShowProgress] = useState(false);
//   const [progress, setProgress] = useState(0);

//   const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
//   const [lightModeEnabled, setLightModeEnabled] = useState(true);
//   const [isEditingEmail, setIsEditingEmail] = useState(false);
//   const [isEditingPhone, setIsEditingPhone] = useState(false);
//   const [email, setEmail] = useState("KDgmail.com");
//   const [phone, setPhone] = useState("+91 9932283374");
//   const [imagePreview, setImagePreview] = useState("/login.png");
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [adminDetails, setAdminDetails] = useState("");
//   const [isUploading, setIsUploading] = useState(false); // Loader state
//   const [bannerImg, setBanner] = useState([]);

//   // ---- Change password modals ----
//   const [showOtpModal, setShowOtpModal] = useState(false);
//   const [showVerifyOtpModal, setShowVerifyOtpModal] = useState(false);
//   const [showNewPassModal, setShowNewPassModal] = useState(false);

//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [load, setLoad] = useState(false);
//   const [refresh, setRefresh] = useState(false);
//   function refreshFun() {
//     setRefresh((prev) => !prev);
//   }
//   async function getAdminDetails() {
//     try {
//       const response = await fetch(
//         `${API_BASE_URL}${ApiRute.admin.getadmindetail}`,
//         {
//           method: "GET",
//           headers: {
//             "content-type": "application/json",
//             authorization: `Bearer ${getStroage().token}`,
//           },
//         }
//       );
//       const banner = await fetch(
//         `${API_BASE_URL}${ApiRute.admin.getadminBanner}`
//       );
//       const resp = await banner.json();
//       if (resp.success) {
//         setBanner(resp?.data);
//       }
//       const result = await response.json();
//       if (result?.success) {
//         setAdminDetails(result);
//         setPhone(result?.data?.phone);
//         setEmail(result?.data?.email);
//       } else {
//         console.error("result", result);
//       }
//     } catch (err) {
//       console.error("get admin error", err);
//     }
//   }

//   useEffect(() => {
//     getAdminDetails();
//   }, []);
//   useEffect(() => {
//     getAdminDetails();
//   }, [refresh]);

//   // --- Image Upload ---
//   const handleImageChange = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setImagePreview(URL.createObjectURL(file));
//     setSelectedImage(file);
//     setIsUploading(true);

//     const formData = new FormData();
//     formData.append("image", file);

//     try {
//       const res = await fetch(`${API_BASE_URL}${ApiRute.admin.updatePRofule}`, {
//         method: "PUT",
//         headers: {
//           authorization: `Bearer ${getStroage().token}`,
//         },
//         body: formData,
//       });

//       const data = await res.json();
//       if (data?.success) {
//         getAdminDetails();
//         toast.success("Profile updated");
//       } else {
//         toast.error(data?.message);
//       }
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   // async function handleAdminBackground(e) {
//   //   try {
//   //     const file = e.target.files[0];
//   //     if (!file) return;

//   //     const formData = new FormData();
//   //     formData.append("image", file);
//   //     const res = await fetch(`${API_BASE_URL}${ApiRute.admin?.adminbanner}`, {
//   //       method: "POST",
//   //       headers: {
//   //         authorization: `Bearer ${getStroage().token}`,
//   //       },
//   //       body: formData,
//   //     });
//   //     const result = await res.json();
//   //     if (result.success) {
//   //       toast.success("Background updated");
//   //     } else {
//   //       toast.error(result?.message);
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //   } finally {
//   //     setIsUploading(false);
//   //   }
//   // }

//   async function updateEmailPass() {
//     try {
//       const payload = {
//         email: email,
//         phone: phone,
//       };
//       setLoad(true);
//       const res = await fetch(`${API_BASE_URL}${ApiRute.admin.updateAdmin}`, {
//         method: "PUT",
//         headers: {
//           "content-type": "application/json",
//           authorization: `Bearer ${getStroage().token}`,
//         },
//         body: JSON.stringify(payload),
//       });
//       const result = await res.json();
//       if (result?.success) {
//         toast.success(result?.message);
//       } else {
//         toast.error(result?.message);
//       }
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoad(false);
//     }
//   }

//   // --- Change password flow ---
//   async function handleRequestOtp() {
//     try {
//       setLoad(true);
//       const res = await fetch(`${API_BASE_URL}${ApiRute.admin.requestOtp}`, {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//           authorization: `Bearer ${getStroage().token}`,
//         },
//         body: JSON.stringify({ phone }),
//       });
//       const result = await res.json();
//       if (result.success) {
//         toast.success("OTP sent!");
//         setShowOtpModal(false);
//         setShowVerifyOtpModal(true);
//         setTimeout(() => setOtp(result?.otp), 2000);
//       } else {
//         toast.error(result.message || "Failed to send OTP");
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoad(false);
//     }
//   }

//   async function handleVerifyOtp() {
//     try {
//       setLoad(true);
//       const res = await fetch(`${API_BASE_URL}${ApiRute.admin.verifyOtp}`, {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//           authorization: `Bearer ${getStroage().token}`,
//         },
//         body: JSON.stringify({ phone, otp }),
//       });
//       const result = await res.json();
//       if (result.success) {
//         toast.success("OTP verified!");
//         setShowVerifyOtpModal(false);
//         setShowNewPassModal(true);
//         setFogetStorage(result);
//       } else {
//         toast.error(result.message || "Invalid OTP");
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoad(false);
//     }
//   }

//   async function handleChangePassword() {
//     try {
//       setLoad(true);
//       const res = await fetch(
//         `${API_BASE_URL}${ApiRute.admin.changepassword}`,
//         {
//           method: "PUT",
//           headers: {
//             "content-type": "application/json",
//             authorization: `Bearer ${getForgetStorage().verifyToken}`,
//           },
//           body: JSON.stringify({ phone, newPassword }),
//         }
//       );
//       const result = await res.json();
//       if (result.success) {
//         toast.success("Password changed!");
//         setShowNewPassModal(false);
//         setNewPassword("");
//         localStorage.removeItem("token");
//       } else {
//         toast.error(result.message || "Failed to change password");
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoad(false);
//     }
//   }

//   // backup
//   async function backup() {
//     try {
//       setLoad(true);
//       setProgress(0);
//       setShowProgress(true);

//       // Start simulated progress until backend finishes
//       let interval = setInterval(() => {
//         setProgress((p) => {
//           if (p >= 95) return 95; // stop auto-progress near completion
//           return p + 5;
//         });
//       }, 300);

//       const backupResponse = await fetch(
//         `${API_BASE_URL}${ApiRute.admin.backup}`,
//         {
//           method: "POST",
//           headers: {
//             "content-type": "application/json",
//             authorization: `Bearer ${getStroage().token}`,
//           },
//         }
//       );

//       const backupResult = await backupResponse.json();

//       clearInterval(interval);
//       setProgress(100);

//       if (backupResult.success) {
//         toast.success("Backup completed successfully!");
//       } else {
//         toast.error("Backup failed!");
//       }

//       setTimeout(() => {
//         setShowProgress(false);
//         setProgress(0);
//       }, 1000);
//     } catch (error) {
//       console.error(error);
//       toast.error("Backup failed due to server error");
//       setShowProgress(false);
//     } finally {
//       setLoad(false);
//     }
//   }

//   return (
//     <div>
//       <Header data={adminDetails?.data?.image} />

//       <div
//         className="min-h-screen p-8"
//         style={{
//           backgroundColor: lightModeEnabled ? "white" : "black",
//         }}
//       >
//         <div className="flex flex-col md:flex-row  justify-between w-full max-w-6xl mx-auto overflow-hidden gap-4 p-5 ">
//           {/* Left Profile Section */}
//           <div className="flex flex-col w-sm  items-center rounded-2xl p-4 border border-gray-300 shadow-xl">
//             <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-purple-500 bg-white flex items-center justify-center">
//               {adminDetails?.data?.image ? (
//                 <Image
//                   src={adminDetails?.data?.image}
//                   alt="Profile"
//                   fill
//                   sizes="160px" // ✅ required when using fill
//                   className="object-contain"
//                 />
//               ) : (
//                 <Image
//                   src="/login.png" // ✅ fallback
//                   alt="Default Profile"
//                   fill
//                   sizes="160px"
//                   className="object-contain"
//                 />
//               )}
//               {isUploading && (
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                   <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
//                 </div>
//               )}
//             </div>

//             <label className="cursor-pointer flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-full mb-6 hover:bg-blue-600 transition-colors text-sm font-medium shadow-md">
//               <FaCloudUploadAlt className="h-4 w-4" />
//               <span>Upload Photo</span>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 hidden
//               />
//             </label>
//             {/* <label className="cursor-pointer flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-full mb-6 hover:bg-blue-600 transition-colors text-sm font-medium shadow-md">
//               <FaCloudUploadAlt className="h-4 w-4" />
//               <span>Upload background Image</span>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleAdminBackground}
//                 hidden
//               />
//             </label> */}
//             <div
//               className="w-full  flex flex-col items-center gap-2"
//               style={{
//                 color: lightModeEnabled ? "black" : "white",
//               }}
//             >
//               <h2 className="text-2xl font-bold mb-1">
//                 {adminDetails?.data?.name}
//               </h2>
//               <div className="flex items-center space-x-2  mb-1 justify-center">
//                 <p className="flex items-center gap-2">
//                   <FaEnvelope className="w-4 h-4 " />
//                   <span>{email}</span>
//                 </p>
//               </div>

//               <a
//                 onClick={() => setShowOtpModal(true)}
//                 className="flex items-center space-x-2  hover:text-blue-500 cursor-pointer justify-center transition-colors"
//               >
//                 <p className="flex items-center gap-2">
//                   <FaLock className="w-4 h-4 " />
//                   <span className="text-sm font-medium text-center">
//                     Change Password
//                   </span>
//                 </p>
//               </a>
//             </div>
//           </div>

//           {/* Right Settings Section */}
//           <div
//             className="p-8 md:p-12  md:w-2/3 border border-gray-300 rounded-xl shadow-lg space-y-6"
//             style={{
//               backgroundColor: lightModeEnabled ? "white" : "black",
//               color: lightModeEnabled ? "black" : "white",
//             }}
//           >
//             <h2 className="text-3xl font-bold mb-8 ">Account Settings</h2>

//             {/* Email */}
//             <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
//               <label className="w-full md:w-48  font-semibold mb-2 md:mb-0">
//                 Update E-mail:
//               </label>
//               <div className="relative flex-1 w-full">
//                 <input
//                   type="email"
//                   value={email}
//                   readOnly={!isEditingEmail}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className={`w-full border rounded-md py-2 px-4 focus:outline-none pr-12 transition-all duration-300
//                     ${
//                       isEditingEmail
//                         ? "border-blue-500 ring-2 ring-blue-500"
//                         : "border-gray-300"
//                     }
//                     ${
//                       lightModeEnabled
//                         ? "placeholder:text-black text-black bg-white"
//                         : "placeholder:text-white text-white bg-black"
//                     }
//                   `}
//                 />
//                 <button
//                   onClick={() => setIsEditingEmail(!isEditingEmail)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2  hover:text-blue-500 transition-colors"
//                 >
//                   <FaEdit className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Phone */}
//             <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
//               <label className="w-full md:w-48  font-semibold mb-2 md:mb-0">
//                 Update Mobile No:
//               </label>
//               <div className="relative flex-1 w-full">
//                 <input
//                   type="text"
//                   value={phone}
//                   readOnly={!isEditingPhone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   className={`w-full border rounded-md py-2 px-4 focus:outline-none pr-12 transition-all duration-300
//                     ${
//                       isEditingPhone
//                         ? "border-blue-500 ring-2 ring-blue-500"
//                         : "border-gray-300"
//                     }
//                     ${
//                       lightModeEnabled
//                         ? "placeholder:text-black text-black bg-white"
//                         : "placeholder:text-white text-white bg-black"
//                     }
//                   `}
//                 />
//                 <button
//                   onClick={() => setIsEditingPhone(!isEditingPhone)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2  hover:text-blue-500 transition-colors"
//                 >
//                   <FaEdit className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>

//             <hr className="my-8 border-gray-200" />

//             {/* Toggles */}
//             {/* <div className="flex justify-between items-center mb-10">
//               <label className=" font-semibold">Light Mode</label>
//               <label
//                 htmlFor="light-mode"
//                 className="relative inline-flex items-center cursor-pointer"
//               >
//                 <input
//                   type="checkbox"
//                   id="light-mode"
//                   className="sr-only peer"
//                   checked={lightModeEnabled}
//                   onChange={() => setLightModeEnabled(!lightModeEnabled)}
//                 />
//                 <div
//                   className="w-14 h-8 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full
//                   peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1
//                   after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"
//                 ></div>
//               </label>
//             </div> */}

//             {/* Buttons */}
//             <div className="flex justify-end space-x-4">
//               <button
//                 onClick={updateEmailPass}
//                 className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md"
//               >
//                 {load ? "Saving...." : "Save Changes"}
//               </button>
//               <button
//                 onClick={backup}
//                 className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md"
//               >
//                 Backup
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {showProgress && (
//         <div className="w-full bg-gray-200 rounded-full h-4 mt-4 overflow-hidden">
//           <div
//             className="bg-green-500 h-4 text-xs text-white text-center transition-all duration-300"
//             style={{ width: `${progress}%` }}
//           >
//             {progress}%
//           </div>
//         </div>
//       )}
//       {/* Step 1: Request OTP Modal */}
//       {showOtpModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-xl w-96 shadow-lg relative">
//             <MdCancel
//               className="absolute text-[20px] bg-black text-white rounded-2xl cursor-pointer right-[-10] top-[-5]"
//               onClick={() => setShowOtpModal(false)}
//             />
//             <h2 className="text-xl font-bold mb-4">Request OTP</h2>
//             <input
//               type="text"
//               value={phone}
//               readOnly
//               className="w-full border px-3 py-2 mb-4 rounded"
//             />
//             <button
//               onClick={handleRequestOtp}
//               className="w-full bg-blue-600 text-white py-2 rounded"
//             >
//               {load ? "Wait.." : "Send OTP"}
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Step 2: Verify OTP Modal */}
//       {showVerifyOtpModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-xl w-96 shadow-lg relative">
//             <MdCancel
//               className="absolute text-[20px] bg-black text-white rounded-2xl cursor-pointer right-[-10] top-[-5]"
//               onClick={() => setShowVerifyOtpModal(false)}
//             />
//             <h2 className="text-xl font-bold mb-4">Verify OTP</h2>
//             <input
//               type="text"
//               value={phone}
//               readOnly
//               className="w-full border px-3 py-2 mb-4 rounded"
//             />
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               onChange={(e) => setOtp(e.target.value)}
//               value={otp}
//               className="w-full border px-3 py-2 mb-4 rounded"
//             />
//             <button
//               onClick={handleVerifyOtp}
//               className="w-full bg-green-600 text-white py-2 rounded"
//             >
//               {load ? "Wait..." : " Verify OTP"}
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Step 3: New Password Modal */}
//       {showNewPassModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-xl w-96 shadow-lg relative">
//             <MdCancel
//               className="absolute text-[20px] bg-black text-white rounded-2xl cursor-pointer right-[-10] top-[-5]"
//               onClick={() => setShowNewPassModal(false)}
//             />
//             <h2 className="text-xl font-bold mb-4">Set New Password</h2>
//             <input
//               type="password"
//               placeholder="Enter New Password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               className="w-full border px-3 py-2 mb-4 rounded"
//             />
//             <button
//               onClick={handleChangePassword}
//               className="w-full bg-purple-600 text-white py-2 rounded"
//             >
//               {load ? "wait..." : " Change Password"}
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { use, useEffect, useState } from "react";
import { FaEnvelope, FaLock, FaCloudUploadAlt, FaEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Header from "../components/Header";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import { getForgetStorage, getStroage, setFogetStorage } from "@/url/storage";
import toast from "react-hot-toast";
import Image from "next/image";

export default function UserProfileAndAccount() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [lightModeEnabled, setLightModeEnabled] = useState(true);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [email, setEmail] = useState("KDgmail.com");
  const [phone, setPhone] = useState("+91 9932283374");
  const [imagePreview, setImagePreview] = useState("/login.png");
  const [selectedImage, setSelectedImage] = useState(null);
  const [adminDetails, setAdminDetails] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [bannerImg, setBanner] = useState([]);
  const [load, setLoad] = useState(false);
  const [refresh, setRefresh] = useState(false);

  // ✅ Progress Bar States
  const [showProgress, setShowProgress] = useState(false);
  const [progress, setProgress] = useState(0);

  function refreshFun() {
    setRefresh((prev) => !prev);
  }

  async function getAdminDetails() {
    try {
      const response = await fetch(
        `${API_BASE_URL}${ApiRute.admin.getadmindetail}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${getStroage().token}`,
          },
        }
      );
      const banner = await fetch(
        `${API_BASE_URL}${ApiRute.admin.getadminBanner}`
      );
      const resp = await banner.json();
      if (resp.success) {
        setBanner(resp?.data);
      }
      const result = await response.json();
      if (result?.success) {
        setAdminDetails(result);
        setPhone(result?.data?.phone);
        setEmail(result?.data?.email);
      } else {
        console.error("result", result);
      }
    } catch (err) {
      console.error("get admin error", err);
    }
  }

  useEffect(() => {
    getAdminDetails();
  }, []);
  useEffect(() => {
    getAdminDetails();
  }, [refresh]);

  // --- Image Upload ---
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImagePreview(URL.createObjectURL(file));
    setSelectedImage(file);
    setIsUploading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(`${API_BASE_URL}${ApiRute.admin.updatePRofule}`, {
        method: "PUT",
        headers: {
          authorization: `Bearer ${getStroage().token}`,
        },
        body: formData,
      });

      const data = await res.json();
      if (data?.success) {
        getAdminDetails();
        toast.success("Profile updated");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsUploading(false);
    }
  };

  // --- Update Email/Phone ---
  async function updateEmailPass() {
    try {
      const payload = {
        email: email,
        phone: phone,
      };
      setLoad(true);
      const res = await fetch(`${API_BASE_URL}${ApiRute.admin.updateAdmin}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${getStroage().token}`,
        },
        body: JSON.stringify(payload),
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
    }
  }

  // ✅ --- Backup Function with Progress Bar ---
  async function backup() {
    try {
      setLoad(true);
      setProgress(0);
      setShowProgress(true);

      // fake progress until API returns
      let interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 95) return 95;
          return p + 5;
        });
      }, 300);

      const backupResponse = await fetch(
        `${API_BASE_URL}${ApiRute.admin.backup}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${getStroage().token}`,
          },
        }
      );

      const backupResult = await backupResponse.json();

      clearInterval(interval);
      setProgress(100);

      if (backupResult.success) {
        toast.success("Backup completed successfully!");
      } else {
        toast.error("Backup failed!");
      }

      setTimeout(() => {
        setShowProgress(false);
        setProgress(0);
      }, 1500);
    } catch (error) {
      console.error(error);
      toast.error("Backup failed due to server error");
      setShowProgress(false);
    } finally {
      setLoad(false);
    }
  }

  return (
    <div>
      <Header data={adminDetails?.data?.image} />

      <div
        className="min-h-screen p-8"
        style={{
          backgroundColor: lightModeEnabled ? "white" : "black",
        }}
      >
        <div className="flex flex-col md:flex-row  justify-between w-full max-w-6xl mx-auto overflow-hidden gap-4 p-5 ">
          {/* Left Profile Section */}
          <div className="flex flex-col w-sm  items-center rounded-2xl p-4 border border-gray-300 shadow-xl">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-purple-500 bg-white flex items-center justify-center">
              {adminDetails?.data?.image ? (
                <Image
                  src={adminDetails?.data?.image}
                  alt="Profile"
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              ) : (
                <Image
                  src="/login.png"
                  alt="Default Profile"
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              )}
              {isUploading && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>

            <label className="cursor-pointer flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-full mb-6 hover:bg-blue-600 transition-colors text-sm font-medium shadow-md">
              <FaCloudUploadAlt className="h-4 w-4" />
              <span>Upload Photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                hidden
              />
            </label>

            <div
              className="w-full  flex flex-col items-center gap-2"
              style={{
                color: lightModeEnabled ? "black" : "white",
              }}
            >
              <h2 className="text-2xl font-bold mb-1">
                {adminDetails?.data?.name}
              </h2>
              <div className="flex items-center space-x-2  mb-1 justify-center">
                <p className="flex items-center gap-2">
                  <FaEnvelope className="w-4 h-4 " />
                  <span>{email}</span>
                </p>
              </div>

              <a
                onClick={() => setShowOtpModal(true)}
                className="flex items-center space-x-2  hover:text-blue-500 cursor-pointer justify-center transition-colors"
              >
                <p className="flex items-center gap-2">
                  <FaLock className="w-4 h-4 " />
                  <span className="text-sm font-medium text-center">
                    Change Password
                  </span>
                </p>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="p-8 md:p-12  md:w-2/3 border border-gray-300 rounded-xl shadow-lg space-y-6"
            style={{
              backgroundColor: lightModeEnabled ? "white" : "black",
              color: lightModeEnabled ? "black" : "white",
            }}
          >
            <h2 className="text-3xl font-bold mb-8 ">Account Settings</h2>

            {/* Email */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
              <label className="w-full md:w-48  font-semibold mb-2 md:mb-0">
                Update E-mail:
              </label>
              <div className="relative flex-1 w-full">
                <input
                  type="email"
                  value={email}
                  readOnly={!isEditingEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full border rounded-md py-2 px-4 focus:outline-none pr-12 transition-all duration-300
                    ${
                      isEditingEmail
                        ? "border-blue-500 ring-2 ring-blue-500"
                        : "border-gray-300"
                    }`}
                />
                <button
                  onClick={() => setIsEditingEmail(!isEditingEmail)}
                  className="absolute right-3 top-1/2 -translate-y-1/2  hover:text-blue-500 transition-colors"
                >
                  <FaEdit className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
              <label className="w-full md:w-48  font-semibold mb-2 md:mb-0">
                Update Mobile No:
              </label>
              <div className="relative flex-1 w-full">
                <input
                  type="text"
                  value={phone}
                  readOnly={!isEditingPhone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full border rounded-md py-2 px-4 focus:outline-none pr-12 transition-all duration-300
                    ${
                      isEditingPhone
                        ? "border-blue-500 ring-2 ring-blue-500"
                        : "border-gray-300"
                    }`}
                />
                <button
                  onClick={() => setIsEditingPhone(!isEditingPhone)}
                  className="absolute right-3 top-1/2 -translate-y-1/2  hover:text-blue-500 transition-colors"
                >
                  <FaEdit className="h-5 w-5" />
                </button>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            {/* Buttons */}
            <div className="flex flex-col items-end space-y-3">
              <div className="flex justify-end space-x-4">
                <button
                  onClick={updateEmailPass}
                  className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md"
                >
                  {load ? "Saving..." : "Save Changes"}
                </button>
                <button
                  onClick={backup}
                  className="px-6 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-colors shadow-md"
                >
                  Backup
                </button>
              </div>

              {/* ✅ Progress Bar */}
              {showProgress && (
                <div className="w-full bg-gray-200 rounded-full h-4 mt-4 overflow-hidden">
                  <div
                    className="bg-green-500 h-4 text-xs text-white text-center transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  >
                    {progress}%
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
