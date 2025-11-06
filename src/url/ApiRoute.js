export const ApiRute = {
  admin: {
    login: "/admin/login",
    getadmindetail: "/admin/get-details",
    updatePRofule: "/admin/profile-update",
    adminbanner: "/admin/admindashboardbanner",
    loginbanner: "/banner/logindashboardbanner",
    updateAdmin: "/admin/update-details",
    getadminBanner: "/admin/getadminBanner",
    requestOtp: "/admin/request-otp",
    verifyOtp: "/admin/verify-otp",
    changepassword: "/admin/change-password",
    outstanding: "/outstanding/add-outstanding",
    adddialboxContent: "/admin/add-content",
    getdialbox: "/admin/get-content-admin",
    backup: "/admin/backup",
    requestAdminOtp: "/admin/get-otp",
    forgetPassword: "/admin/forget-password",
  },
  currentImage: {
    upload: "/banner/upload",
    getbanner: "/banner",
    delete: "/banner/delete",
    recentCard: "/banner/all",
    addrecentCart: "/banner/bannertext",
    update: "/banner/update",
    addWithTitle: "/banner/bannertext",
    deleteWithTitle: "/banner/del-banner-title",
  },
  advocate: {
    add: "/advocate/add",
    getAll: "/advocate/all",
    single: "/advocate/single",
    call_now: "/admin/call-now-feature",
    timing: "/advocate/set-timing",
    delete: "/advocate/delete-advocate",
    update: "/advocate/update",
  },
  terms: {
    add: "/tnc/add",
    get: "/tnc/all",
    delete: "/tnc/delete",
    update: "/tnc/update",
  },
  policy: {
    add: "/privacy/",
    get: "/privacy/",
    delete: "/privacy/",
  },
  upi: {
    get: "/upi",
    add: "/upi",
    update: "/upi/update",
  },
  kyc: {
    get: "/kyc/get-kyc",
    approve: "/kyc/approve-kyc",
  },
  driwork: {
    getAll: "/driworks/all",
    update: "/driworks/update-dri-works",
    add: "/driworks/add-dri-works",
    delete: "/driworks/delete-dri-works",
  },
  driUser: {
    getAll: "/driuser",
    search: "/driuser/search",
    singe: "/driuser/single",
    addUser: "/driuser",
    delete: "/driuser/delete-user",
    update: "/driuser/update-user",
    permanentDelete: "/driuser/permanent-delete",
  },
  adminProfileImage: "/admin/adminProfileBanner",
  emi: {
    upload: "/emi/create-emi",
    mannual: "/emi/manual",
    markaspaid: "/emi/mark-as-paid",
    bulkinsert: "/emi/bulk-insert",
    outstanding: "/emi/outstand",
    getPaidService: "/emi/get-paid-service",
    updateDueDate: "/emi/update-date",
    addLoan: "/emi/add-single-loan",
  },
  userLoan: {
    addloan: "/loan/create",
  },
  invoice: {
    add: "/invoice",
  },
  whatsapp: {
    add: "/whatsapp/",
    update: "/whatsapp/",
    get: "/whatsapp/",
  },
  loan: {
    addLoan: "/loan/create",
  },
  bank: {
    getbanks: "/admin/get-banks",
    addbanks: "/admin/add-banks",
  },
  notifications: {
    all: "/notification/",
    custome: {
      all: "/notification/custom-notification",
      get: "/notification/get-custom-notification",
    },
  },
  service: {
    addService: "/service/",
  },
  subscription: {
    add: "/subcription/add-subscription",
    getuser: "/subcription/subscription-users",
    singerSubscription: "/subcription/get-substouser",
    markaspaid: "/subcription/markAsPaid",
    paidSubs: "/subcription/getPaidSubscriptions",
    updateDueDate: "/subcription/update-date",
  },
  user: {
    single: "/user/get-user-saving",
  },
};

// "use client";
// import { ApiRute } from "@/url/ApiRoute";
// import { API_BASE_URL } from "@/url/BaseURL";
// import { getStroage } from "@/url/storage";
// import { useParams } from "next/navigation";
// import React, { use, useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import Header from "../Header";

