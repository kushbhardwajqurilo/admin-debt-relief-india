module.exports = {

"[project]/src/url/ApiRoute.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ApiRute": ()=>ApiRute
});
const ApiRute = {
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
        forgetPassword: "/admin/forget-password"
    },
    currentImage: {
        upload: "/banner/upload",
        getbanner: "/banner",
        delete: "/banner/delete",
        recentCard: "/banner/all",
        addrecentCart: "/banner/bannertext",
        update: "/banner/update",
        addWithTitle: "/banner/bannertext",
        deleteWithTitle: "/banner/del-banner-title"
    },
    advocate: {
        add: "/advocate/add",
        getAll: "/advocate/all",
        single: "/advocate/single",
        call_now: "/admin/call-now-feature",
        timing: "/advocate/set-timing",
        delete: "/advocate/delete-advocate",
        update: "/advocate/update"
    },
    terms: {
        add: "/tnc/add",
        get: "/tnc/all",
        delete: "/tnc/delete",
        update: "/tnc/update"
    },
    policy: {
        add: "/privacy/",
        get: "/privacy/",
        delete: "/privacy/"
    },
    upi: {
        get: "/upi",
        add: "/upi",
        update: "/upi/update"
    },
    kyc: {
        get: "/kyc/get-kyc",
        approve: "/kyc/approve-kyc"
    },
    driwork: {
        getAll: "/driworks/all",
        update: "/driworks/update-dri-works",
        add: "/driworks/add-dri-works",
        delete: "/driworks/delete-dri-works"
    },
    driUser: {
        getAll: "/driuser",
        search: "/driuser/search",
        singe: "/driuser/single",
        addUser: "/driuser",
        delete: "/driuser/delete-user",
        update: "/driuser/update-user",
        permanentDelete: "/driuser/permanent-delete"
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
        addLoan: "/emi/add-single-loan"
    },
    userLoan: {
        addloan: "/loan/create"
    },
    invoice: {
        add: "/invoice"
    },
    whatsapp: {
        add: "/whatsapp/",
        update: "/whatsapp/",
        get: "/whatsapp/"
    },
    loan: {
        addLoan: "/loan/create"
    },
    bank: {
        getbanks: "/admin/get-banks",
        addbanks: "/admin/add-banks"
    },
    notifications: {
        all: "/notification/",
        custome: {
            all: "/notification/custom-notification",
            get: "/notification/get-custom-notification"
        }
    },
    service: {
        addService: "/service/"
    },
    subscription: {
        add: "/subcription/add-subscription",
        getuser: "/subcription/subscription-users",
        singerSubscription: "/subcription/get-substouser",
        markaspaid: "/subcription/markAsPaid",
        paidSubs: "/subcription/getPaidSubscriptions",
        updateDueDate: "/subcription/update-date"
    },
    user: {
        single: "/user/get-user-saving"
    }
}; // "use client";
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
}),
"[project]/src/url/BaseURL.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// export const API_BASE_URL = "https://dri-vercel.vercel.app/api/v1";
__turbopack_context__.s({
    "API_BASE_URL": ()=>API_BASE_URL
});
const API_BASE_URL = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "https://4frnn03l-5000.inc1.devtunnels.ms/api/v1";
}),
"[project]/src/url/storage.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "clearStorage": ()=>clearStorage,
    "getForgetStorage": ()=>getForgetStorage,
    "getStroage": ()=>getStroage,
    "setFogetStorage": ()=>setFogetStorage,
    "setStorage": ()=>setStorage
});
const key = "token";
const forget = "forget";
const setStorage = (data)=>{
    localStorage.setItem(key, JSON.stringify(data));
};
const getStroage = ()=>{
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    } else {
        return false;
    }
};
const setFogetStorage = (data)=>{
    localStorage.setItem(forget, JSON.stringify(data));
};
const getForgetStorage = ()=>{
    if (localStorage.getItem(forget)) {
        return JSON.parse(localStorage.getItem(forget));
    } else {
        return false;
    }
};
const clearStorage = ()=>{
    if (localStorage.getItem(key)) {
        localStorage.removeItem(key);
    } else localStorage.removeItem(key);
};
}),
"[project]/src/app/components/Header.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// "use client";
// import { ApiRute } from "@/url/ApiRoute";
// import { API_BASE_URL } from "@/url/BaseURL";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { FaPowerOff } from "react-icons/fa";
// import { FiSettings } from "react-icons/fi";
// import { PiBellDuotone } from "react-icons/pi";
// export default function Header() {
//   const pathname = usePathname();
//   const [adminImage, setProfile] = useState("");
//   const router = useRouter();
//   const navItems = [
//     { name: "Dashboard", path: "/admin/dashboard" },
//     { name: "User Control", path: "/userController" },
//     { name: "Services", path: "/advocateService" },
//     {
//       name: "Settings",
//       path: "/Setting",
//       icon: <FiSettings className="text-xl" />,
//     },
//   ];
//   const handleAction = () => {
//     localStorage.removeItem("token");
//     router.push("/");
//   };
//   const [profileImage, setProfileImage] = useState({});
//   // const profileDataFetch = async () => {
//   //   const res = await fetch(`${API_BASE_URL}${ApiRute.adminProfileImage}`, {
//   //     method: "GET",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //   });
//   //   const contentType = res.headers.get("content-type");
//   //   let resData;
//   //   if (contentType && contentType.includes("application/json")) {
//   //     resData = await res.json();
//   //   } else {
//   //     const text = await res.text();
//   //     throw new Error(`Unexpected response: ${text}`);
//   //   }
//   //   if (res.ok && resData?.success) {
//   //     setProfileImage(resData.data);
//   //   } else {
//   //   }
//   // };
//   useEffect(() => {
//     // profileDataFetch();
//     setProfile(window.location.origin);
//   }, []);
//   return (
//     <header className="w-full flex items-center justify-between px-6 shadow bg-white">
//       {/* Logo Section */}
//       <div className="flex items-center ms-20">
//         <Image src="/deptlogo.png" alt="Logo" height={200} width={250} />
//       </div>
//       {/* Navigation Tabs */}
//       <div className="flex items-center space-x-4">
//         {navItems.map((item, idx) => {
//           const isActive = pathname === item.path;
//           return (
//             <button
//               key={idx}
//               onClick={() => router.push(item.path)}
//               className={`px-6 py-2 rounded-full border-2 border-[#ccc] flex flex-col items-center ${
//                 isActive
//                   ? "bg-gradient-to-r from-blue-900 to-blue-600 text-white shadow-md"
//                   : "bg-blue-100 text-black"
//               }`}
//             >
//               <div className="flex items-center space-x-2">
//                 {item?.icon && item?.icon}
//                 <span>{item.name}</span>
//               </div>
//               {isActive && (
//                 <div className="h-1 w-full bg-gradient-to-r from-purple-400 to-cyan-300 mt-1 rounded-full"></div>
//               )}
//             </button>
//           );
//         })}
//       </div>
//       {/* Right Section */}
//       <div className="flex items-center space-x-4">
//         <div className="relative">
//           <PiBellDuotone className="text-yellow-500 text-2xl bg-blue-100 rounded-full p-1" />
//           <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
//         </div>
//         <button
//           onClick={handleAction}
//           className="flex items-center justify-center h-10 w-10 bg-blue-100 rounded-full"
//         >
//           <FaPowerOff className="text-red-600 text-xl bg-blue-100 rounded-full p-2 h-10 w-10 cursor-pointer" />
//         </button>
//         <Link href="/profilePage" className="relative block h-10 w-10">
//           <Image
//             src="/favicon.ico"
//             alt="User"
//             className="rounded-full border-2 border-purple-500 object-cover"
//             fill
//             sizes="(max-width: 768px) 100vw,
//            (max-width: 1200px) 50vw,
//            33vw"
//           />
//         </Link>
//       </div>
//     </header>
//   );
// }
__turbopack_context__.s({
    "default": ()=>Header
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/ApiRoute.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/BaseURL.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/storage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function Header({ data }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [profileImage, setProfileImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [banner, setBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const navItems = [
        {
            name: "Dashboard",
            path: "/admin/dashboard"
        },
        {
            name: "User Control",
            path: "/userController"
        },
        {
            name: "Services",
            path: "/advocateService"
        },
        {
            name: "Settings",
            path: "/Setting",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSettings"], {
                className: "text-xl"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Header.js",
                lineNumber: 143,
                columnNumber: 13
            }, this)
        }
    ];
    // ✅ Logout
    const handleAction = ()=>{
        localStorage.removeItem("token");
        router.push("/");
    };
    // ✅ Fetch admin details
    async function getAdminDetails() {
        try {
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"]}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiRute"].admin.getadmindetail}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStroage"])().token}`
                }
            });
            const bannerRes = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"]}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiRute"].admin.getadminBanner}`);
            const bannerData = await bannerRes.json();
            if (bannerData.success) setBanner(bannerData.data);
            const result = await response.json();
            if (result?.success) {
                setProfileImage(result?.data?.image || "");
            } else {
                console.log("err", result);
                if (result?.message == "Token expired") {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error("Your session has expired. Please log in again to continue.");
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearStorage"])();
                }
                console.error("Admin detail fetch error:", result);
            }
        } catch (err) {
            console.error("getAdminDetails error:", err);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setProfileImage(data);
        getAdminDetails();
    }, [
        data
    ]);
    // ✅ Determine safe image source
    const getSafeImage = (img, fallback)=>{
        if (typeof img === "string" && img.trim() !== "") return img;
        if (img && typeof img === "object" && img.url) return img.url;
        return fallback;
    };
    const mainProfileSrc = getSafeImage(profileImage, "/login.png");
    const smallProfileSrc = getSafeImage(profileImage, "/favicon.ico");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full flex items-center justify-between px-6 py-3 shadow bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center ms-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center ms-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/deptlogo.png",
                            alt: "Logo",
                            height: 200,
                            width: 250
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Header.js",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this),
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Header.js",
                    lineNumber: 210,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Header.js",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-4",
                children: navItems.map((item, idx)=>{
                    const isActive = pathname === item.path;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push(item.path),
                        className: `px-6 py-2 rounded-full border-2 border-[#ccc] flex flex-col items-center transition-all ${isActive ? "bg-gradient-to-r from-blue-900 to-blue-600 text-white shadow-md" : "bg-blue-100 text-black hover:bg-blue-200"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    item?.icon && item.icon,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Header.js",
                                        lineNumber: 231,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Header.js",
                                lineNumber: 229,
                                columnNumber: 15
                            }, this),
                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1 w-full bg-gradient-to-r from-purple-400 to-cyan-300 mt-1 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Header.js",
                                lineNumber: 234,
                                columnNumber: 17
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/src/app/components/Header.js",
                        lineNumber: 220,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/components/Header.js",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAction,
                        className: "flex items-center justify-center h-10 w-10 bg-blue-100 rounded-full hover:bg-blue-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPowerOff"], {
                            className: "text-red-600 text-xl"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Header.js",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Header.js",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/profilePage",
                        className: "relative block h-10 w-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-10 w-10 rounded-full overflow-hidden border-2 border-purple-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: smallProfileSrc,
                                alt: "User",
                                fill: true,
                                sizes: "(max-width:768px) 100vw, 40px",
                                className: "object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Header.js",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Header.js",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Header.js",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Header.js",
                lineNumber: 242,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Header.js",
        lineNumber: 207,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/advocateService/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>AdvocateService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Header.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/BaseURL.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/ApiRoute.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/storage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ri/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function date(newdate) {
    const x_date = new Date(newdate);
    const formatted = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    }).format(x_date);
    return formatted;
}
// ✅ Fixed Modal Component
function Modal({ isOpen, onClose, onUpdate, advocate }) {
    const [updateForm, setUpdateForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        contactNumber: ""
    });
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (advocate) {
            setUpdateForm({
                name: advocate.name || "",
                contactNumber: advocate.contactNumber || ""
            });
            setFile(null);
        }
    }, [
        advocate
    ]);
    const handleChange = (e)=>{
        setUpdateForm({
            ...updateForm,
            [e.target.name]: e.target.value
        });
    };
    const handleFileChange = (e)=>{
        setFile(e.target.files[0]);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", updateForm?.name);
            formData.append("contact", updateForm?.contactNumber);
            formData.append("id", advocate?._id);
            if (file) formData.append("image", file);
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"]}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiRute"].advocate.update}`, {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStroage"])().token}`
                },
                body: formData
            });
            const result = await response.json();
            if (result?.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success(result?.message);
            }
        } catch (error) {
            console.error(error);
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/40 flex items-center justify-center z-50",
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-xl w-[400px] relative",
                children: [
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "absolute top-2 right-2 text-gray-600",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdClose"], {
                                size: 22
                            }, void 0, false, {
                                fileName: "[project]/src/app/advocateService/page.js",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/advocateService/page.js",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold mb-4",
                        children: "Update Advocate"
                    }, void 0, false, {
                        fileName: "[project]/src/app/advocateService/page.js",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "flex flex-col gap-3",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "name",
                                value: updateForm.name,
                                onChange: handleChange,
                                placeholder: "Name",
                                className: "border px-3 py-2 rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/app/advocateService/page.js",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "contactNumber",
                                value: updateForm.contactNumber,
                                onChange: handleChange,
                                placeholder: "Contact Number",
                                className: "border px-3 py-2 rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/app/advocateService/page.js",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                onChange: handleFileChange,
                                className: "border px-3 py-2 rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/app/advocateService/page.js",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "bg-blue-600 text-white py-2 rounded mt-2",
                                children: [
                                    " ",
                                    "Update",
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/advocateService/page.js",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/advocateService/page.js",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/advocateService/page.js",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            " "
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/advocateService/page.js",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
function AdvocateService() {
    const [advocates, setAdvocates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        contactNumber: ""
    });
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [previewUrl, setPreviewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("/user-placeholder.png");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [buttonLoading, setButtonLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customeAdvocate, setCustomeAdvocate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        message: ""
    });
    const [timing, setTiming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loads, setLoadings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDelet, setIsDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // ✅ Modal State
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedAdvocate, setSelectedAdvocate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deletingId, setDeletingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const getAdvocates = async ()=>{
        const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"]}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiRute"].advocate.getAll}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStroage"])().token}`
            }
        });
        const result = await res.json();
        if (!result.success) throw new Error("Failed to fetch advocates");
        return result;
    };
    const addAdvocate = async (formData)=>{
        const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"]}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiRute"].advocate.add}`, {
            method: "POST",
            headers: {
                authorization: `Bearer ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStroage"])().token}`
            },
            body: formData
        });
        return res.json();
    };
    const callYourAdvoateSetup = async (e)=>{
        e.preventDefault();
        try {
            setLoadings(true);
            const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"]}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiRute"].advocate.call_now}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStroage"])().token}`
                },
                body: JSON.stringify({
                    message: customeAdvocate.message
                })
            });
            const result = await res.json();
            result?.success ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success(result?.message) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error(result?.message);
        } catch (error) {
            console.error(error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error("Something went wrong");
        } finally{
            setLoadings(false);
        }
    };
    const handleDeleteAdvocate = async (id)=>{
        try {
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"]}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiRute"].advocate.delete}/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStroage"])().token}`
                }
            });
            const result = await response.json();
            if (result?.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success(result?.message);
                const fetchAdvocates = async ()=>{
                    try {
                        const result = await getAdvocates();
                        setAdvocates(result.data);
                    } catch (e) {
                        setError("Failed to load advocates. Please try again.");
                    } finally{
                        setLoading(false);
                    }
                };
                fetchAdvocates();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error(result?.error);
            }
        } catch (error) {
            console.error(error);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchAdvocates = async ()=>{
            try {
                const result = await getAdvocates();
                setAdvocates(result.data);
            } catch (e) {
                setError("Failed to load advocates. Please try again.");
            } finally{
                setLoading(false);
            }
        };
        fetchAdvocates();
    }, []);
    const handleImageChange = (e)=>{
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async ()=>{
        if (!form.name || !form.contactNumber) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error("All fields are required");
            return;
        }
        const data = new FormData();
        data.append("name", form.name);
        data.append("contactNumber", form.contactNumber);
        if (selectedImage) data.append("image", selectedImage);
        try {
            setButtonLoading(true);
            const result = await addAdvocate(data);
            if (result?.success) {
                setForm({
                    name: "",
                    contactNumber: ""
                });
                setSelectedImage(null);
                setPreviewUrl("/user-placeholder.png");
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success("Advocate added successfully!");
                // ✅ Refresh the full advocate list after success
                const updatedList = await getAdvocates();
                if (updatedList?.success) {
                    setAdvocates(updatedList.data);
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error(result?.message || "Upload failed.");
            }
        } catch (error) {
            console.error("advocate error", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error("An error occurred.");
        } finally{
            setButtonLoading(false);
        }
    };
    const handleTiming = async (e)=>{
        e.preventDefault();
        try {
            const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"]}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiRute"].advocate.timing}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStroage"])().token}`
                },
                body: JSON.stringify({
                    timing
                })
            });
            const result = await res.json();
            result?.success ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success(result?.message) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error(result?.message);
        } catch (error) {
            console.error("advocate error", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error("An error occurred.");
        }
    };
    // ✅ Update Advocate
    const handleUpdate = (updatedData)=>{
        setAdvocates((prev)=>prev.map((a)=>a._id === selectedAdvocate._id ? {
                    ...a,
                    ...updatedData
                } : a));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success("Advocate updated!");
        setIsModalOpen(false);
    };
    //  Delete Advocate
    const handleDelete = async (advocate)=>{
        try {
            setDeletingId(advocate._id); // only this button shows loading
            // make your delete API call here
            const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"]}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiRute"].advocate.delete}?id=${advocate._id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStroage"])().token}`
                }
            });
            const result = await res.json();
            if (result?.success) {
                setAdvocates((prev)=>prev.filter((a)=>a._id !== advocate._id));
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success("Advocate deleted!");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error(result?.message || "Delete failed.");
            }
        } catch (error) {
            console.error(error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error("Something went wrong");
        } finally{
            setDeletingId(null); // reset loading
        }
    };
    //
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/advocateService/page.js",
                lineNumber: 344,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                onUpdate: handleUpdate,
                onDelete: handleDelete,
                advocate: selectedAdvocate
            }, void 0, false, {
                fileName: "[project]/src/app/advocateService/page.js",
                lineNumber: 346,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gradient-to-b from-[#edf0ff] to-[#edf0ff] flex justify-center text-black gap-2 p-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex flex-row items-center h-[500px] justify-center gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[30%] bg-white rounded-xl shadow-xl p-6 mt-10 h-[425px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-30 h-30 rounded-full bg-gray-500 p-[2px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full rounded-full bg-gray-200 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: previewUrl,
                                                    alt: "Preview",
                                                    width: 100,
                                                    height: 100,
                                                    className: "rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/advocateService/page.js",
                                                    lineNumber: 361,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/advocateService/page.js",
                                                lineNumber: 360,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/advocateService/page.js",
                                            lineNumber: 359,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "-mt-6 inline-block bg-gradient-to-r from-[#A020F0] to-[#00E0D0] p-[3px] rounded-md cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-[#002366] text-white font-semibold px-6 py-1 rounded-md flex items-center gap-1",
                                                    children: [
                                                        "Upload ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/advocateService/page.js",
                                                            lineNumber: 372,
                                                            columnNumber: 26
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/advocateService/page.js",
                                                    lineNumber: 371,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: "image/*",
                                                    onChange: handleImageChange,
                                                    hidden: true,
                                                    name: "image"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/advocateService/page.js",
                                                    lineNumber: 374,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/advocateService/page.js",
                                            lineNumber: 370,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/advocateService/page.js",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 space-y-3 flex flex-col justify-center items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            autoComplete: "off",
                                            type: "text",
                                            name: "name",
                                            value: form?.name,
                                            onChange: handleChange,
                                            placeholder: "Enter Name",
                                            className: "w-full px-4 py-2 rounded-xl bg-gray-100 border border-gray-300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/advocateService/page.js",
                                            lineNumber: 385,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            autoComplete: "off",
                                            type: "text",
                                            name: "contactNumber",
                                            value: form?.contactNumber,
                                            onChange: handleChange,
                                            placeholder: "PNS Number",
                                            className: "w-full px-4 py-2 rounded-xl bg-gray-100 border border-gray-300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/advocateService/page.js",
                                            lineNumber: 394,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSubmit,
                                            className: "w-[250px] bg-red-600 text-white py-2 rounded-2xl mt-2 hover:bg-red-700 font-bold shadow",
                                            children: buttonLoading ? "Processing..." : "Add Advocate"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/advocateService/page.js",
                                            lineNumber: 403,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/advocateService/page.js",
                                    lineNumber: 384,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/advocateService/page.js",
                            lineNumber: 357,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[30%] bg-white rounded-xl shadow-xl p-6 mt-10 h-[425px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center border-b pb-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold",
                                            children: "Advocate List"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/advocateService/page.js",
                                            lineNumber: 415,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold",
                                            children: "No. of Users"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/advocateService/page.js",
                                            lineNumber: 416,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/advocateService/page.js",
                                    lineNumber: 414,
                                    columnNumber: 13
                                }, this),
                                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Loading advocates..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/advocateService/page.js",
                                    lineNumber: 419,
                                    columnNumber: 25
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/app/advocateService/page.js",
                                    lineNumber: 420,
                                    columnNumber: 23
                                }, this),
                                !loading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 h-[320px] overflow-y-auto pr-2",
                                    children: advocates?.length > 0 ? advocates.map((adv, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center border-b pb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-12 rounded-full p-[2px] bg-gradient-to-r from-[#A020F0] to-[#00E0D0]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full h-full bg-white rounded-full flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: adv?.advocateImage || "/user-placeholder.png",
                                                                    width: 44,
                                                                    height: 44,
                                                                    alt: adv?.name,
                                                                    className: "rounded-full"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/advocateService/page.js",
                                                                    lineNumber: 432,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/advocateService/page.js",
                                                                lineNumber: 431,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/advocateService/page.js",
                                                            lineNumber: 430,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold text-black text-[16px] leading-4",
                                                                    children: adv?.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/advocateService/page.js",
                                                                    lineNumber: 444,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-500",
                                                                    children: new Date(adv?.date).toLocaleString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/advocateService/page.js",
                                                                    lineNumber: 447,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/advocateService/page.js",
                                                            lineNumber: 443,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/advocateService/page.js",
                                                    lineNumber: 429,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center flex-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "bg-[#004AAD] text-white px-2 py-1 rounded-lg text-lg font-bold",
                                                            children: adv?.assignUsers?.length || 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/advocateService/page.js",
                                                            lineNumber: 453,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "text-[#004AAD] px-2 py-1 rounded-lg text-lg cursor-pointer font-bold",
                                                            onClick: ()=>{
                                                                setSelectedAdvocate(adv);
                                                                setIsModalOpen(true);
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiEdit"], {}, void 0, false, {
                                                                fileName: "[project]/src/app/advocateService/page.js",
                                                                lineNumber: 463,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/advocateService/page.js",
                                                            lineNumber: 456,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "text-[#004AAD] px-2 py-1 rounded-lg text-lg cursor-pointer font-bold hover:text-red-400",
                                                            onClick: ()=>handleDeleteAdvocate(adv?._id),
                                                            children: deletingId === adv?._id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[12px]",
                                                                children: "Wait.."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/advocateService/page.js",
                                                                lineNumber: 470,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiDeleteBin6Line"], {}, void 0, false, {
                                                                fileName: "[project]/src/app/advocateService/page.js",
                                                                lineNumber: 472,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/advocateService/page.js",
                                                            lineNumber: 465,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/advocateService/page.js",
                                                    lineNumber: 452,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/app/advocateService/page.js",
                                            lineNumber: 425,
                                            columnNumber: 21
                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "No advocates found. Add one above."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/advocateService/page.js",
                                        lineNumber: 479,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/advocateService/page.js",
                                    lineNumber: 422,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/advocateService/page.js",
                            lineNumber: 413,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[30%] bg-white rounded-xl shadow-xl p-6 mt-10 h-[425px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold mb-1",
                                            children: "Service Timing"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/advocateService/page.js",
                                            lineNumber: 488,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            className: "flex flex-col w-full",
                                            autoComplete: "off",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Available from 9:00 AM - 11:00 AM",
                                                    className: "flex-1 border rounded w-full p-2 text-sm outline-none focus:ring-2 focus:ring-gray-500 mt-1",
                                                    onChange: (e)=>setTiming(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/advocateService/page.js",
                                                    lineNumber: 490,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "w-[100px] mt-2 p-1 bg-[#004AAD] text-white rounded-sm cursor-pointer hover:bg-white hover:text-[#004AAD] border transition",
                                                    onClick: handleTiming,
                                                    children: "Submit"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/advocateService/page.js",
                                                    lineNumber: 496,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/advocateService/page.js",
                                            lineNumber: 489,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/advocateService/page.js",
                                    lineNumber: 487,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold mb-1",
                                            children: "Call Your Advocate"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/advocateService/page.js",
                                            lineNumber: 505,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            className: "flex flex-col w-full",
                                            autoComplete: "off",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    placeholder: "Type here...",
                                                    name: "message",
                                                    className: "flex-1 border rounded w-full p-1 text-sm outline-none focus:ring-2 focus:ring-gray-500 mt-1",
                                                    onChange: (e)=>setCustomeAdvocate((prev)=>({
                                                                ...prev,
                                                                [e.target.name]: e.target.value
                                                            }))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/advocateService/page.js",
                                                    lineNumber: 507,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "w-[100px] mt-2 p-1 bg-[#004AAD] text-white rounded-sm cursor-pointer hover:bg-white hover:text-[#004AAD] border transition",
                                                    onClick: callYourAdvoateSetup,
                                                    children: loads ? "Wait..." : "Submit"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/advocateService/page.js",
                                                    lineNumber: 518,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/advocateService/page.js",
                                            lineNumber: 506,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/advocateService/page.js",
                                    lineNumber: 504,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/advocateService/page.js",
                            lineNumber: 486,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/advocateService/page.js",
                    lineNumber: 355,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/advocateService/page.js",
                lineNumber: 354,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/advocateService/page.js",
        lineNumber: 343,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=src_de30802b._.js.map