(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/url/BaseURL.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// export const API_BASE_URL = "https://dri-vercel.vercel.app/api/v1";
__turbopack_context__.s({
    "API_BASE_URL": ()=>API_BASE_URL
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "https://4frnn03l-5000.inc1.devtunnels.ms/api/v1";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
"[project]/src/app/components/CurrentImages.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>CurrentImages
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/BaseURL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/ApiRoute.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
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
function CurrentImages() {
    _s();
    const [images, setImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [previewImage, setPreviewImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Add More Loading
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // track which id is deleting
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    // Handle File Selection
    const handleFileChange = async (e)=>{
        const file = e.target.files[0];
        setPreviewImage(URL.createObjectURL(file));
        setLoading(true);
        const formData = new FormData();
        formData.append("image", file);
        try {
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].currentImage.upload), {
                method: "POST",
                body: formData,
                headers: {
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                }
            });
            const result = await res.json();
            if (result === null || result === void 0 ? void 0 : result.success) {
                getBanner();
                setPreviewImage(null);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(result === null || result === void 0 ? void 0 : result.message);
            } else {
                console.error(result);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result === null || result === void 0 ? void 0 : result.message);
            }
        } catch (error) {
            console.error(error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Error uploading image");
        } finally{
            setLoading(false);
        }
    };
    const triggerFileInput = ()=>{
        fileInputRef.current.click();
    };
    // Fetch Banners
    const getBanner = async ()=>{
        try {
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].currentImage.getbanner), {
                method: "GET"
            });
            const result = await res.json();
            if (result === null || result === void 0 ? void 0 : result.success) {
                setImage(result === null || result === void 0 ? void 0 : result.banner);
            }
        } catch (err) {
            console.error(err);
        }
    };
    // Delete Image
    const deleteImage = async (public_id)=>{
        setDeleting(public_id);
        try {
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].currentImage.delete, "?public_id=").concat(public_id), {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                }
            });
            const result = await res.json();
            if (result === null || result === void 0 ? void 0 : result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(result.message);
                getBanner();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result.message);
            }
        } catch (err) {
            console.error("Error deleting image:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(err.message);
        } finally{
            setDeleting(null);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CurrentImages.useEffect": ()=>{
            getBanner();
        }
    }["CurrentImages.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-4 rounded-xl shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4",
                children: "Current Images"
            }, void 0, false, {
                fileName: "[project]/src/app/components/CurrentImages.js",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-4",
                children: [
                    images.map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-56 h-36 border rounded-xl overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: src === null || src === void 0 ? void 0 : src.hyperLink,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "relative block w-full h-[150px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: src === null || src === void 0 ? void 0 : src.bannerImage,
                                        alt: "Image ".concat(index),
                                        className: "object-cover",
                                        fill: true,
                                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/CurrentImages.js",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/CurrentImages.js",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>deleteImage(src === null || src === void 0 ? void 0 : src.public_id),
                                    disabled: deleting === (src === null || src === void 0 ? void 0 : src.public_id),
                                    className: "absolute bottom-2 right-2 bg-red-600 text-white px-2 py-1 text-xs rounded flex items-center ".concat(deleting === (src === null || src === void 0 ? void 0 : src.public_id) ? "opacity-70 cursor-not-allowed" : ""),
                                    children: deleting === (src === null || src === void 0 ? void 0 : src.public_id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        size: 14,
                                        className: "animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/CurrentImages.js",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                size: 14,
                                                className: "mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/CurrentImages.js",
                                                lineNumber: 150,
                                                columnNumber: 19
                                            }, this),
                                            " Delete"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/CurrentImages.js",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/components/CurrentImages.js",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: !loading ? triggerFileInput : undefined,
                        className: "w-56 h-36 border-2 border-dashed flex flex-col items-center justify-center rounded-xl text-gray-500 cursor-pointer",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            size: 24,
                            className: "animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/CurrentImages.js",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/CurrentImages.js",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-2 text-sm",
                                    children: "Add More"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/CurrentImages.js",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/CurrentImages.js",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    previewImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-56 h-36 border rounded-xl overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "".concat(previewImage),
                            alt: "Preview",
                            className: "w-full h-full object-cover",
                            fill: true,
                            sizes: "(max-width: 768px) 100vw,  (max-width: 1200px) 50vw,  33vw"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/CurrentImages.js",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/CurrentImages.js",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        ref: fileInputRef,
                        className: "hidden",
                        accept: "image/*",
                        onChange: handleFileChange
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/CurrentImages.js",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/CurrentImages.js",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/CurrentImages.js",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s(CurrentImages, "FGjsMhhfDdoDhg5hZwhMtvjwEdA=");
_c = CurrentImages;
var _c;
__turbopack_context__.k.register(_c, "CurrentImages");
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
"[project]/src/app/components/HowDRIWorks.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>HowDRIWorks
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/BaseURL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/ApiRoute.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
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
function HowDRIWorks() {
    _s();
    const [driwork, setDriWorks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editingIndex, setEditingIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editedStep, setEditedStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        content: "",
        image: ""
    });
    // Modal state for Add More
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newStep, setNewStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        content: "",
        image: null
    });
    // Loading states
    const [saveLoading, setSaveLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteLoadingId, setDeleteLoadingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [addLoading, setAddLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Fetch all data
    const howDriWorkApi = async ()=>{
        try {
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].driwork.getAll), {
                method: "GET",
                headers: {
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                }
            });
            const result = await res.json();
            if (result === null || result === void 0 ? void 0 : result.success) {
                setDriWorks(result === null || result === void 0 ? void 0 : result.data);
            } else {
                setDriWorks([]);
            }
        } catch (error) {
            console.error(error);
        }
    };
    // Save Edited Data
    const handleSave = async (index)=>{
        try {
            var _updatedSteps_index, _updatedSteps_index1, _updatedSteps_index2, _updatedSteps_index3;
            setSaveLoading(true);
            const updatedSteps = [
                ...driwork
            ];
            updatedSteps[index] = {
                ...updatedSteps[index],
                title: editedStep.title,
                content: editedStep.content
            };
            const formData = new FormData();
            formData.append("title", (_updatedSteps_index = updatedSteps[index]) === null || _updatedSteps_index === void 0 ? void 0 : _updatedSteps_index.title);
            formData.append("driId", (_updatedSteps_index1 = updatedSteps[index]) === null || _updatedSteps_index1 === void 0 ? void 0 : _updatedSteps_index1._id);
            formData.append("content", (_updatedSteps_index2 = updatedSteps[index]) === null || _updatedSteps_index2 === void 0 ? void 0 : _updatedSteps_index2.content);
            formData.append("public_id", ((_updatedSteps_index3 = updatedSteps[index]) === null || _updatedSteps_index3 === void 0 ? void 0 : _updatedSteps_index3.public_id) || "");
            if (editedStep.image) {
                formData.append("image", editedStep.image);
            }
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].driwork.update), {
                method: "PUT",
                headers: {
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                },
                body: formData
            });
            const result = await res.json();
            if (result === null || result === void 0 ? void 0 : result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(result === null || result === void 0 ? void 0 : result.message);
                howDriWorkApi();
                setDriWorks(updatedSteps);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result === null || result === void 0 ? void 0 : result.message);
                console.error("fail", result);
            }
        } catch (error) {
            console.error(error);
        } finally{
            setSaveLoading(false);
            setEditingIndex(null);
        }
    };
    // Handle Add More Save
    const handleAddMore = async ()=>{
        try {
            if (!newStep.title || !newStep.content || !newStep.image) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("All fields are required!");
                return;
            }
            setAddLoading(true);
            const formData = new FormData();
            formData.append("title", newStep.title);
            formData.append("content", newStep.content);
            formData.append("image", newStep.image);
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].driwork.add), {
                method: "POST",
                headers: {
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                },
                body: formData
            });
            const result = await res.json();
            if (result === null || result === void 0 ? void 0 : result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(result === null || result === void 0 ? void 0 : result.message);
                howDriWorkApi();
                setNewStep({
                    title: "",
                    content: "",
                    image: null
                });
                setShowModal(false);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result === null || result === void 0 ? void 0 : result.message);
            }
            setAddLoading(false);
        } catch (error) {
            console.log(error);
        } finally{
            setAddLoading(false);
        }
    };
    const deleteDriWorks = async (id)=>{
        try {
            setDeleteLoadingId(id);
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].driwork.delete, "?driId=").concat(id), {
                method: "Delete",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                }
            });
            const result = await res.json();
            if (result === null || result === void 0 ? void 0 : result.success) {
                howDriWorkApi();
            } else {
                console.error(result === null || result === void 0 ? void 0 : result.message);
            }
        } catch (error) {
            console.error(error);
        } finally{
            setDeleteLoadingId(null);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HowDRIWorks.useEffect": ()=>{
            howDriWorkApi();
        }
    }["HowDRIWorks.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " bg-white p-5 shadow rounded-xl  mt-10 ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold mb-4",
                    children: "How DRI Works ?"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/HowDRIWorks.js",
                    lineNumber: 170,
                    columnNumber: 9
                }, this),
                driwork === null || driwork === void 0 ? void 0 : driwork.map((step, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "".concat(step === null || step === void 0 ? void 0 : step.avatar),
                                alt: step === null || step === void 0 ? void 0 : step.title,
                                width: 70,
                                height: 70
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/HowDRIWorks.js",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            editingIndex === idx ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: editedStep.title,
                                                onChange: (e)=>setEditedStep({
                                                        ...editedStep,
                                                        title: e.target.value
                                                    }),
                                                className: "border rounded px-2 py-1 text-sm w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/HowDRIWorks.js",
                                                lineNumber: 183,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-md",
                                                children: step === null || step === void 0 ? void 0 : step.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/HowDRIWorks.js",
                                                lineNumber: 192,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                size: 14,
                                                className: "text-gray-500 cursor-pointer",
                                                onClick: ()=>{
                                                    setEditingIndex(idx);
                                                    setEditedStep({
                                                        title: step === null || step === void 0 ? void 0 : step.title,
                                                        content: step === null || step === void 0 ? void 0 : step.content,
                                                        image: ""
                                                    });
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/HowDRIWorks.js",
                                                lineNumber: 194,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/HowDRIWorks.js",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    editingIndex === idx ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: editedStep.content,
                                                onChange: (e)=>setEditedStep({
                                                        ...editedStep,
                                                        content: e.target.value
                                                    }),
                                                className: "border rounded px-2 py-1 text-sm w-full mt-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/HowDRIWorks.js",
                                                lineNumber: 210,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                className: "border rounded px-2 py-1 text-sm w-full mt-2",
                                                onChange: (e)=>setEditedStep({
                                                        ...editedStep,
                                                        image: e.target.files[0]
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/HowDRIWorks.js",
                                                lineNumber: 217,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleSave(idx),
                                                        disabled: saveLoading,
                                                        className: "text-sm px-2 py-1 bg-green-500 text-white rounded disabled:opacity-60",
                                                        children: saveLoading ? "Saving..." : "Save"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/HowDRIWorks.js",
                                                        lineNumber: 225,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setEditingIndex(null),
                                                        className: "text-sm px-2 py-1 bg-gray-300 text-black rounded",
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/HowDRIWorks.js",
                                                        lineNumber: 232,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>deleteDriWorks(step._id),
                                                        disabled: deleteLoadingId === step._id,
                                                        className: "text-sm px-2 py-1 bg-red-500 text-white rounded disabled:opacity-60",
                                                        children: deleteLoadingId === step._id ? "Deleting..." : "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/HowDRIWorks.js",
                                                        lineNumber: 238,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/HowDRIWorks.js",
                                                lineNumber: 224,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600",
                                        children: step === null || step === void 0 ? void 0 : step.content
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/HowDRIWorks.js",
                                        lineNumber: 248,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/HowDRIWorks.js",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/src/app/components/HowDRIWorks.js",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setShowModal(true),
                    className: "bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded text-sm flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 14,
                            className: "mr-1"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/HowDRIWorks.js",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this),
                        " Add More"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/HowDRIWorks.js",
                    lineNumber: 255,
                    columnNumber: 9
                }, this),
                showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/40 backdrop-blur-md flex justify-center items-center z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-lg shadow-lg w-[400px] relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowModal(false),
                                className: "absolute top-2 right-2 text-gray-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/HowDRIWorks.js",
                                    lineNumber: 270,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/HowDRIWorks.js",
                                lineNumber: 266,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold mb-4",
                                children: "Add New DRI Work"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/HowDRIWorks.js",
                                lineNumber: 272,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Enter Title",
                                value: newStep.title,
                                onChange: (e)=>setNewStep({
                                        ...newStep,
                                        title: e.target.value
                                    }),
                                className: "border rounded px-3 py-2 w-full mb-3"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/HowDRIWorks.js",
                                lineNumber: 274,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                placeholder: "Enter Content",
                                value: newStep.content,
                                onChange: (e)=>setNewStep({
                                        ...newStep,
                                        content: e.target.value
                                    }),
                                className: "border rounded px-3 py-2 w-full mb-3"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/HowDRIWorks.js",
                                lineNumber: 284,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                onChange: (e)=>setNewStep({
                                        ...newStep,
                                        image: e.target.files[0]
                                    }),
                                className: "border rounded px-3 py-2 w-full mb-3"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/HowDRIWorks.js",
                                lineNumber: 293,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAddMore,
                                disabled: addLoading,
                                className: "bg-green-500 text-white px-3 py-2 rounded w-full disabled:opacity-60",
                                children: addLoading ? "Saving..." : "Save"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/HowDRIWorks.js",
                                lineNumber: 301,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/HowDRIWorks.js",
                        lineNumber: 265,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/HowDRIWorks.js",
                    lineNumber: 264,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/HowDRIWorks.js",
            lineNumber: 169,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(HowDRIWorks, "LLG9PCDDzifixe2Q2TzmdBPoVQs=");
_c = HowDRIWorks;
var _c;
__turbopack_context__.k.register(_c, "HowDRIWorks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/paidDialbox.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>PaidDialBox
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/ApiRoute.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/BaseURL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function PaidDialBox() {
    _s();
    const [content, setcontent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dialboxContent, setdialboxContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const getDialBoxContent = async ()=>{
        try {
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].admin.getdialbox), {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                }
            });
            const result = await res.json();
            setcontent((result === null || result === void 0 ? void 0 : result.data) || "");
        } catch (error) {
            console.error(error);
        }
    };
    // add content
    const addDiaBoxContentFun = async ()=>{
        try {
            const data = {
                content: dialboxContent
            };
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].admin.adddialboxContent), {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            if (result === null || result === void 0 ? void 0 : result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(result === null || result === void 0 ? void 0 : result.message);
                setdialboxContent("");
                refreshFun();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result === null || result === void 0 ? void 0 : result.message);
            }
        } catch (error) {
            console.error(error);
        }
    };
    function refreshFun() {
        getDialBoxContent();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PaidDialBox.useEffect": ()=>{
            getDialBoxContent();
        }
    }["PaidDialBox.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-sm bg-white flex items-center flex-col shadow rounded-2xl p-5 mt-10 max-h-[210px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold mb-4 capitalize",
                    children: "Paid Dialogbox"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/paidDialbox.js",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "Content:- ",
                        content === null || content === void 0 ? void 0 : content.content
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/paidDialbox.js",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Enter Content ",
                            className: "flex-1 border rounded px-4 py-1 outline-none focus:ring-2 focus:ring-gray-500 mt-3",
                            onChange: (e)=>setdialboxContent(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/paidDialbox.js",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 w-20 py-1  rounded text-sm ",
                                    onClick: addDiaBoxContentFun,
                                    children: "Add"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/paidDialbox.js",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 w-20 py-1  rounded text-sm ",
                                    onClick: addDiaBoxContentFun,
                                    children: "Edit"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/paidDialbox.js",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/paidDialbox.js",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/paidDialbox.js",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/paidDialbox.js",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(PaidDialBox, "hxdrsIQ8pVNDrjvZMsaqY+IWbGw=");
_c = PaidDialBox;
var _c;
__turbopack_context__.k.register(_c, "PaidDialBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/PaymentGateway.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>PaymentGateway
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/BaseURL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/ApiRoute.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function PaymentGateway() {
    _s();
    const [upiData, setUpiData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editIndex, setEditIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newQr, setNewQr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Form data
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        upi_id: "",
        AcNumber: "",
        IFSC: "",
        Payee: "",
        AccountType: ""
    });
    // Fetch UPI + QR
    const GetPaymentQrAndUPI = async ()=>{
        try {
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].upi.get));
            const data = await res.json();
            setUpiData((data === null || data === void 0 ? void 0 : data.data) || []);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Failed to fetch payment details");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PaymentGateway.useEffect": ()=>{
            GetPaymentQrAndUPI();
        }
    }["PaymentGateway.useEffect"], []);
    // Add new
    const handleAdd = async ()=>{
        if (!formData.upi_id || !newQr) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Please provide UPI ID and QR");
            return;
        }
        setLoading(true);
        try {
            const fd = new FormData();
            fd.append("upi_id", formData.upi_id);
            fd.append("AcNumber", formData.AcNumber);
            fd.append("IFSC", formData.IFSC);
            fd.append("Payee", formData.Payee);
            fd.append("AccountType", formData.AccountType);
            fd.append("image", newQr);
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].upi.add), {
                method: "POST",
                body: fd
            });
            const result = await res.json();
            if (res.ok && result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Added successfully!");
                setIsModalOpen(false);
                setFormData({
                    upi_id: "",
                    AcNumber: "",
                    IFSC: "",
                    Payee: "",
                    AccountType: ""
                });
                setNewQr(null);
                GetPaymentQrAndUPI();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error((result === null || result === void 0 ? void 0 : result.message) || "Failed to add");
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Failed to add");
        } finally{
            setLoading(false);
        }
    };
    // Update existing
    const handleUpdate = async (id)=>{
        if (!formData.upi_id && !formData.AcNumber && !formData.IFSC && !formData.Payee && !formData.AccountType && !newQr) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Nothing to update");
            return;
        }
        setLoading(true);
        try {
            const fd = new FormData();
            if (formData.upi_id) fd.append("upi_id", formData.upi_id);
            if (formData.AcNumber) fd.append("AcNumber", formData.AcNumber);
            if (formData.IFSC) fd.append("IFSC", formData.IFSC);
            if (formData.Payee) fd.append("Payee", formData.Payee);
            if (formData.AccountType) fd.append("AccountType", formData.AccountType);
            if (newQr) fd.append("image", newQr);
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].upi.update, "/").concat(id), {
                method: "PUT",
                body: fd
            });
            const result = await res.json();
            if (res.ok && result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Updated successfully!");
                setEditIndex(null);
                setFormData({
                    upi_id: "",
                    AcNumber: "",
                    IFSC: "",
                    Payee: "",
                    AccountType: ""
                });
                setNewQr(null);
                GetPaymentQrAndUPI();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error((result === null || result === void 0 ? void 0 : result.message) || "Update failed");
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Update failed");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-4 rounded-xl shadow flex flex-col items-center justify-center mt-10 w-[450px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4",
                children: "Payment Gateway"
            }, void 0, false, {
                fileName: "[project]/src/app/components/PaymentGateway.js",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            upiData.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 w-full flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: newQr && editIndex === i ? URL.createObjectURL(newQr) : e.qrCode,
                            alt: "QR Code",
                            width: 150,
                            height: 150,
                            className: "rounded shadow"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PaymentGateway.js",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 w-full flex flex-col p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold m-1",
                                    children: [
                                        "UPI: ",
                                        e.upi_id
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/PaymentGateway.js",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold m-1",
                                    children: [
                                        "A/C Number: ",
                                        e.AcNumber || "000405007899"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/PaymentGateway.js",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold m-1",
                                    children: [
                                        "Payee/Beneficiary: ",
                                        e.Payee || "Debt Relief India"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/PaymentGateway.js",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold m-1",
                                    children: [
                                        "IFSC: ",
                                        e.IFSC || "SBIN0001234"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/PaymentGateway.js",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold m-1",
                                    children: [
                                        "Account Type: ",
                                        e.AccountType || "Current"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/PaymentGateway.js",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/PaymentGateway.js",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, e._id, true, {
                    fileName: "[project]/src/app/components/PaymentGateway.js",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsModalOpen(true),
                className: "mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded flex items-center text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                        size: 16,
                        className: "mr-2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PaymentGateway.js",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    " Upload New"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/PaymentGateway.js",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl p-6 w-[400px] relative shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute top-2 right-2 text-gray-500 hover:text-black",
                            onClick: ()=>setIsModalOpen(false),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PaymentGateway.js",
                                lineNumber: 181,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PaymentGateway.js",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-4",
                            children: "Add / Update UPI + QR"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PaymentGateway.js",
                            lineNumber: 184,
                            columnNumber: 13
                        }, this),
                        newQr && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: URL.createObjectURL(newQr),
                            alt: "New QR",
                            width: 180,
                            height: 180,
                            className: "rounded shadow mb-2 mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PaymentGateway.js",
                            lineNumber: 189,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            accept: "image/*",
                            className: "mt-2 text-sm w-full",
                            onChange: (e)=>setNewQr(e.target.files[0])
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PaymentGateway.js",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "UPI ID",
                            value: formData.upi_id,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    upi_id: e.target.value
                                }),
                            className: "border px-2 py-1 text-sm rounded mt-2 w-full"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PaymentGateway.js",
                            lineNumber: 204,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "A/C Number",
                            value: formData.AcNumber,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    AcNumber: e.target.value
                                }),
                            className: "border px-2 py-1 text-sm rounded mt-2 w-full"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PaymentGateway.js",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "IFSC",
                            value: formData.IFSC,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    IFSC: e.target.value
                                }),
                            className: "border px-2 py-1 text-sm rounded mt-2 w-full"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PaymentGateway.js",
                            lineNumber: 222,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Payee Name",
                            value: formData.Payee,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    Payee: e.target.value
                                }),
                            className: "border px-2 py-1 text-sm rounded mt-2 w-full"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PaymentGateway.js",
                            lineNumber: 231,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Account Type",
                            value: formData.AccountType,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    AccountType: e.target.value
                                }),
                            className: "border px-2 py-1 text-sm rounded mt-2 w-full"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PaymentGateway.js",
                            lineNumber: 240,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: editIndex !== null ? ()=>handleUpdate(upiData[editIndex]._id) : handleAdd,
                            disabled: loading,
                            className: "bg-green-500 text-white px-3 py-1 rounded text-sm flex items-center gap-1 mt-4 w-full justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PaymentGateway.js",
                                    lineNumber: 259,
                                    columnNumber: 15
                                }, this),
                                loading ? "Uploading..." : editIndex !== null ? "Update" : "Upload Now"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/PaymentGateway.js",
                            lineNumber: 250,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/PaymentGateway.js",
                    lineNumber: 176,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/PaymentGateway.js",
                lineNumber: 175,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/PaymentGateway.js",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_s(PaymentGateway, "1SbYfD+JRHUWLb2eONKNpa2cbFs=");