// // ✅ Safe date formatter
// const formatDate = (dateStr) => {
//   const d = new Date(dateStr);
//   const day = d.getDate().toString().padStart(2, "0");
//   const month = (d.getMonth() + 1).toString().padStart(2, "0");
//   const year = d.getFullYear();
//   return `${day}/${month}/${year}`;
// };

// export default function UserDashboard() {
//   const { details } = useParams();
//   const [usesrId, setUserId] = useState("");
//   const [phone, setPhone] = useState(0);
//   // ✅ Independent tab states
//   const [subscriptionTab, setSubscriptionTab] = useState("current");
//   const [serviceTab, setServiceTab] = useState("current");

//   // ✅ Separate states for subscriptions
//   const [currentSubscriptions, setCurrentSubscriptions] = useState([]);
//   const [paidSubscriptions, setPaidSubscriptions] = useState([]);

//   // ✅ Separate states for services
//   const [currentServices, setCurrentServices] = useState([]);
//   const [paidServices, setPaidServices] = useState([]);

//   const fetchUserId = async () => {
//     try {
//       const response = await fetch(`${API_BASE_URL}${ApiRute.user.single}`, {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//           authorization: `Bearer ${getStroage().token}`,
//         },
//         body: JSON.stringify({ user_id: details }),
//       });
//       const result = await response.json();
//       if (result?.success) {
//         setPhone(result?.userData?.phone);
//         setUserId(result?.userData);
//         fetchCurrentServices(result?.userData?.phone);
//         fetchPaidServices(result?.userData?.phone);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const getStatusClass = (status) => {
//     if (status === "paid") return "bg-green-100 text-green-600";
//     if (status === "pending") return "bg-yellow-100 text-yellow-600";
//     return "bg-gray-200 text-gray-500";
//   };

//   // ✅ Fetch unpaid/current subscriptions
//   const fetchCurrentSubscriptions = async () => {
//     try {
//       const response = await fetch(
//         `${API_BASE_URL}${ApiRute.subscription.singerSubscription}/${details}`,
//         { method: "GET", headers: { "content-type": "application/json" } }
//       );
//       const result = await response.json();
//       if (result.data && result.data.length > 0) {
//         const unpaidSubs = result.data
//           .filter((sub) => !sub.isPaid)
//           .map((sub) => ({
//             ...sub,
//             paidForMonth: new Date(sub.dueDate).toLocaleString("default", {
//               month: "long",
//               year: "numeric",
//             }),
//             status: "pending",
//           }));
//         setCurrentSubscriptions(unpaidSubs);
//       } else {
//         setCurrentSubscriptions([]);
//       }
//     } catch (err) {
//       console.error(err);
//       console.error("Error fetching current subscriptions.");
//     }
//   };

//   // ✅ Fetch paid subscriptions
//   const fetchPaidSubscriptions = async () => {
//     try {
//       const response = await fetch(
//         `${API_BASE_URL}${ApiRute.subscription.paidSubs}?userId=${details}`,
//         {
//           method: "GET",
//           headers: {
//             "content-type": "application/json",
//             authorization: `Bearer ${getStroage().token}`,
//           },
//         }
//       );
//       const result = await response.json();

//       if (result.data && result.data.length > 0) {
//         setPaidSubscriptions(
//           result.data.map((sub) => ({
//             ...sub,
//             status: sub.status || "paid",
//           }))
//         );
//       } else {
//         setPaidSubscriptions([]);
//       }
//     } catch (err) {
//       console.error(err);
//       console.error("Error fetching paid subscriptions.");
//     }
//   };

//   // ✅ Fetch unpaid/current services
//   const fetchCurrentServices = async (phone) => {
//     try {
//       const response = await fetch(
//         `${API_BASE_URL}${ApiRute?.driUser?.singe}`,
//         {
//           method: "POST",
//           headers: { "content-type": "application/json" },
//           body: JSON.stringify({ phone }),
//         }
//       );

