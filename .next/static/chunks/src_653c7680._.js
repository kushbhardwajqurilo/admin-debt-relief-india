(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/url/BaseURL.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// export const API_BASE_URL = "https://dri-vercel.vercel.app/api/v1";
// export const API_BASE_URL = "https://4frnn03l-5000.inc1.devtunnels.ms/api/v1";
__turbopack_context__.s({
    "API_BASE_URL": ()=>API_BASE_URL
});
const API_BASE_URL = "https://api.debtreliefindia.com/api/v1";
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
        adminbanner: "/banner/admindashboardbanner",
        loginbanner: "/banner/logindashboardbanner",
        updateAdmin: "/admin/update-details",
        getadminBanner: "/admin/getadminBanner",
        requestOtp: "/admin/request-otp",
        verifyOtp: "/admin/verify-otp",
        changepassword: "/admin/change-password"
    },
    currentImage: {
        upload: "/banner/upload",
        getbanner: "/banner",
        delete: "/banner/delete",
        recentCard: "/banner/all",
        addrecentCart: "/banner/bannertext",
        update: "/banner/update",
        addWithTitle: "/banner/bannertext"
    },
    advocate: {
        add: "/advocate/add",
        getAll: "/advocate/all",
        single: "/advocate/single"
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
        addUser: "/driuser"
    },
    adminProfileImage: "/admin/adminProfileBanner",
    emi: {
        upload: "/emi/create-emi",
        mannual: "/emi/manual",
        markaspaid: "/emi/mark-as-paid"
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
        getbanks: "/admin/get-banks"
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
        add: "/subcription/add-subscription"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/url/storage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/userController/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ReviewAssignModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/BaseURL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/url/ApiRoute.js [app-client] (ecmascript)");
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
function ReviewAssignModal(param) {
    let { isOpen, onClose, userData, onAssignSubmit } = param;
    var _userData_pdf, _userData_image;
    _s();
    const [selectedAdvocate, setSelectedAdvocate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [advocte, setAdvocate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [assignedId, setAssignedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [previewImage, setPreviewImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // image preview state
    const getAdvocates = async ()=>{
        const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].advocate.getAll), {
            method: "GET",
            headers: {
                "content-type": "application/json",
                authorization: "Bearer ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroage"])().token)
            }
        });
        const result = await res.json();
        if (!result.success) throw new Error("Failed to fetch advocates");
        setAdvocate(result === null || result === void 0 ? void 0 : result.data);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReviewAssignModal.useEffect": ()=>{
            if (userData === null || userData === void 0 ? void 0 : userData.assignedId) {
                setAssignedId(userData.assignedId);
            }
            getAdvocates();
        }
    }["ReviewAssignModal.useEffect"], [
        userData === null || userData === void 0 ? void 0 : userData.assignedId
    ]);
    if (!isOpen || !userData) return null;
    const handleApproveAssign = async ()=>{
        const updatedUser = {
            ...userData,
            assignedId,
            assignedAdvocate: selectedAdvocate
        };
        const payload = {
            kycId: updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser._id,
            advocate_id: updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.assignedAdvocate._id,
            assign_id: assignedId
        };
        const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$BaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$url$2f$ApiRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiRute"].kyc.approve), {
            method: "POST",
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
        setTimeout(()=>{
            onClose();
        }, 300);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 backdrop-blur-sm bg-white/30 z-50 flex items-center justify-center px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl w-full max-w-5xl shadow-lg relative p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute top-3 right-4 text-xl text-gray-500 hover:text-gray-800",
                            onClick: onClose,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/app/userController/page.js",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-1/3 border p-4 rounded-lg shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "".concat(userData.profile || "/user1.jpg"),
                                                    width: 80,
                                                    height: 80,
                                                    alt: "User",
                                                    className: "rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/userController/page.js",
                                                    lineNumber: 90,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "mt-3 text-xl font-bold text-[#00479C]",
                                                    children: userData.name || "User Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/userController/page.js",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/userController/page.js",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 text-sm space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium whitespace-nowrap",
                                                            children: "Assign ID:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/userController/page.js",
                                                            lineNumber: 103,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            className: "border border-gray-300 rounded px-3 py-1 w-[130px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-400",
                                                            value: assignedId,
                                                            onChange: (e)=>setAssignedId(e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/userController/page.js",
                                                            lineNumber: 106,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/userController/page.js",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Gender:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/userController/page.js",
                                                            lineNumber: 114,
                                                            columnNumber: 19
                                                        }, this),
                                                        " ",
                                                        userData.gender
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/userController/page.js",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Joining Date:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/userController/page.js",
                                                            lineNumber: 117,
                                                            columnNumber: 19
                                                        }, this),
                                                        " ",
                                                        userData.date
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/userController/page.js",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Phone:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/userController/page.js",
                                                            lineNumber: 120,
                                                            columnNumber: 19
                                                        }, this),
                                                        " ",
                                                        userData.user_id.phone
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/userController/page.js",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Email:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/userController/page.js",
                                                            lineNumber: 123,
                                                            columnNumber: 19
                                                        }, this),
                                                        " ",
                                                        userData.email
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/userController/page.js",
                                                    lineNumber: 122,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "PDF:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/userController/page.js",
                                                            lineNumber: 126,
                                                            columnNumber: 19
                                                        }, this),
                                                        userData === null || userData === void 0 ? void 0 : (_userData_pdf = userData.pdf) === null || _userData_pdf === void 0 ? void 0 : _userData_pdf.map((pdf, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-[55px] text-center text-blue-700 font-bold underline bg-amber-100 p-1  ml-2",
                                                                children: [
                                                                    " ",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "".concat(pdf),
                                                                        children: "PDF".concat(idx + 1)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/userController/page.js",
                                                                        lineNumber: 133,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/src/app/userController/page.js",
                                                                lineNumber: 128,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/userController/page.js",
                                                    lineNumber: 125,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/userController/page.js",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/userController/page.js",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-1/3 flex flex-col justify-around gap-4 max-h-[350px] overflow-auto",
                                    children: userData === null || userData === void 0 ? void 0 : (_userData_image = userData.image) === null || _userData_image === void 0 ? void 0 : _userData_image.map((e, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border rounded-lg p-3 shadow cursor-pointer",
                                            onClick: ()=>setPreviewImage(e),
                                            children: [
                                                console.log("image", e),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: e,
                                                    alt: "KYC-".concat(idx),
                                                    width: 300,
                                                    height: 100,
                                                    className: "rounded-md"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/userController/page.js",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-center text-xs mt-1",
                                                    children: e === null || e === void 0 ? void 0 : e.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/userController/page.js",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/app/userController/page.js",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/userController/page.js",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-1/3 border rounded-lg shadow p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold",
                                                    children: "Assign Advocate"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/userController/page.js",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronDown"], {}, void 0, false, {
                                                    fileName: "[project]/src/app/userController/page.js",
                                                    lineNumber: 165,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/userController/page.js",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 max-h-60 overflow-y-auto pr-1",
                                            children: advocte.map((adv, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setSelectedAdvocate(adv),
                                                    className: "flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-gray-100 transition ".concat((selectedAdvocate === null || selectedAdvocate === void 0 ? void 0 : selectedAdvocate.name) === (adv === null || adv === void 0 ? void 0 : adv.name) ? "bg-blue-100" : ""),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "".concat(adv === null || adv === void 0 ? void 0 : adv.advocateImage),
                                                            width: 40,
                                                            height: 40,
                                                            alt: adv === null || adv === void 0 ? void 0 : adv.name,
                                                            className: "rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/userController/page.js",
                                                            lineNumber: 176,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium",
                                                                    children: adv === null || adv === void 0 ? void 0 : adv.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/userController/page.js",
                                                                    lineNumber: 184,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: [
                                                                        adv === null || adv === void 0 ? void 0 : adv.contactNumber,
                                                                        " / ",
                                                                        adv === null || adv === void 0 ? void 0 : adv.gender
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/userController/page.js",
                                                                    lineNumber: 185,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/userController/page.js",
                                                            lineNumber: 183,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/app/userController/page.js",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/userController/page.js",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/userController/page.js",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/userController/page.js",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleApproveAssign,
                                className: "bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:scale-105 transition",
                                children: "Approve & Assign"
                            }, void 0, false, {
                                fileName: "[project]/src/app/userController/page.js",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/userController/page.js",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/userController/page.js",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/userController/page.js",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            previewImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 backdrop-blur-2xl bg-opacity-70 flex items-center justify-center z-[60]",
                onClick: ()=>setPreviewImage(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-3xl max-h-[90vh] p-4",
                    onClick: (e)=>e.stopPropagation(),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: previewImage,
                        alt: "Preview",
                        width: 800,
                        height: 600,
                        className: "rounded-lg max-h-[80vh] object-contain"
                    }, void 0, false, {
                        fileName: "[project]/src/app/userController/page.js",
                        lineNumber: 223,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/userController/page.js",
                    lineNumber: 213,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/userController/page.js",
                lineNumber: 209,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(ReviewAssignModal, "PQB419s9zxn8HZQO7TfDC2VvTb0=");
_c = ReviewAssignModal;
var _c;
__turbopack_context__.k.register(_c, "ReviewAssignModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_653c7680._.js.map