_c = PaymentGateway;
var _c;
__turbopack_context__.k.register(_c, "PaymentGateway");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/RecentFeatures.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>RecentFeatures
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/BaseURL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/ApiRoute.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/storage.js [app-client] (ecmascript)");
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
function RecentFeatures() {
    _s();
    const [features, setFeatures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAddModal, setShowAddModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newItem, setNewItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        bannerTitle: "",
        hyperLink: "",
        imageFile: null,
        imagePreview: null
    });
    const fileInputsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecentFeatures.useEffect": ()=>{
            async function fetchData() {
                try {
                    const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].currentImage.recentCard));
                    const data = await res.json();
                    if (data === null || data === void 0 ? void 0 : data.success) setFeatures(data.data);
                } catch (error) {
                    console.error("API fetch failed:", error);
                    setFeatures([]);
                }
            }
            fetchData();
        }
    }["RecentFeatures.useEffect"], []);
    const handleInputChange = (index, field, value)=>{
        const updated = [
            ...features
        ];
        updated[index][field] = value;
        setFeatures(updated);
    };
    const handleCameraClick = (index)=>{
        if (fileInputsRef.current[index]) fileInputsRef.current[index].click();
    };
    const handleFileChange = (index, file)=>{
        const updated = [
            ...features
        ];
        if (file) {
            updated[index].newImageFile = file;
            updated[index].imagePreview = URL.createObjectURL(file);
        }
        setFeatures(updated);
    };
    const handleSave = async (index)=>{
        const item = features[index];
        const formData = new FormData();
        formData.append("id", item === null || item === void 0 ? void 0 : item._id);
        formData.append("title", (item === null || item === void 0 ? void 0 : item.bannerTitle) || "");
        formData.append("hyperLink", (item === null || item === void 0 ? void 0 : item.hyperLink) || "");
        if (item.newImageFile) formData.append("image", item.newImageFile);
        try {
            setLoading(true);
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].currentImage.update), {
                method: "PUT",
                body: formData
            });
            const result = await res.json();
            if (result.success) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(result.message || "Saved!");
            else __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result.message || "Save failed!");
        } catch (error) {
            console.error("Save failed:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Save failed!");
        } finally{
            setLoading(false);
        }
    };
    const handleAddSubmit = async ()=>{
        const formData = new FormData();
        formData.append("title", newItem.bannerTitle || "");
        formData.append("hyperLink", newItem.hyperLink || "");
        if (newItem.imageFile) formData.append("image", newItem.imageFile);
        try {
            setLoading(true);
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].currentImage.addWithTitle), {
                method: "POST",
                body: formData
            });
            const result = await res.json();
            if (result === null || result === void 0 ? void 0 : result.success) {
                var _result_data;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success((result === null || result === void 0 ? void 0 : result.message) || "Added successfully!");
                // Add the new item to features with imagePreview set
                const newFeature = {
                    ...result === null || result === void 0 ? void 0 : result.data,
                    imagePreview: (result === null || result === void 0 ? void 0 : (_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.bannerImage) || null
                };
                setFeatures((prev)=>[
                        ...prev,
                        newFeature
                    ]);
                setShowAddModal(false);
                setNewItem({
                    bannerTitle: "",
                    hyperLink: "",
                    imageFile: null,
                    imagePreview: null
                });
            } else __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result.message || "Add failed!");
            async function fetchData() {
                try {
                    const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].currentImage.recentCard));
                    const data = await res.json();
                    if (data === null || data === void 0 ? void 0 : data.success) setFeatures(data.data);
                } catch (error) {
                    console.error("API fetch failed:", error);
                    setFeatures([]);
                }
            }
            fetchData();
        } catch (error) {
            console.error("Add failed:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Add failed!");
        } finally{
            setLoading(false);
        }
    };
    const deleteBannerTitle = async (id, public_id)=>{
        try {
            if (!id || !public_id) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Banner information is missing!");
                return;
            }
            const response = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].currentImage.deleteWithTitle, "?id=").concat(id, "&public=").concat(public_id), {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                }
            });
            const result = await response.json();
            if (result === null || result === void 0 ? void 0 : result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(result === null || result === void 0 ? void 0 : result.message);
                setFeatures((prev)=>prev.filter((f)=>f._id !== id));
            } else __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result === null || result === void 0 ? void 0 : result.message);
        } catch (error) {
            console.error(error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-xl shadow mt-10 w-[900px] h-[400px] border-2 border-none overflow-hidden overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold",
                        children: "Recent Cards"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/RecentFeatures.js",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowAddModal(true),
                        className: "bg-blue-500 text-white px-4 py-2 rounded-md shadow flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RecentFeatures.js",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            " Add New"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/RecentFeatures.js",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/RecentFeatures.js",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            features.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col mb-6 p-4 rounded-lg",
                    style: {
                        boxShadow: "2px 2px 5px 5px #f7f3f2"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "".concat((item === null || item === void 0 ? void 0 : item.hyperLink) || "#"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-20 h-20 bg-[#FFF5DC] rounded-lg flex items-center justify-center p-2 overflow-hidden",
                                        children: (item === null || item === void 0 ? void 0 : item.imagePreview) || (item === null || item === void 0 ? void 0 : item.bannerImage) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: item.imagePreview || item.bannerImage,
                                            alt: (item === null || item === void 0 ? void 0 : item.bannerTitle) || "Recent",
                                            width: 100,
                                            height: 100,
                                            style: {
                                                width: "100px",
                                                height: "auto"
                                            },
                                            className: "object-cover rounded-md"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RecentFeatures.js",
                                            lineNumber: 184,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-20 h-20 bg-gray-200 flex items-center justify-center rounded-md",
                                            children: "No Image"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/RecentFeatures.js",
                                            lineNumber: 193,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/RecentFeatures.js",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/RecentFeatures.js",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium",
                                    children: item === null || item === void 0 ? void 0 : item.bannerTitle
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/RecentFeatures.js",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/RecentFeatures.js",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mb-3 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: (item === null || item === void 0 ? void 0 : item.bannerTitle) || "",
                                    onChange: (e)=>handleInputChange(index, "bannerTitle", e.target.value),
                                    placeholder: "Enter title",
                                    className: "w-full pl-4 pr-10 py-2 border rounded-md shadow-sm text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/RecentFeatures.js",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                    size: 16,
                                    className: "absolute right-3 top-3 text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/RecentFeatures.js",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/RecentFeatures.js",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mb-3 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: (item === null || item === void 0 ? void 0 : item.hyperLink) || "",
                                    onChange: (e)=>handleInputChange(index, "hyperLink", e.target.value),
                                    placeholder: "Enter hyperlink",
                                    className: "w-full pl-4 pr-10 py-2 border rounded-md shadow-sm text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/RecentFeatures.js",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                    size: 16,
                                    className: "absolute right-3 top-3 text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/RecentFeatures.js",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/RecentFeatures.js",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleCameraClick(index),
                                    className: "w-[50px] h-[50px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                        size: 24,
                                        className: "text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/RecentFeatures.js",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/RecentFeatures.js",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    accept: "image/*",
                                    className: "hidden",
                                    ref: (el)=>fileInputsRef.current[index] = el,
                                    onChange: (e)=>handleFileChange(index, e.target.files[0])
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/RecentFeatures.js",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleSave(index),
                                    className: "bg-green-500 text-white text-sm px-4 py-2 rounded-md shadow cursor-pointer",
                                    children: loading ? "Saving..." : "Save"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/RecentFeatures.js",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-red-500 text-white text-sm px-4 py-2 rounded-md shadow cursor-pointer",
                                    onClick: ()=>deleteBannerTitle(item === null || item === void 0 ? void 0 : item._id, item === null || item === void 0 ? void 0 : item.public_id),
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/RecentFeatures.js",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/RecentFeatures.js",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    ]
                }, (item === null || item === void 0 ? void 0 : item._id) || index, true, {
                    fileName: "[project]/src/app/components/RecentFeatures.js",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)),
            showAddModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white w-[400px] p-6 rounded-xl shadow relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowAddModal(false),
                            className: "absolute top-3 right-3 text-gray-500 hover:text-black",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/RecentFeatures.js",
                                lineNumber: 267,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/RecentFeatures.js",
                            lineNumber: 263,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold mb-4",
                            children: "Add New Feature"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/RecentFeatures.js",
                            lineNumber: 270,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                (newItem === null || newItem === void 0 ? void 0 : newItem.imagePreview) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: newItem.imagePreview,
                                    alt: "Preview",
                                    width: 128,
                                    height: 128,
                                    style: {
                                        width: "128px",
                                        height: "auto"
                                    },
                                    className: "object-cover rounded-md mb-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/RecentFeatures.js",
                                    lineNumber: 274,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 h-32 bg-gray-200 flex items-center justify-center rounded-md mb-2",
                                    children: "No Image"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/RecentFeatures.js",
                                    lineNumber: 283,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    accept: "image/*",
                                    onChange: (e)=>{
                                        const file = e.target.files[0];
                                        if (file) {
                                            setNewItem({
                                                ...newItem,
                                                imageFile: file,
                                                imagePreview: URL.createObjectURL(file)
                                            });
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/RecentFeatures.js",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/RecentFeatures.js",
                            lineNumber: 272,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: newItem.bannerTitle,
                            onChange: (e)=>setNewItem({
                                    ...newItem,
                                    bannerTitle: e.target.value
                                }),
                            placeholder: "Enter title",
                            className: "w-full mb-3 pl-4 py-2 border rounded-md shadow-sm text-sm"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/RecentFeatures.js",
                            lineNumber: 303,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: newItem.hyperLink,
                            onChange: (e)=>setNewItem({
                                    ...newItem,
                                    hyperLink: e.target.value
                                }),
                            placeholder: "Enter hyperlink",
                            className: "w-full mb-4 pl-4 py-2 border rounded-md shadow-sm text-sm"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/RecentFeatures.js",
                            lineNumber: 312,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleAddSubmit,
                            className: "w-full bg-blue-500 text-white py-2 rounded-md",
                            children: loading ? "Loading..." : "Add"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/RecentFeatures.js",
                            lineNumber: 321,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/RecentFeatures.js",
                    lineNumber: 262,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/RecentFeatures.js",
                lineNumber: 261,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/RecentFeatures.js",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_s(RecentFeatures, "beJ0IxVym7AN9g+1j6n00FvBKMI=");
_c = RecentFeatures;
var _c;
__turbopack_context__.k.register(_c, "RecentFeatures");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Service.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ServiceAndSubscription
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/ApiRoute.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/BaseURL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function validateDueDate(dueDate) {
    const now = new Date();
    const inputDate = new Date(dueDate);
    return inputDate > now;
}
function ServiceAndSubscription() {
    _s();
    // 🔹 Initial states
    const initialBank = {
        bankName: "",
        image: ""
    };
    const initialSubscription = {
        gst: "",
        duedate: "",
        client: "",
        subscription: ""
    };
    const [bank, setBank] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialBank);
    const [subscription, setSubscription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSubscription);
    const [clientList, setClientList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const getUser = async ()=>{
        try {
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].subscription.getuser), {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                }
            });
            const result = await res.json();
            if (result === null || result === void 0 ? void 0 : result.success) {
                setClientList(result === null || result === void 0 ? void 0 : result.data);
            }
        } catch (error) {
            console.error(error);
        }
    };
    function validationCheck(valid) {
        if (valid.gst < 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("GST should not be negative");
            return false;
        }
        if (!validateDueDate(valid.duedate)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Please set a due date that is in the future.");
            return false;
        }
        if (!valid.duedate) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Due date is require");
            return false;
        }
        if (!valid.client) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Client is require");
            return false;
        }
        if (!valid.subscription) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Subscription amount is require");
            return false;
        }
        if (!valid.gst) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("GST Is require");
            return false;
        }
        return true;
    }
    const addSubscription = async (e)=>{
        e.preventDefault();
        const isValid = validationCheck(subscription);
        if (!isValid) return;
        try {
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].subscription.add), {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                },
                body: JSON.stringify(subscription)
            });
            const result = await res.json();
            if (result === null || result === void 0 ? void 0 : result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(result === null || result === void 0 ? void 0 : result.message);
                setSubscription(initialSubscription); // reset
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result === null || result === void 0 ? void 0 : result.message);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const addBanks = async ()=>{
        const formdata = new FormData();
        formdata.append("bankName", bank.bankName);
        formdata.append("image", bank.image);
        try {
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].bank.addbanks), {
                method: "POST",
                headers: {
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                },
                body: formdata
            });
            const result = await res.json();
            if (result === null || result === void 0 ? void 0 : result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Bank added");
                setBank(initialBank); // reset
            }
        } catch (error) {
            console.error(error);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceAndSubscription.useEffect": ()=>{
            getUser();
        }
    }["ServiceAndSubscription.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-xl shadow mt-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4",
                children: "Banks & Subscriptions"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Service.js",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full flex-row gap-3 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "w-[50%] flex flex-col shadow-lg shadow-gray-200 p-4 rounded-sm border border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold ml-1",
                                children: "Monthly Subscription"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Service.js",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                placeholder: "Subscription Fees",
                                name: "subscription",
                                value: subscription.subscription,
                                onChange: (e)=>setSubscription((prev)=>({
                                            ...prev,
                                            [e.target.name]: e.target.value
                                        })),
                                required: true,
                                className: "w-sm border border-gray-400 rounded p-1.5 mt-3 ml-1"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Service.js",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                placeholder: "GST In Numbers (e.g. 18)",
                                type: "number",
                                name: "gst",
                                value: subscription.gst,
                                onChange: (e)=>setSubscription((prev)=>({
                                            ...prev,
                                            [e.target.name]: e.target.value
                                        })),
                                required: true,
                                className: "w-sm border border-gray-400 rounded p-1.5 m-1 mt-3"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Service.js",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                name: "duedate",
                                value: subscription.duedate,
                                onChange: (e)=>setSubscription((prev)=>({
                                            ...prev,
                                            [e.target.name]: e.target.value
                                        })),
                                className: "w-sm border border-gray-400 rounded p-1.5 m-1 mt-3"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Service.js",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "w-sm border border-gray-400 rounded p-1.5 m-1 mt-3 outline-neutral-50",
                                value: subscription.client,
                                onChange: (e)=>setSubscription((prev)=>({
                                            ...prev,
                                            client: e.target.value
                                        })),
                                name: "client",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select Clients"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Service.js",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this),
                                    clientList === null || clientList === void 0 ? void 0 : clientList.map((val)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            className: "p-2 hover:bg-blue-300 cursor-pointer",
                                            value: val === null || val === void 0 ? void 0 : val.user_id,
                                            children: [
                                                val === null || val === void 0 ? void 0 : val.name,
                                                " (",
                                                val === null || val === void 0 ? void 0 : val.id,
                                                ")"
                                            ]
                                        }, val === null || val === void 0 ? void 0 : val.user_id, true, {
                                            fileName: "[project]/src/app/components/Service.js",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Service.js",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: addSubscription,
                                className: "w-25 bg-[#2B7FFF] text-white capitalize cursor-pointer rounded p-1.5 ml-1 mt-2 disabled:opacity-50",
                                children: "add"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Service.js",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Service.js",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[50%] flex flex-col shadow-lg shadow-gray-200 p-4 rounded-sm border border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold ml-1",
                                children: "Add Banks"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Service.js",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                placeholder: "Bank Name",
                                type: "text",
                                name: "bankName",
                                value: bank.bankName,
                                onChange: (e)=>{
                                    setBank((pre)=>({
                                            ...pre,
                                            [e.target.name]: e.target.value
                                        }));
                                },
                                className: "w-sm border border-gray-400 rounded p-1.5 mt-3 ml-1"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Service.js",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                name: "image",
                                onChange: (e)=>{
                                    setBank((pre)=>({
                                            ...pre,
                                            [e.target.name]: e.target.files[0]
                                        }));
                                },
                                className: "w-sm border border-gray-400 rounded p-1.5 mt-3 ml-1"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Service.js",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: addBanks,
                                className: "w-25 bg-[#2B7FFF] text-white capitalize cursor-pointer rounded p-1.5 ml-1 mt-2 disabled:opacity-50",
                                children: "add"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Service.js",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Service.js",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Service.js",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Service.js",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_s(ServiceAndSubscription, "eL4WMjLOpaTUwF1q9iAwVc+e4m8=");
_c = ServiceAndSubscription;
var _c;
__turbopack_context__.k.register(_c, "ServiceAndSubscription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Whatsaapp.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Whatsapp
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/ApiRoute.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/BaseURL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function Whatsapp() {
    var _whatsapp_whatsapp;
    _s();
    const [whatsapp, setWhatsapp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [whatsappNumber, setWhatsappNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const getWhatsapp = async ()=>{
        try {
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].whatsapp.get));
            const result = await res.json();
            setWhatsapp(result || "");
        } catch (error) {
            console.error(error);
        }
    };
    // add whatsapp
    const addWhatsapp = async ()=>{
        try {
            const data = {
                number: whatsappNumber
            };
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].whatsapp.add), {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(result === null || result === void 0 ? void 0 : result.message);
        } catch (error) {
            console.error(error);
        }
    };
    const updateWhatsapp = async ()=>{
        try {
            const data = {
                number: whatsappNumber
            };
            if (!data.number) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("whatsapp Number Missing");
                return;
            }
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].whatsapp.update), {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(result === null || result === void 0 ? void 0 : result.message);
        } catch (error) {
            console.error(error);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Whatsapp.useEffect": ()=>{
            getWhatsapp();
        }
    }["Whatsapp.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-sm bg-white flex items-center flex-col shadow rounded-2xl p-5 mt-10 max-h-[210px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold mb-4 capitalize",
                    children: "whatsApp support number"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Whatsaapp.js",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "Assinged:- ",
                        whatsapp === null || whatsapp === void 0 ? void 0 : (_whatsapp_whatsapp = whatsapp.whatsapp) === null || _whatsapp_whatsapp === void 0 ? void 0 : _whatsapp_whatsapp.number
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Whatsaapp.js",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Enter WhatsApp number",
                            className: "flex-1 border rounded px-4 py-1 outline-none focus:ring-2 focus:ring-gray-500 mt-3",
                            onChange: (e)=>setWhatsappNumber(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Whatsaapp.js",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 w-20 py-1  rounded text-sm ",
                                    onClick: addWhatsapp,
                                    children: "Add"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Whatsaapp.js",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 w-20 py-1  rounded text-sm ",
                                    onClick: updateWhatsapp,
                                    children: "Edit"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Whatsaapp.js",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Whatsaapp.js",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Whatsaapp.js",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Whatsaapp.js",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(Whatsapp, "2kGILLv8IRek9+ngO2mDS2eMspk=");
_c = Whatsapp;
var _c;
__turbopack_context__.k.register(_c, "Whatsapp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utlis/DashboardSkeleton.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/DashboardSkeleton.jsx
__turbopack_context__.s({
    "default": ()=>DashboardSkeleton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
function DashboardSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 animate-pulse",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shimmer h-40 w-full rounded-xl mb-6"
            }, void 0, false, {
                fileName: "[project]/src/utlis/DashboardSkeleton.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shimmer h-32 rounded-xl"
                    }, void 0, false, {
                        fileName: "[project]/src/utlis/DashboardSkeleton.jsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shimmer h-32 rounded-xl"
                    }, void 0, false, {
                        fileName: "[project]/src/utlis/DashboardSkeleton.jsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shimmer h-32 rounded-xl"
                    }, void 0, false, {
                        fileName: "[project]/src/utlis/DashboardSkeleton.jsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shimmer h-32 rounded-xl"
                    }, void 0, false, {
                        fileName: "[project]/src/utlis/DashboardSkeleton.jsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shimmer h-32 rounded-xl"
                    }, void 0, false, {
                        fileName: "[project]/src/utlis/DashboardSkeleton.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shimmer h-32 rounded-xl"
                    }, void 0, false, {
                        fileName: "[project]/src/utlis/DashboardSkeleton.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/utlis/DashboardSkeleton.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/utlis/DashboardSkeleton.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = DashboardSkeleton;
var _c;
__turbopack_context__.k.register(_c, "DashboardSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/admin/dashboard/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>AdminPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$CurrentImages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/CurrentImages.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Header.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$HowDRIWorks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/HowDRIWorks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$paidDialbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/paidDialbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PaymentGateway$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/PaymentGateway.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$RecentFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/RecentFeatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Service.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Whatsaapp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Whatsaapp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utlis$2f$DashboardSkeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utlis/DashboardSkeleton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
function AdminPage() {
    _s();
    const [skeleton, setSkeleton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPage.useEffect": ()=>{
            const time = setTimeout({
                "AdminPage.useEffect.time": ()=>{
                    setSkeleton(false);
                }
            }["AdminPage.useEffect.time"], 1000);
            return ({
                "AdminPage.useEffect": ()=>clearTimeout(time)
            })["AdminPage.useEffect"];
        }
    }["AdminPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: skeleton ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utlis$2f$DashboardSkeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/admin/dashboard/page.js",
            lineNumber: 25,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#f5f8fe] ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard/page.js",
                    lineNumber: 28,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-screen p-4 w-[80%] mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$CurrentImages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/page.js",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/page.js",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col lg:flex-row justify-between gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$RecentFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/page.js",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PaymentGateway$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/page.js",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard/page.js",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: " w-[100%] flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$HowDRIWorks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/page.js",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex bg-red flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Whatsaapp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard/page.js",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$paidDialbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard/page.js",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard/page.js",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard/page.js",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard/page.js",
                    lineNumber: 30,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/dashboard/page.js",
            lineNumber: 27,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
_s(AdminPage, "QAk4u8we8tQMicRuV/B9ynxcuos=");
_c = AdminPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_0e93bf9a._.js.map