//       const result = await response.json();
//       if (result?.success) {
//         const [day, month, year] = result?.data?.dueDate.split("-").map(Number);
//         const dateObj = new Date(year, month - 1, day);

//         const payload = [
//           {
//             emiPay: result?.data?.emiPay,
//             userId: result?.data?.id,
//             dueDate: dateObj, // ✅ assign Date object
//             paidForMonth: dateObj.toLocaleString("default", {
//               month: "long",
//               year: "numeric",
//             }),
//             totalEMI: result?.data?.totalEmi,
//             emiAmount: result?.data?.monthlyEmi,
//             status: result?.data?.status || "pending", // fallback
//             serviceType: !result?.data?.serviceFees
//               ? "service Advance"
//               : "service",
//           },
//         ];

//         setCurrentServices(payload);
//       } else {
//         setCurrentServices([]);
//       }
//     } catch (err) {
//       console.error("Error fetching current services:", err);
//     }
//   };

//   // ✅ Fetch paid services
//   const fetchPaidServices = async () => {
//     try {
//       const response = await fetch(
//         `${API_BASE_URL}${ApiRute?.emi.getPaidService}?user_id=${details}`,
//         {
//           method: "GET",
//           headers: {
//             "content-type": "application/json",
//             authorization: `Bearer ${getStroage().token}`,
//           },
//         }
//       );
//       const result = await response.json();
//       console.log("paid", result);
//       if (result.data && result.data.length > 0) {
//         setPaidServices(result.data.map((svc) => ({ ...svc, status: "paid" })));
//       } else {
//         setPaidServices([]);
//       }
//     } catch (err) {
//       console.error(err);
//       console.error("Error fetching paid services.");
//     }
//   };

//   // ✅ Mark subscription as paid
//   const subscriptionMarkAsPaid = async (subscription) => {
//     try {
//       const res = await fetch(
//         `${API_BASE_URL}${ApiRute.subscription.markaspaid}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             authorization: `Bearer ${getStroage().token}`,
//           },
//           body: JSON.stringify({
//             subscriptionId: subscription?._id,
//             paymentMode: "UPI",
//           }),
//         }
//       );
//       const data = await res.json();
//       if (data.success) {
//         toast.success("Subscription marked as paid!");
//         fetchCurrentSubscriptions();
//         fetchPaidSubscriptions();
//       } else {
//         toast.error(data.message || "Failed to mark as paid.");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Error marking subscription as paid.");
//     }
//   };

//   // ✅ Mark service as paid
//   const checkServicePayment = (svcIndex) => {
//     const paidService = { ...currentServices[svcIndex], status: "paid" };
//     setPaidServices((prev) => [...prev, paidService]);
//     setCurrentServices((prev) => prev.filter((_, idx) => idx !== svcIndex));
//     toast.success(`Service for ${paidService.paidForMonth} marked as PAID.`);
//   };

//   // ✅ Decide which subscriptions/services to show based on tab
//   const subscriptionsToShow =
//     subscriptionTab === "paid" ? paidSubscriptions : currentSubscriptions;
//   const servicesToShow = serviceTab === "paid" ? paidServices : currentServices;

