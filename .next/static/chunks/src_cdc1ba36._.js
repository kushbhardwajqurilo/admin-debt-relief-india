(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/url/ApiRoute.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
        },
        single: "/notification/single-user-notification"
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/url/BaseURL.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// export const API_BASE_URL = "https://dri-vercel.vercel.app/api/v1";
__turbopack_context__.s({
    "API_BASE_URL": ()=>API_BASE_URL
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "http://localhost:5000/api/v1";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/url/storage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Header.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/ApiRoute.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/BaseURL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function Header(param) {
    let { data } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [profileImage, setProfileImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [banner, setBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSettings"], {
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
            const response = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].admin.getadmindetail), {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                }
            });
            const bannerRes = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].admin.getadminBanner));
            const bannerData = await bannerRes.json();
            if (bannerData.success) setBanner(bannerData.data);
            const result = await response.json();
            if (result === null || result === void 0 ? void 0 : result.success) {
                var _result_data;
                setProfileImage((result === null || result === void 0 ? void 0 : (_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.image) || "");
            } else {
                console.log("err", result);
                if ((result === null || result === void 0 ? void 0 : result.message) == "Token expired") {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Your session has expired. Please log in again to continue.");
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearStorage"])();
                }
                console.error("Admin detail fetch error:", result);
            }
        } catch (err) {
            console.error("getAdminDetails error:", err);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            setProfileImage(data);
            getAdminDetails();
        }
    }["Header.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full flex items-center justify-between px-6 py-3 shadow bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center ms-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center ms-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/deptlogos.png",
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-4",
                children: navItems.map((item, idx)=>{
                    const isActive = pathname === item.path;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push(item.path),
                        className: "px-6 py-2 rounded-full border-2 border-[#ccc] flex flex-col items-center transition-all ".concat(isActive ? "bg-gradient-to-r from-blue-900 to-blue-600 text-white shadow-md" : "bg-blue-100 text-black hover:bg-blue-200"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    (item === null || item === void 0 ? void 0 : item.icon) && item.icon,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAction,
                        className: "flex items-center justify-center h-10 w-10 bg-blue-100 rounded-full hover:bg-blue-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPowerOff"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/profilePage",
                        className: "relative block h-10 w-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-10 w-10 rounded-full overflow-hidden border-2 border-purple-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(Header, "nV7TRHkhxq2oXf8qor5jUbA8eNI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/[details]/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "UpdateDateModal": ()=>UpdateDateModal,
    "UpdateServiceDateModal": ()=>UpdateServiceDateModal,
    "default": ()=>UserDashboard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/ApiRoute.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/BaseURL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Header.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// ✅ Safe date formatter
const formatDate = (dateStr)=>{
    const d = new Date(dateStr);
    const day = d.getDate().toString().padStart(2, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const year = d.getFullYear();
    return "".concat(day, "/").concat(month, "/").concat(year);
};
const months = [
    {
        month: "01",
        val: "January"
    },
    {
        month: "02",
        val: "February"
    },
    {
        month: "03",
        val: "March"
    },
    {
        month: "04",
        val: "April"
    },
    {
        month: "05",
        val: "May"
    },
    {
        month: "06",
        val: "June"
    },
    {
        month: "07",
        val: "July"
    },
    {
        month: "08",
        val: "August"
    },
    {
        month: "09",
        val: "September"
    },
    {
        month: "10",
        val: "October"
    },
    {
        month: "11",
        val: "November"
    },
    {
        month: "12",
        val: "December"
    }
];
const formatPaidServiceDate = (isoStr)=>{
    if (!isoStr) return "N/A";
    const d = new Date(isoStr);
    // Get UTC components
    const day = String(d.getUTCDate()).padStart(2, "0");
    const month = String(d.getUTCMonth() + 1).padStart(2, "0");
    const year = d.getUTCFullYear();
    return "".concat(day, "/").concat(month, "/").concat(year);
};
function PaidFormate(date) {
    const [day, month, year] = date.split("-").map(Number);
    const dateObj = new Date(year, month - 1, day);
    return dateObj;
}
_c = PaidFormate;
function UpdateDateModal(param) {
    let { isOpen, onClose, onUpdate, userId } = param;
    _s();
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [days, setdays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31
    ]);
    const handleSelectDate = (date)=>{
        setSelectedDate(date);
    };
    const handleUpdate = async ()=>{
        if (!selectedDate) return alert("Please select a date!");
        onUpdate(selectedDate);
        try {
            const response = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].subscription.updateDueDate), {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                },
                body: JSON.stringify({
                    date: selectedDate,
                    user_id: userId
                })
            });
            const result = await response.json();
            if (result === null || result === void 0 ? void 0 : result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(result === null || result === void 0 ? void 0 : result.message);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result === null || result === void 0 ? void 0 : result.message);
            }
        } catch (error) {
            console.error(error);
        } finally{
            setSelectedDate("");
            onClose();
        }
    };
    if (!isOpen) return null; // hide modal if not open
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-white-1 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-lg p-6 w-96",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold mb-4",
                    children: "Select Date to Update"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/[details]/page.js",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full flex-wrap  p-2 gap-2 mb-2 border-gray-400 rounded-sm border-1 ",
                    children: days === null || days === void 0 ? void 0 : days.map((val, pos)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            onClick: ()=>handleSelectDate(val),
                            value: selectedDate,
                            className: "flex-1 text-center p-2 rounded hover:bg-indigo-400 cursor-pointer transition hover:text-white ".concat(selectedDate == val ? "bg-indigo-400 text-white" : ""),
                            children: val
                        }, pos, false, {
                            fileName: "[project]/src/app/components/[details]/page.js",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/[details]/page.js",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-4 py-2 rounded bg-gray-200 hover:bg-gray-300",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/[details]/page.js",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleUpdate,
                            className: "px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600",
                            children: "Update"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/[details]/page.js",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/[details]/page.js",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/[details]/page.js",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/[details]/page.js",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(UpdateDateModal, "D3QOYEiQPRlYK2oxt6wZ3xNh4zE=");
_c1 = UpdateDateModal;
function UpdateServiceDateModal(param) {
    let { isOpen, onClose, onUpdate, phone } = param;
    _s1();
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [days, setdays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31
    ]);
    const handleSelectDate = (date)=>{
        setSelectedDate(date);
    };
    const handleUpdate = async ()=>{
        if (!selectedDate) return alert("Please select a date!");
        onUpdate(selectedDate);
        try {
            const response = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].emi.updateDueDate), {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                },
                body: JSON.stringify({
                    date: selectedDate,
                    phone
                })
            });
            const result = await response.json();
            if (result === null || result === void 0 ? void 0 : result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(result === null || result === void 0 ? void 0 : result.message);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result === null || result === void 0 ? void 0 : result.message);
            }
        } catch (error) {
            console.error(error);
        } finally{
            setSelectedDate("");
            onClose();
        }
    };
    if (!isOpen) return null; // hide modal if not open
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-white-1 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-lg p-6 w-96",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold mb-4",
                    children: "Select Date to Update"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/[details]/page.js",
                    lineNumber: 173,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full flex-wrap  p-2 gap-2 mb-2 border-gray-400 rounded-sm border-1 ",
                    children: days === null || days === void 0 ? void 0 : days.map((val, pos)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            onClick: ()=>handleSelectDate(val),
                            value: selectedDate,
                            className: "flex-1 text-center p-2 rounded hover:bg-indigo-400 cursor-pointer transition hover:text-white ".concat(selectedDate == val ? "bg-indigo-400 text-white" : ""),
                            children: val
                        }, pos, false, {
                            fileName: "[project]/src/app/components/[details]/page.js",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/[details]/page.js",
                    lineNumber: 175,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-4 py-2 rounded bg-gray-200 hover:bg-gray-300",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/[details]/page.js",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleUpdate,
                            className: "px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600",
                            children: "Update"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/[details]/page.js",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/[details]/page.js",
                    lineNumber: 189,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/[details]/page.js",
            lineNumber: 172,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/[details]/page.js",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_s1(UpdateServiceDateModal, "D3QOYEiQPRlYK2oxt6wZ3xNh4zE=");
_c2 = UpdateServiceDateModal;
function UserDashboard() {
    var _currentServices_;
    _s2();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isServiceModalOpen, setIsServiceModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { details } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const [usesrId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // ✅ Independent tab states
    const [subscriptionTab, setSubscriptionTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("current");
    const [serviceTab, setServiceTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("current");
    // ✅ Separate states for subscriptions
    const [currentSubscriptions, setCurrentSubscriptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [paidSubscriptions, setPaidSubscriptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    console.log("details", details);
    // ✅ Separate states for services
    const [currentServices, setCurrentServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [paidServices, setPaidServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isButton, setIsButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleUpdateDate = (date)=>{
        console.log("Updated date:", date);
    // call API or update state here
    };
    const handleServiceUpdateDate = (date)=>{
        console.log("Updated date:", date);
    // call API or update state here
    };
    const fetchUserId = async ()=>{
        try {
            const response = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].user.single), {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                },
                body: JSON.stringify({
                    user_id: details
                })
            });
            const result = await response.json();
            if (result === null || result === void 0 ? void 0 : result.success) {
                var _result_userData, _result_userData1, _result_userData2;
                setPhone(result === null || result === void 0 ? void 0 : (_result_userData = result.userData) === null || _result_userData === void 0 ? void 0 : _result_userData.phone);
                setUserId(result === null || result === void 0 ? void 0 : result.userData);
                fetchCurrentServices(result === null || result === void 0 ? void 0 : (_result_userData1 = result.userData) === null || _result_userData1 === void 0 ? void 0 : _result_userData1.phone);
                fetchPaidServices(result === null || result === void 0 ? void 0 : (_result_userData2 = result.userData) === null || _result_userData2 === void 0 ? void 0 : _result_userData2.phone);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const getStatusClass = (status)=>{
        if (status === "paid") return "bg-green-100 text-green-600";
        if (status === "pending") return "bg-yellow-100 text-yellow-600";
        return "bg-white text-red-500 border-1 border-red-500";
    };
    // ✅ Fetch unpaid/current subscriptions
    const fetchCurrentSubscriptions = async ()=>{
        try {
            const response = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].subscription.singerSubscription, "/").concat(details), {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            });
            const result = await response.json();
            if (result.data && result.data.length > 0) {
                const unpaidSubs = result.data.filter((sub)=>!sub.isPaid).map((sub)=>({
                        ...sub,
                        paidForMonth: new Date(sub.dueDate).toLocaleString("default", {
                            month: "long",
                            year: "numeric"
                        }),
                        status: "pending"
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
    const fetchPaidSubscriptions = async ()=>{
        try {
            const response = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].subscription.paidSubs, "?userId=").concat(details), {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                }
            });
            const result = await response.json();
            if (result.data && result.data.length > 0) {
                setPaidSubscriptions(result.data.map((sub)=>({
                        ...sub,
                        status: sub.status || "paid"
                    })));
            } else {
                setPaidSubscriptions([]);
            }
        } catch (err) {
            console.error("Error fetching paid subscriptions.");
        }
    };
    // ✅ Fetch unpaid/current services
    const fetchCurrentServices = async (phone)=>{
        try {
            var _ApiRute_driUser;
            const response = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"] === null || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"] === void 0 ? void 0 : (_ApiRute_driUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].driUser) === null || _ApiRute_driUser === void 0 ? void 0 : _ApiRute_driUser.singe), {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    phone
                })
            });
            const result = await response.json();
            if ((result === null || result === void 0 ? void 0 : result.success) === true) {
                var _result_data, _result_data1, _result_data2, _result_data3, _result_data4, _result_data5, _result_data6, _result_data7, _result_data8, _result_data9;
                let dateObj = null;
                if (result === null || result === void 0 ? void 0 : (_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.dueDate) {
                    const parts = String(result.data.dueDate).split("-");
                    if (parts.length === 3) {
                        const [day, month, year] = parts.map(Number);
                        dateObj = new Date(year, month - 1, day);
                    } else {
                        dateObj = new Date(result.data.dueDate);
                    }
                }
                const serviceType = !(result === null || result === void 0 ? void 0 : (_result_data1 = result.data) === null || _result_data1 === void 0 ? void 0 : _result_data1.Service_Fees) || (result === null || result === void 0 ? void 0 : (_result_data2 = result.data) === null || _result_data2 === void 0 ? void 0 : _result_data2.Service_Fees) === 0 || (result === null || result === void 0 ? void 0 : (_result_data3 = result.data) === null || _result_data3 === void 0 ? void 0 : _result_data3.Service_Fees) === "" ? "service Advance" : "service Fees";
                const status = (result === null || result === void 0 ? void 0 : (_result_data4 = result.data) === null || _result_data4 === void 0 ? void 0 : _result_data4.totalEmi) == (result === null || result === void 0 ? void 0 : (_result_data5 = result.data) === null || _result_data5 === void 0 ? void 0 : _result_data5.emiPay) ? "closed" : "pending";
                setIsButton(status === "closed");
                const payload = [
                    {
                        emiPay: result === null || result === void 0 ? void 0 : (_result_data6 = result.data) === null || _result_data6 === void 0 ? void 0 : _result_data6.emiPay,
                        userId: result === null || result === void 0 ? void 0 : (_result_data7 = result.data) === null || _result_data7 === void 0 ? void 0 : _result_data7.id,
                        dueDate: dateObj,
                        paidForMonth: dateObj ? dateObj.toLocaleString("default", {
                            month: "long",
                            year: "numeric"
                        }) : "N/A",
                        totalEMI: result === null || result === void 0 ? void 0 : (_result_data8 = result.data) === null || _result_data8 === void 0 ? void 0 : _result_data8.totalEmi,
                        emiAmount: result === null || result === void 0 ? void 0 : (_result_data9 = result.data) === null || _result_data9 === void 0 ? void 0 : _result_data9.monthlyEmi,
                        status,
                        serviceType
                    }
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
    const fetchPaidServices = async ()=>{
        try {
            const response = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"] === null || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"] === void 0 ? void 0 : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].emi.getPaidService, "/").concat(details), {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                }
            });
            const result = await response.json();
            if (result.data && result.data.length > 0) {
                setPaidServices(result.data.map((svc)=>{
                    const strMonth = months === null || months === void 0 ? void 0 : months.find((month)=>(month === null || month === void 0 ? void 0 : month.month) === (svc === null || svc === void 0 ? void 0 : svc.date.split("/")[1]));
                    return {
                        ...svc,
                        status: "paid",
                        paidForMonth: strMonth === null || strMonth === void 0 ? void 0 : strMonth.val
                    };
                }));
            } else {
                setPaidServices([]);
            }
        } catch (err) {
            console.log("user", err);
            console.error("Error fetching paid services.");
        }
    };
    // ✅ Mark subscription as paid
    const subscriptionMarkAsPaid = async (subscription)=>{
        try {
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].subscription.markaspaid), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                },
                body: JSON.stringify({
                    subscriptionId: subscription === null || subscription === void 0 ? void 0 : subscription._id,
                    paymentMode: "UPI"
                })
            });
            const data = await res.json();
            if (data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Subscription marked as paid!");
                fetchCurrentSubscriptions();
                fetchPaidSubscriptions();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(data.message || "Failed to mark as paid.");
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Error marking subscription as paid.");
        }
    };
    // ✅ Mark service as paid
    const checkServicePayment = (svcIndex)=>{
        const paidService = {
            ...currentServices[svcIndex],
            status: "paid"
        };
        setPaidServices((prev)=>[
                ...prev,
                paidService
            ]);
        setCurrentServices((prev)=>prev.filter((_, idx)=>idx !== svcIndex));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Service for ".concat(paidService.paidForMonth, " marked as PAID."));
    };
    // ✅ Decide which subscriptions/services to show based on tab
    const subscriptionsToShow = subscriptionTab === "paid" ? paidSubscriptions : currentSubscriptions;
    const servicesToShow = serviceTab === "paid" ? paidServices : currentServices;
    const markAsPaid = async ()=>{
        try {
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].emi.markaspaid), {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                },
                body: JSON.stringify({
                    phone: phone,
                    user_id: details
                })
            });
            const result = await res.json();
            fetchCurrentSubscriptions();
            fetchPaidSubscriptions();
            fetchUserId();
            (result === null || result === void 0 ? void 0 : result.success) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(result === null || result === void 0 ? void 0 : result.message) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result === null || result === void 0 ? void 0 : result.message);
        } catch (err) {
            console.error(err);
        }
    };
    // ✅ Initial fetch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserDashboard.useEffect": ()=>{
            fetchCurrentSubscriptions();
            fetchPaidSubscriptions();
            fetchUserId();
        }
    }["UserDashboard.useEffect"], [
        details,
        isModalOpen,
        isServiceModalOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/components/[details]/page.js",
                lineNumber: 500,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex justify-center items-start bg-gray-100 p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl w-full flex flex-col space-y-8 justify-center rounded-xl bg-white p-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-gray-800 mb-3",
                                        children: "Monthly Subscriptions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/[details]/page.js",
                                        lineNumber: 506,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "flex border-b mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "cursor-pointer px-4 py-2 ".concat(subscriptionTab === "current" ? "border-b-2 border-blue-600 font-semibold text-blue-600" : "text-gray-500 hover:text-blue-600"),
                                                onClick: ()=>setSubscriptionTab("current"),
                                                children: "Current"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                lineNumber: 510,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "cursor-pointer px-4 py-2 relative ".concat(subscriptionTab === "paid" ? "border-b-2 border-blue-600 font-semibold text-blue-600" : "text-gray-500 hover:text-blue-600"),
                                                onClick: ()=>setSubscriptionTab("paid"),
                                                children: [
                                                    "Paid",
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                lineNumber: 520,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/[details]/page.js",
                                        lineNumber: 509,
                                        columnNumber: 15
                                    }, this),
                                    subscriptionTab === "current" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-h-[250px] overflow-y-auto space-y-3 border border-gray-200 rounded-xl p-4 bg-gray-50",
                                        children: subscriptionsToShow.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-sm",
                                            children: "No subscriptions found."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/[details]/page.js",
                                            lineNumber: 538,
                                            columnNumber: 21
                                        }, this) : currentSubscriptions.map((sub, index)=>{
                                            var _sub_status;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 border rounded-xl bg-white hover:bg-gray-100 transition flex flex-col relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute top-4 right-4 text-sm font-medium px-3 py-1 rounded-full ".concat(getStatusClass(sub === null || sub === void 0 ? void 0 : sub.status)),
                                                        children: (sub === null || sub === void 0 ? void 0 : sub.status.charAt(0).toUpperCase()) + (sub === null || sub === void 0 ? void 0 : (_sub_status = sub.status) === null || _sub_status === void 0 ? void 0 : _sub_status.slice(1).toLowerCase())
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/[details]/page.js",
                                                        lineNumber: 547,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold text-gray-800",
                                                                children: sub.paidForMonth
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 557,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-red-500 ",
                                                                children: [
                                                                    "Due Date:",
                                                                    " ",
                                                                    formatDate((sub === null || sub === void 0 ? void 0 : sub.paidForDueDate) || (sub === null || sub === void 0 ? void 0 : sub.dueDate))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 560,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/[details]/page.js",
                                                        lineNumber: 556,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Amount: ₹",
                                                                    (sub === null || sub === void 0 ? void 0 : sub.subscription) || (sub === null || sub === void 0 ? void 0 : sub.amount)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 567,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "GST: ",
                                                                    sub === null || sub === void 0 ? void 0 : sub.gst,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 568,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Total: ₹",
                                                                    (sub === null || sub === void 0 ? void 0 : sub.totalAmount) || (sub === null || sub === void 0 ? void 0 : sub.amount)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 569,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/[details]/page.js",
                                                        lineNumber: 566,
                                                        columnNumber: 25
                                                    }, this),
                                                    (sub === null || sub === void 0 ? void 0 : sub.status) === "pending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 flex bg-red-50 w-[230px] justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>subscriptionMarkAsPaid(sub),
                                                                className: "px-3 py-1 bg-blue-600 text-white rounded hover:bg-green-700 transition text-sm",
                                                                children: "Mark as Paid"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 574,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setIsModalOpen(true),
                                                                className: "px-3 py-1 bg-blue-600 text-white rounded hover:bg-green-700 transition text-sm",
                                                                children: "Update Date"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 580,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/[details]/page.js",
                                                        lineNumber: 573,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                lineNumber: 543,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/[details]/page.js",
                                        lineNumber: 536,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-h-[250px] overflow-y-auto space-y-3 border border-gray-200 rounded-xl p-4 bg-gray-50",
                                        children: subscriptionsToShow.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-sm",
                                            children: "No paid subscriptions found."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/[details]/page.js",
                                            lineNumber: 595,
                                            columnNumber: 21
                                        }, this) : paidSubscriptions.map((sub, index)=>{
                                            var _sub_status, _sub_subscriptionId, _sub_subscriptionId1;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 border rounded-xl bg-white hover:bg-gray-100 transition flex flex-col relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute top-4 right-4 text-sm font-medium px-3 py-1 rounded-full ".concat(getStatusClass(sub === null || sub === void 0 ? void 0 : sub.status)),
                                                        children: (sub === null || sub === void 0 ? void 0 : sub.status.charAt(0).toUpperCase()) + (sub === null || sub === void 0 ? void 0 : (_sub_status = sub.status) === null || _sub_status === void 0 ? void 0 : _sub_status.slice(1).toLowerCase())
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/[details]/page.js",
                                                        lineNumber: 604,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold text-gray-800",
                                                                children: sub.paidForMonth
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 614,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-green-500",
                                                                children: [
                                                                    "Date:",
                                                                    " ",
                                                                    formatDate((sub === null || sub === void 0 ? void 0 : sub.paidForDueDate) || (sub === null || sub === void 0 ? void 0 : sub.dueDate))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 617,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/[details]/page.js",
                                                        lineNumber: 613,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Amount: ₹",
                                                                    sub === null || sub === void 0 ? void 0 : (_sub_subscriptionId = sub.subscriptionId) === null || _sub_subscriptionId === void 0 ? void 0 : _sub_subscriptionId.subscription
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 624,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "GST: ",
                                                                    sub === null || sub === void 0 ? void 0 : sub.gst,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 625,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Total: ₹",
                                                                    sub === null || sub === void 0 ? void 0 : (_sub_subscriptionId1 = sub.subscriptionId) === null || _sub_subscriptionId1 === void 0 ? void 0 : _sub_subscriptionId1.amount
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 626,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/[details]/page.js",
                                                        lineNumber: 623,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                lineNumber: 600,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/[details]/page.js",
                                        lineNumber: 593,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/[details]/page.js",
                                lineNumber: 505,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold mb-3 text-gray-800 capitalize",
                                        children: (_currentServices_ = currentServices[0]) === null || _currentServices_ === void 0 ? void 0 : _currentServices_.serviceType
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/[details]/page.js",
                                        lineNumber: 637,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "flex border-b mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "cursor-pointer px-4 py-2 ".concat(serviceTab === "current" ? "border-b-2 border-blue-600 font-semibold text-blue-600" : "text-gray-500 hover:text-blue-600"),
                                                onClick: ()=>setServiceTab("current"),
                                                children: "Current"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                lineNumber: 641,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "cursor-pointer px-4 py-2 ".concat(serviceTab === "paid" ? "border-b-2 border-blue-600 font-semibold text-blue-600" : "text-gray-500 hover:text-blue-600"),
                                                onClick: ()=>setServiceTab("paid"),
                                                children: "Paid"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                lineNumber: 651,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/[details]/page.js",
                                        lineNumber: 640,
                                        columnNumber: 15
                                    }, this),
                                    serviceTab === "current" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-h-[250px] overflow-y-auto space-y-3 border border-gray-200 rounded-xl p-4 bg-gray-50",
                                        children: currentServices.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-sm",
                                            children: "No Current Services"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/[details]/page.js",
                                            lineNumber: 667,
                                            columnNumber: 21
                                        }, this) : currentServices.map((service, index)=>{
                                            var _service_status, _service_status1;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 border rounded-xl bg-white hover:bg-gray-100 transition relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute top-4 right-4 text-sm font-medium px-3 py-1 rounded-full ".concat(getStatusClass(service.status)),
                                                        children: (service === null || service === void 0 ? void 0 : (_service_status = service.status) === null || _service_status === void 0 ? void 0 : _service_status.charAt(0).toUpperCase()) + (service === null || service === void 0 ? void 0 : (_service_status1 = service.status) === null || _service_status1 === void 0 ? void 0 : _service_status1.slice(1).toLowerCase())
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/[details]/page.js",
                                                        lineNumber: 674,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold text-gray-800",
                                                                children: service === null || service === void 0 ? void 0 : service.paidForMonth
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 684,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-red-500",
                                                                children: [
                                                                    "Due Date:",
                                                                    " ",
                                                                    (service === null || service === void 0 ? void 0 : service.dueDate) ? formatDate(service === null || service === void 0 ? void 0 : service.dueDate) : "N/A"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 687,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/[details]/page.js",
                                                        lineNumber: 683,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex text-sm text-gray-700 justify-between items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Total EMI: ",
                                                                    service.totalEMI || "N/A"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 696,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Paid EMI: ",
                                                                    service.emiPay
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 697,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "EMI Amount: ₹ ",
                                                                    service.emiAmount || "N/A"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 698,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/[details]/page.js",
                                                        lineNumber: 695,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 flex bg-red-50 w-[230px] justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: markAsPaid,
                                                                className: "px-3 py-1 rounded text-sm text-white transition ".concat(service.status === "closed" ? "bg-blue-600  cursor-not-allowed" : "bg-blue-600 hover:bg-green-700"),
                                                                disabled: service.status === "closed",
                                                                children: "Mark as Paid"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 702,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setIsServiceModalOpen(true),
                                                                className: "px-3 py-1 rounded text-sm text-white transition ".concat(service.status === "closed" ? "bg-blue-600 cursor-not-allowed" : "bg-blue-600 hover:bg-green-700"),
                                                                disabled: service.status === "closed",
                                                                children: "Update Date"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 713,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/[details]/page.js",
                                                        lineNumber: 701,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                lineNumber: 670,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/[details]/page.js",
                                        lineNumber: 665,
                                        columnNumber: 17
                                    }, this) : // Paid Services
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-h-[250px] overflow-y-auto space-y-3 border border-gray-200 rounded-xl p-4 bg-gray-50",
                                        children: paidServices.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-sm",
                                            children: "No Paid Services"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/[details]/page.js",
                                            lineNumber: 733,
                                            columnNumber: 21
                                        }, this) : paidServices.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 border rounded-xl bg-white hover:bg-gray-100 transition relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute top-4 right-4 text-sm font-medium px-3 py-1 rounded-full ".concat(getStatusClass(service.status)),
                                                        children: service.status.charAt(0).toUpperCase() + service.status.slice(1).toLowerCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/[details]/page.js",
                                                        lineNumber: 740,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold text-gray-800",
                                                                children: service.paidForMonth || "N/A"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 750,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-green-500",
                                                                children: [
                                                                    "Date: ",
                                                                    service === null || service === void 0 ? void 0 : service.date
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 754,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/[details]/page.js",
                                                        lineNumber: 749,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex text-sm text-gray-700 justify-between items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "EMI: ",
                                                                    service.emiNo || "N/A"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 760,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "EMI Amount: ₹ ",
                                                                    service.emiAmount || "N/A"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                                lineNumber: 761,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/[details]/page.js",
                                                        lineNumber: 759,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                lineNumber: 736,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/[details]/page.js",
                                        lineNumber: 731,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/[details]/page.js",
                                lineNumber: 636,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/[details]/page.js",
                        lineNumber: 503,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/[details]/page.js",
                    lineNumber: 502,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/[details]/page.js",
                lineNumber: 501,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UpdateDateModal, {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                onUpdate: handleUpdateDate,
                userId: details
            }, void 0, false, {
                fileName: "[project]/src/app/components/[details]/page.js",
                lineNumber: 773,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UpdateServiceDateModal, {
                isOpen: isServiceModalOpen,
                onClose: ()=>setIsServiceModalOpen(false),
                onUpdate: handleServiceUpdateDate,
                phone: phone
            }, void 0, false, {
                fileName: "[project]/src/app/components/[details]/page.js",
                lineNumber: 779,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s2(UserDashboard, "4M58ig+Q/Hk/yjCY/wHSDU5Mt2o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c3 = UserDashboard;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "PaidFormate");
__turbopack_context__.k.register(_c1, "UpdateDateModal");
__turbopack_context__.k.register(_c2, "UpdateServiceDateModal");
__turbopack_context__.k.register(_c3, "UserDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_cdc1ba36._.js.map