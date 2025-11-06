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
"[project]/src/app/profilePage/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>UserProfileAndAccount
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Header.js [app-client] (ecmascript)");
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
;
;
function UserProfileAndAccount() {
    var _adminDetails_data, _adminDetails_data1, _adminDetails_data2, _adminDetails_data3;
    _s();
    const [showProgress, setShowProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [twoFactorEnabled, setTwoFactorEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lightModeEnabled, setLightModeEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isEditingEmail, setIsEditingEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditingPhone, setIsEditingPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("KDgmail.com");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("+91 9932283374");
    const [imagePreview, setImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("/login.png");
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [adminDetails, setAdminDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Loader state
    const [bannerImg, setBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // ---- Change password modals ----
    const [showOtpModal, setShowOtpModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showVerifyOtpModal, setShowVerifyOtpModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showNewPassModal, setShowNewPassModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [otp, setOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newPassword, setNewPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [load, setLoad] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [refresh, setRefresh] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function refreshFun() {
        setRefresh((prev)=>!prev);
    }
    async function getAdminDetails() {
        try {
            const response = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].admin.getadmindetail), {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                }
            });
            const banner = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].admin.getadminBanner));
            const resp = await banner.json();
            if (resp.success) {
                setBanner(resp === null || resp === void 0 ? void 0 : resp.data);
            }
            const result = await response.json();
            if (result === null || result === void 0 ? void 0 : result.success) {
                var _result_data, _result_data1;
                setAdminDetails(result);
                setPhone(result === null || result === void 0 ? void 0 : (_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.phone);
                setEmail(result === null || result === void 0 ? void 0 : (_result_data1 = result.data) === null || _result_data1 === void 0 ? void 0 : _result_data1.email);
            } else {
                console.error("result", result);
            }
        } catch (err) {
            console.error("get admin error", err);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserProfileAndAccount.useEffect": ()=>{
            getAdminDetails();
        }
    }["UserProfileAndAccount.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserProfileAndAccount.useEffect": ()=>{
            getAdminDetails();
        }
    }["UserProfileAndAccount.useEffect"], [
        refresh
    ]);
    // --- Image Upload ---
    const handleImageChange = async (e)=>{
        const file = e.target.files[0];
        if (!file) return;
        setImagePreview(URL.createObjectURL(file));
        setSelectedImage(file);
        setIsUploading(true);
        const formData = new FormData();
        formData.append("image", file);
        try {
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].admin.updatePRofule), {
                method: "PUT",
                headers: {
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                },
                body: formData
            });
            const data = await res.json();
            if (data === null || data === void 0 ? void 0 : data.success) {
                getAdminDetails();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Profile updated");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(data === null || data === void 0 ? void 0 : data.message);
            }
        } catch (error) {
            console.error("Error uploading image:", error);
        } finally{
            setIsUploading(false);
        }
    };
    // async function handleAdminBackground(e) {
    //   try {
    //     const file = e.target.files[0];
    //     if (!file) return;
    //     const formData = new FormData();
    //     formData.append("image", file);
    //     const res = await fetch(`${API_BASE_URL}${ApiRute.admin?.adminbanner}`, {
    //       method: "POST",
    //       headers: {
    //         authorization: `Bearer ${getStroage().token}`,
    //       },
    //       body: formData,
    //     });
    //     const result = await res.json();
    //     if (result.success) {
    //       toast.success("Background updated");
    //     } else {
    //       toast.error(result?.message);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   } finally {
    //     setIsUploading(false);
    //   }
    // }
    async function updateEmailPass() {
        try {
            const payload = {
                email: email,
                phone: phone
            };
            setLoad(true);
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].admin.updateAdmin), {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                },
                body: JSON.stringify(payload)
            });
            const result = await res.json();
            if (result === null || result === void 0 ? void 0 : result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(result === null || result === void 0 ? void 0 : result.message);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result === null || result === void 0 ? void 0 : result.message);
            }
        } catch (error) {
            console.error(error);
        } finally{
            setLoad(false);
        }
    }
    // --- Change password flow ---
    async function handleRequestOtp() {
        try {
            setLoad(true);
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].admin.requestOtp), {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                },
                body: JSON.stringify({
                    phone
                })
            });
            const result = await res.json();
            if (result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("OTP sent!");
                setShowOtpModal(false);
                setShowVerifyOtpModal(true);
                setTimeout(()=>setOtp(result === null || result === void 0 ? void 0 : result.otp), 2000);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result.message || "Failed to send OTP");
            }
        } catch (err) {
            console.error(err);
        } finally{
            setLoad(false);
        }
    }
    async function handleVerifyOtp() {
        try {
            setLoad(true);
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].admin.verifyOtp), {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                },
                body: JSON.stringify({
                    phone,
                    otp
                })
            });
            const result = await res.json();
            if (result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("OTP verified!");
                setShowVerifyOtpModal(false);
                setShowNewPassModal(true);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFogetStorage"])(result);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result.message || "Invalid OTP");
            }
        } catch (err) {
            console.error(err);
        } finally{
            setLoad(false);
        }
    }
    async function handleChangePassword() {
        try {
            setLoad(true);
            const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].admin.changepassword), {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getForgetStorage"])().verifyToken)
                },
                body: JSON.stringify({
                    phone,
                    newPassword
                })
            });
            const result = await res.json();
            if (result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Password changed!");
                setShowNewPassModal(false);
                setNewPassword("");
                localStorage.removeItem("token");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result.message || "Failed to change password");
            }
        } catch (err) {
            console.error(err);
        } finally{
            setLoad(false);
        }
    }
    // backup
    async function backup() {
        try {
            setLoad(true);
            setProgress(0);
            setShowProgress(true);
            // Start simulated progress until backend finishes
            let interval = setInterval(()=>{
                setProgress((p)=>{
                    if (p >= 95) return 95; // stop auto-progress near completion
                    return p + 5;
                });
            }, 300);
            const backupResponse = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].admin.backup), {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
                }
            });
            const backupResult = await backupResponse.json();
            clearInterval(interval);
            setProgress(100);
            if (backupResult.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Backup completed successfully!");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Backup failed!");
            }
            setTimeout(()=>{
                setShowProgress(false);
                setProgress(0);
            }, 1000);
        } catch (error) {
            console.error(error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Backup failed due to server error");
            setShowProgress(false);
        } finally{
            setLoad(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: adminDetails === null || adminDetails === void 0 ? void 0 : (_adminDetails_data = adminDetails.data) === null || _adminDetails_data === void 0 ? void 0 : _adminDetails_data.image
            }, void 0, false, {
                fileName: "[project]/src/app/profilePage/page.js",
                lineNumber: 306,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen p-8",
                style: {
                    backgroundColor: lightModeEnabled ? "white" : "black"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row  justify-between w-full max-w-6xl mx-auto overflow-hidden gap-4 p-5 ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col w-sm  items-center rounded-2xl p-4 border border-gray-300 shadow-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-purple-500 bg-white flex items-center justify-center",
                                    children: [
                                        (adminDetails === null || adminDetails === void 0 ? void 0 : (_adminDetails_data1 = adminDetails.data) === null || _adminDetails_data1 === void 0 ? void 0 : _adminDetails_data1.image) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: adminDetails === null || adminDetails === void 0 ? void 0 : (_adminDetails_data2 = adminDetails.data) === null || _adminDetails_data2 === void 0 ? void 0 : _adminDetails_data2.image,
                                            alt: "Profile",
                                            fill: true,
                                            sizes: "160px",
                                            className: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profilePage/page.js",
                                            lineNumber: 319,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/login.png",
                                            alt: "Default Profile",
                                            fill: true,
                                            sizes: "160px",
                                            className: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profilePage/page.js",
                                            lineNumber: 327,
                                            columnNumber: 17
                                        }, this),
                                        isUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/profilePage/page.js",
                                                lineNumber: 337,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profilePage/page.js",
                                            lineNumber: 336,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profilePage/page.js",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "cursor-pointer flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-full mb-6 hover:bg-blue-600 transition-colors text-sm font-medium shadow-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCloudUploadAlt"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profilePage/page.js",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Upload Photo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profilePage/page.js",
                                            lineNumber: 344,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: "image/*",
                                            onChange: handleImageChange,
                                            hidden: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profilePage/page.js",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profilePage/page.js",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full  flex flex-col items-center gap-2",
                                    style: {
                                        color: lightModeEnabled ? "black" : "white"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold mb-1",
                                            children: adminDetails === null || adminDetails === void 0 ? void 0 : (_adminDetails_data3 = adminDetails.data) === null || _adminDetails_data3 === void 0 ? void 0 : _adminDetails_data3.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profilePage/page.js",
                                            lineNumber: 368,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2  mb-1 justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {
                                                        className: "w-4 h-4 "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/profilePage/page.js",
                                                        lineNumber: 373,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/profilePage/page.js",
                                                        lineNumber: 374,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/profilePage/page.js",
                                                lineNumber: 372,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profilePage/page.js",
                                            lineNumber: 371,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            onClick: ()=>setShowOtpModal(true),
                                            className: "flex items-center space-x-2  hover:text-blue-500 cursor-pointer justify-center transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLock"], {
                                                        className: "w-4 h-4 "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/profilePage/page.js",
                                                        lineNumber: 383,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-center",
                                                        children: "Change Password"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/profilePage/page.js",
                                                        lineNumber: 384,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/profilePage/page.js",
                                                lineNumber: 382,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profilePage/page.js",
                                            lineNumber: 378,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profilePage/page.js",
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/profilePage/page.js",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 md:p-12  md:w-2/3 border border-gray-300 rounded-xl shadow-lg space-y-6",
                            style: {
                                backgroundColor: lightModeEnabled ? "white" : "black",
                                color: lightModeEnabled ? "black" : "white"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold mb-8 ",
                                    children: "Account Settings"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/profilePage/page.js",
                                    lineNumber: 400,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row items-start md:items-center mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "w-full md:w-48  font-semibold mb-2 md:mb-0",
                                            children: "Update E-mail:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profilePage/page.js",
                                            lineNumber: 404,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex-1 w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    value: email,
                                                    readOnly: !isEditingEmail,
                                                    onChange: (e)=>setEmail(e.target.value),
                                                    className: "w-full border rounded-md py-2 px-4 focus:outline-none pr-12 transition-all duration-300\n                    ".concat(isEditingEmail ? "border-blue-500 ring-2 ring-blue-500" : "border-gray-300", "\n                    ").concat(lightModeEnabled ? "placeholder:text-black text-black bg-white" : "placeholder:text-white text-white bg-black", "\n                  ")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profilePage/page.js",
                                                    lineNumber: 408,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsEditingEmail(!isEditingEmail),
                                                    className: "absolute right-3 top-1/2 -translate-y-1/2  hover:text-blue-500 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEdit"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/profilePage/page.js",
                                                        lineNumber: 430,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profilePage/page.js",
                                                    lineNumber: 426,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/profilePage/page.js",
                                            lineNumber: 407,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profilePage/page.js",
                                    lineNumber: 403,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row items-start md:items-center mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "w-full md:w-48  font-semibold mb-2 md:mb-0",
                                            children: "Update Mobile No:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profilePage/page.js",
                                            lineNumber: 437,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex-1 w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: phone,
                                                    readOnly: !isEditingPhone,
                                                    onChange: (e)=>setPhone(e.target.value),
                                                    className: "w-full border rounded-md py-2 px-4 focus:outline-none pr-12 transition-all duration-300\n                    ".concat(isEditingPhone ? "border-blue-500 ring-2 ring-blue-500" : "border-gray-300", "\n                    ").concat(lightModeEnabled ? "placeholder:text-black text-black bg-white" : "placeholder:text-white text-white bg-black", "\n                  ")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profilePage/page.js",
                                                    lineNumber: 441,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsEditingPhone(!isEditingPhone),
                                                    className: "absolute right-3 top-1/2 -translate-y-1/2  hover:text-blue-500 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEdit"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/profilePage/page.js",
                                                        lineNumber: 463,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profilePage/page.js",
                                                    lineNumber: 459,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/profilePage/page.js",
                                            lineNumber: 440,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profilePage/page.js",
                                    lineNumber: 436,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                    className: "my-8 border-gray-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/profilePage/page.js",
                                    lineNumber: 468,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: updateEmailPass,
                                            className: "px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md",
                                            children: load ? "Saving...." : "Save Changes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profilePage/page.js",
                                            lineNumber: 494,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: backup,
                                            className: "px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md",
                                            children: "Backup"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profilePage/page.js",
                                            lineNumber: 500,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profilePage/page.js",
                                    lineNumber: 493,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/profilePage/page.js",
                            lineNumber: 393,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/profilePage/page.js",
                    lineNumber: 314,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/profilePage/page.js",
                lineNumber: 308,
                columnNumber: 7
            }, this),
            showProgress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-gray-200 rounded-full h-4 mt-4 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-green-500 h-4 text-xs text-white text-center transition-all duration-300",
                    style: {
                        width: "".concat(progress, "%")
                    },
                    children: [
                        progress,
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/profilePage/page.js",
                    lineNumber: 512,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/profilePage/page.js",
                lineNumber: 511,
                columnNumber: 9
            }, this),
            showOtpModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-xl w-96 shadow-lg relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdCancel"], {
                            className: "absolute text-[20px] bg-black text-white rounded-2xl cursor-pointer right-[-10] top-[-5]",
                            onClick: ()=>setShowOtpModal(false)
                        }, void 0, false, {
                            fileName: "[project]/src/app/profilePage/page.js",
                            lineNumber: 524,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold mb-4",
                            children: "Request OTP"
                        }, void 0, false, {
                            fileName: "[project]/src/app/profilePage/page.js",
                            lineNumber: 528,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: phone,
                            readOnly: true,
                            className: "w-full border px-3 py-2 mb-4 rounded"
                        }, void 0, false, {
                            fileName: "[project]/src/app/profilePage/page.js",
                            lineNumber: 529,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleRequestOtp,
                            className: "w-full bg-blue-600 text-white py-2 rounded",
                            children: load ? "Wait.." : "Send OTP"
                        }, void 0, false, {
                            fileName: "[project]/src/app/profilePage/page.js",
                            lineNumber: 535,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/profilePage/page.js",
                    lineNumber: 523,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/profilePage/page.js",
                lineNumber: 522,
                columnNumber: 9
            }, this),
            showVerifyOtpModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-xl w-96 shadow-lg relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdCancel"], {
                            className: "absolute text-[20px] bg-black text-white rounded-2xl cursor-pointer right-[-10] top-[-5]",
                            onClick: ()=>setShowVerifyOtpModal(false)
                        }, void 0, false, {
                            fileName: "[project]/src/app/profilePage/page.js",
                            lineNumber: 549,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold mb-4",
                            children: "Verify OTP"
                        }, void 0, false, {
                            fileName: "[project]/src/app/profilePage/page.js",
                            lineNumber: 553,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: phone,
                            readOnly: true,
                            className: "w-full border px-3 py-2 mb-4 rounded"
                        }, void 0, false, {
                            fileName: "[project]/src/app/profilePage/page.js",
                            lineNumber: 554,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Enter OTP",
                            onChange: (e)=>setOtp(e.target.value),
                            value: otp,
                            className: "w-full border px-3 py-2 mb-4 rounded"
                        }, void 0, false, {
                            fileName: "[project]/src/app/profilePage/page.js",
                            lineNumber: 560,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleVerifyOtp,
                            className: "w-full bg-green-600 text-white py-2 rounded",
                            children: load ? "Wait..." : " Verify OTP"
                        }, void 0, false, {
                            fileName: "[project]/src/app/profilePage/page.js",
                            lineNumber: 567,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/profilePage/page.js",
                    lineNumber: 548,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/profilePage/page.js",
                lineNumber: 547,
                columnNumber: 9
            }, this),
            showNewPassModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-xl w-96 shadow-lg relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdCancel"], {
                            className: "absolute text-[20px] bg-black text-white rounded-2xl cursor-pointer right-[-10] top-[-5]",
                            onClick: ()=>setShowNewPassModal(false)
                        }, void 0, false, {
                            fileName: "[project]/src/app/profilePage/page.js",
                            lineNumber: 581,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold mb-4",
                            children: "Set New Password"
                        }, void 0, false, {
                            fileName: "[project]/src/app/profilePage/page.js",
                            lineNumber: 585,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            placeholder: "Enter New Password",
                            value: newPassword,
                            onChange: (e)=>setNewPassword(e.target.value),
                            className: "w-full border px-3 py-2 mb-4 rounded"
                        }, void 0, false, {
                            fileName: "[project]/src/app/profilePage/page.js",
                            lineNumber: 586,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleChangePassword,
                            className: "w-full bg-purple-600 text-white py-2 rounded",
                            children: load ? "wait..." : " Change Password"
                        }, void 0, false, {
                            fileName: "[project]/src/app/profilePage/page.js",
                            lineNumber: 593,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/profilePage/page.js",
                    lineNumber: 580,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/profilePage/page.js",
                lineNumber: 579,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/profilePage/page.js",
        lineNumber: 305,
        columnNumber: 5
    }, this);
} // "use client";
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
 //   const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
 //   const [showOtpModal, setShowOtpModal] = useState(false);
 //   const [lightModeEnabled, setLightModeEnabled] = useState(true);
 //   const [isEditingEmail, setIsEditingEmail] = useState(false);
 //   const [isEditingPhone, setIsEditingPhone] = useState(false);
 //   const [email, setEmail] = useState("KDgmail.com");
 //   const [phone, setPhone] = useState("+91 9932283374");
 //   const [imagePreview, setImagePreview] = useState("/login.png");
 //   const [selectedImage, setSelectedImage] = useState(null);
 //   const [adminDetails, setAdminDetails] = useState("");
 //   const [isUploading, setIsUploading] = useState(false);
 //   const [bannerImg, setBanner] = useState([]);
 //   const [load, setLoad] = useState(false);
 //   const [refresh, setRefresh] = useState(false);
 //   setShowOtpModal;
 //   // ✅ Progress Bar States
 //   const [showProgress, setShowProgress] = useState(false);
 //   const [progress, setProgress] = useState(0);
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
 //   // --- Update Email/Phone ---
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
 //   // ✅ --- Backup Function with Progress Bar ---
 //   async function backup() {
 //     try {
 //       setLoad(true);
 //       setProgress(0);
 //       setShowProgress(true);
 //       // fake progress until API returns
 //       let interval = setInterval(() => {
 //         setProgress((p) => {
 //           if (p >= 95) return 95;
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
 //       }, 1500);
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
 //                   sizes="160px"
 //                   className="object-contain"
 //                 />
 //               ) : (
 //                 <Image
 //                   src="/login.png"
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
 //           {/* Right Section */}
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
 //                     }`}
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
 //                     }`}
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
 //             {/* Buttons */}
 //             <div className="flex flex-col items-end space-y-3">
 //               <div className="flex justify-end space-x-4">
 //                 <button
 //                   onClick={updateEmailPass}
 //                   className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md"
 //                 >
 //                   {load ? "Saving..." : "Save Changes"}
 //                 </button>
 //                 <button
 //                   onClick={backup}
 //                   className="px-6 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-colors shadow-md"
 //                 >
 //                   Backup
 //                 </button>
 //               </div>
 //               {/* ✅ Progress Bar */}
 //               {showProgress && (
 //                 <div className="w-full bg-gray-200 rounded-full h-4 mt-4 overflow-hidden">
 //                   <div
 //                     className="bg-green-500 h-4 text-xs text-white text-center transition-all duration-300"
 //                     style={{ width: `${progress}%` }}
 //                   >
 //                     {progress}%
 //                   </div>
 //                 </div>
 //               )}
 //             </div>
 //           </div>
 //         </div>
 //       </div>
 //     </div>
 //   );
 // }
_s(UserProfileAndAccount, "H9QzFWMzZ84aOcCiJ78a9uf2yew=");
_c = UserProfileAndAccount;
var _c;
__turbopack_context__.k.register(_c, "UserProfileAndAccount");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_5556f71c._.js.map