//   const markAsPaid = async () => {
//     try {
//       alert("hello");
//       const res = await fetch(`${API_BASE_URL}${ApiRute.emi.markaspaid}`, {
//         method: "PUT",
//         headers: {
//           "content-type": "application/json",
//           authorization: `Bearer ${getStroage().token}`,
//         },
//         body: JSON.stringify({
//           phone: phone,
//           user_id: details,
//         }),
//       });
//       const result = await res.json();
//       fetchCurrentSubscriptions();
//       fetchPaidSubscriptions();
//       fetchUserId();
//       result?.success
//         ? toast.success(result?.message)
//         : toast.error(result?.message);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // ✅ Initial fetch
//   useEffect(() => {
//     fetchCurrentSubscriptions();
//     fetchPaidSubscriptions();
//     fetchUserId();
//   }, [details]);

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen flex justify-center items-start bg-gray-100 p-6">
//         <div className="max-w-6xl w-full flex flex-col space-y-8 justify-center rounded-xl bg-white p-5">
//           <div className="flex flex-col md:flex-row gap-6">
//             {/* Left: Subscriptions */}
//             <div className="flex-1 flex flex-col">
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                 Monthly Subscriptions
//               </h3>
//               <ul className="flex border-b mb-3">
//                 <li
//                   className={`cursor-pointer px-4 py-2 ${
//                     subscriptionTab === "current"
//                       ? "border-b-2 border-blue-600 font-semibold text-blue-600"
//                       : "text-gray-500 hover:text-blue-600"
//                   }`}
//                   onClick={() => setSubscriptionTab("current")}
//                 >
//                   Current
//                 </li>
//                 <li
//                   className={`cursor-pointer px-4 py-2 relative ${
//                     subscriptionTab === "paid"
//                       ? "border-b-2 border-blue-600 font-semibold text-blue-600"
//                       : "text-gray-500 hover:text-blue-600"
//                   }`}
//                   onClick={() => setSubscriptionTab("paid")}
//                 >
//                   Paid{" "}
//                   {/* <span className="absolute top-0.5 right-0.3 bg-red-400 w-[15px] h-[15px] text-center align-middle rounded-xl text-[13px] text-white">
//                     {paidSubscriptions.length}
//                   </span> */}
//                 </li>
//               </ul>

//               {subscriptionTab === "current" ? (
//                 <div className="max-h-[250px] overflow-y-auto space-y-3 border border-gray-200 rounded-xl p-4 bg-gray-50">
//                   {subscriptionsToShow.length === 0 ? (
//                     <p className="text-gray-500 text-sm">
//                       No subscriptions found.
//                     </p>
//                   ) : (
//                     currentSubscriptions.map((sub, index) => (
//                       <div
//                         key={index}
//                         className="p-4 border rounded-xl bg-white hover:bg-gray-100 transition flex flex-col relative"
//                       >
//                         <span
//                           className={`absolute top-4 right-4 text-sm font-medium px-3 py-1 rounded-full ${getStatusClass(
//                             sub?.status
//                           )}`}
//                         >
//                           {sub?.status.charAt(0).toUpperCase() +
//                             sub?.status?.slice(1).toLowerCase()}
//                         </span>

//                         <div>
//                           <p className="font-semibold text-gray-800">
//                             {sub.paidForMonth}
//                           </p>
//                           <p className="text-sm text-red-500 ">
//                             Due Date:{" "}
//                             {formatDate(sub?.paidForDueDate || sub?.dueDate)}
//                           </p>
//                         </div>

//                         <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
//                           <p>Amount: ₹{sub?.subscription || sub?.amount}</p>
//                           <p>GST: {sub?.gst}%</p>
//                           <p>Total: ₹{sub?.totalAmount || sub?.amount}</p>
//                         </div>

//                         {sub?.status === "pending" && (
//                           <div className="mt-4 flex justify-start">
//                             <button
//                               onClick={() => subscriptionMarkAsPaid(sub)}
//                               className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-green-700 transition text-sm"
//                             >
//                               Mark as Paid
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                     ))
//                   )}
//                 </div>
//               ) : (
//                 <div className="max-h-[250px] overflow-y-auto space-y-3 border border-gray-200 rounded-xl p-4 bg-gray-50">
//                   {subscriptionsToShow.length === 0 ? (
//                     <p className="text-gray-500 text-sm">
//                       No paid subscriptions found.
//                     </p>
//                   ) : (
//                     paidSubscriptions.map((sub, index) => (
//                       <div
//                         key={index}
//                         className="p-4 border rounded-xl bg-white hover:bg-gray-100 transition flex flex-col relative"
//                       >
//                         <span
//                           className={`absolute top-4 right-4 text-sm font-medium px-3 py-1 rounded-full ${getStatusClass(
//                             sub?.status
//                           )}`}
//                         >
//                           {sub?.status.charAt(0).toUpperCase() +
//                             sub?.status?.slice(1).toLowerCase()}
//                         </span>

//                         <div>
//                           <p className="font-semibold text-gray-800">
//                             {sub.paidForMonth}
//                           </p>
//                           <p className="text-sm text-green-500">
//                             Date:{" "}
//                             {formatDate(sub?.paidForDueDate || sub?.dueDate)}
//                           </p>
//                         </div>

//                         <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
//                           <p>Amount: ₹{sub?.subscriptionId?.subscription}</p>
//                           <p>GST: {sub?.gst}%</p>
//                           <p>Total: ₹{sub?.subscriptionId?.amount}</p>
//                         </div>

//                         {sub?.status === "pending" && (
//                           <div className="mt-4 flex justify-start">
//                             <button
//                               onClick={() => subscriptionMarkAsPaid(sub)}
//                               className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-green-700 transition text-sm"
//                             >
//                               Mark as Paid
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                     ))
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* Right: Services */}
//             {/* Right: Services */}
//             <div className="flex-1 flex flex-col">
//               <h3 className="text-xl font-semibold mb-3 text-gray-800 capitalize">
//                 {currentServices[0]?.serviceType}
//               </h3>
//               <ul className="flex border-b mb-3">
//                 <li
//                   className={`cursor-pointer px-4 py-2 ${
//                     serviceTab === "current"
//                       ? "border-b-2 border-blue-600 font-semibold text-blue-600"
//                       : "text-gray-500 hover:text-blue-600"
//                   }`}
//                   onClick={() => setServiceTab("current")}
//                 >
//                   Current
//                 </li>
//                 <li
//                   className={`cursor-pointer px-4 py-2 ${
//                     serviceTab === "paid"
//                       ? "border-b-2 border-blue-600 font-semibold text-blue-600"
//                       : "text-gray-500 hover:text-blue-600"
//                   }`}
//                   onClick={() => setServiceTab("paid")}
//                 >
//                   Paid
//                 </li>
//               </ul>

//               <div className="max-h-[250px] overflow-y-auto space-y-3 border border-gray-200 rounded-xl p-4 bg-gray-50">
//                 {servicesToShow.length === 0 ? (
//                   <p className="text-gray-500 text-sm">No Paid Services</p>
//                 ) : (
//                   servicesToShow.map((service, index) => (
//                     <div
//                       key={index}
//                       className="p-4 border rounded-xl bg-white hover:bg-gray-100 transition relative"
//                     >
//                       <span
//                         className={`absolute top-4 right-4 text-sm font-medium px-3 py-1 rounded-full ${getStatusClass(
//                           service?.status
//                         )}`}
//                       >
//                         {(service?.status || "pending")
//                           .toString()
//                           .charAt(0)
//                           .toUpperCase() +
//                           (service?.status || "pending")
//                             .toString()
//                             .slice(1)
//                             .toLowerCase()}
//                       </span>

//                       <div>
//                         <p className="font-semibold text-gray-800">
//                           {service?.paidForMonth}
//                         </p>
//                         <p className="text-sm text-red-500 ">
//                           {" "}
//                           Due Date: {formatDate(service?.dueDate)}
//                         </p>
//                       </div>

//                       <div className="mt-2  flex text-sm text-gray-700  justify-between items-start">
//                         <p>Total EMI: {service?.totalEMI || "N/A"}</p>
//                         <p>EMI: {service?.emiPay || "N/A"}</p>
//                         <p>EMI Amount: ₹ {service?.emiAmount || "N/A"}</p>
//                       </div>
//                       {/* <button
//                         onClick={() => checkServicePayment(index)}
//                         className="absolute bottom-4 right-4 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm"
//                       >
//                         Mark as Paid
//                       </button> */}
//                       <div className="mt-4 flex justify-start">
//                         <button
//                           onClick={markAsPaid}
//                           className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-green-700 transition text-sm"
//                         >
//                           Mark as Paid
//                         </button>
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
