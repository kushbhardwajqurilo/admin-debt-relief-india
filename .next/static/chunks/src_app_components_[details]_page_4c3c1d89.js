(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/[details]/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>UserDashboard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
function UserDashboard() {
    _s();
    const { details } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const [subscriptionTab, setSubscriptionTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("current");
    const [serviceTab, setServiceTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("current");
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "Kush Qurilo",
        email: "kush@example.com",
        // Subscriptions
        paidSubscriptions: [
            {
                paidForMonth: "October 2025",
                paidForDueDate: "2025-10-31",
                amount: 1000,
                gst: 18,
                totalAmount: 1180,
                status: "paid"
            },
            {
                paidForMonth: "September 2025",
                paidForDueDate: "2025-09-30",
                amount: 1500,
                gst: 18,
                totalAmount: 1770,
                status: "paid"
            }
        ],
        unpaidSubscriptions: [
            {
                paidForMonth: "November 2025",
                paidForDueDate: "2025-11-30",
                amount: 1200,
                gst: 18,
                totalAmount: 1416,
                status: "pending"
            }
        ],
        // Services
        paidServices: [
            {
                paidForMonth: "October 2025",
                emiNumber: 1,
                emiAmount: 299,
                dueDate: "2025-10-25",
                status: "paid"
            },
            {
                paidForMonth: "September 2025",
                emiNumber: 2,
                emiAmount: 199,
                dueDate: "2025-10-20",
                status: "paid"
            }
        ],
        unpaidServices: [
            {
                paidForMonth: "November 2025",
                emiNumber: 1,
                emiAmount: 250,
                dueDate: "2025-11-30",
                status: "pending"
            },
            {
                paidForMonth: "December 2025",
                emiNumber: 1,
                emiAmount: 300,
                dueDate: "2025-12-15",
                status: "pending"
            }
        ]
    });
    const subscriptionsToShow = subscriptionTab === "paid" ? user.paidSubscriptions : user.unpaidSubscriptions;
    const servicesToShow = serviceTab === "paid" ? user.paidServices : user.unpaidServices;
    // ✅ Status badge class
    const getStatusClass = (status)=>{
        if (status === "paid") return "bg-green-100 text-green-600";
        if (status === "pending") return "bg-yellow-100 text-yellow-600";
        return "bg-gray-200 text-gray-500";
    };
    // ✅ Check payment API for pending subscriptions
    const checkPayment = async (subIndex)=>{
        try {
            const res = await fetch("/api/checkPayment?month=".concat(user.unpaidSubscriptions[subIndex].paidForMonth));
            const data = await res.json();
            if (data.status === "paid") {
                const updatedPaid = [
                    ...user.paidSubscriptions,
                    {
                        ...user.unpaidSubscriptions[subIndex],
                        status: "paid"
                    }
                ];
                const updatedUnpaid = user.unpaidSubscriptions.filter((_, idx)=>idx !== subIndex);
                setUser({
                    ...user,
                    paidSubscriptions: updatedPaid,
                    unpaidSubscriptions: updatedUnpaid
                });
                alert("Subscription for ".concat(data.paidForMonth, " is now PAID."));
            } else {
                alert("Subscription for ".concat(user.unpaidSubscriptions[subIndex].paidForMonth, " is still PENDING."));
            }
        } catch (err) {
            console.error(err);
            alert("Error checking payment. Try again.");
        }
    };
    // ✅ Mark subscription as paid manually
    const markAsPaid = (subIndex)=>{
        const updatedPaid = [
            ...user.paidSubscriptions,
            {
                ...user.unpaidSubscriptions[subIndex],
                status: "paid"
            }
        ];
        const updatedUnpaid = user.unpaidSubscriptions.filter((_, idx)=>idx !== subIndex);
        setUser({
            ...user,
            paidSubscriptions: updatedPaid,
            unpaidSubscriptions: updatedUnpaid
        });
        alert("Subscription for ".concat(user.unpaidSubscriptions[subIndex].paidForMonth, " marked as PAID."));
    };
    // ✅ Mark service as paid manually
    const checkServicePayment = (svcIndex)=>{
        const updatedPaid = [
            ...user.paidServices,
            {
                ...user.unpaidServices[svcIndex],
                status: "paid"
            }
        ];
        const updatedUnpaid = user.unpaidServices.filter((_, idx)=>idx !== svcIndex);
        setUser({
            ...user,
            paidServices: updatedPaid,
            unpaidServices: updatedUnpaid
        });
        alert("Service for ".concat(user.unpaidServices[svcIndex].paidForMonth, " marked as PAID."));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserDashboard.useEffect": ()=>{}
    }["UserDashboard.useEffect"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-800",
                        children: user.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/[details]/page.js",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500",
                        children: user.email
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/[details]/page.js",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/[details]/page.js",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-gray-800",
                        children: "Monthly Subscriptions"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/[details]/page.js",
                        lineNumber: 182,
                        columnNumber: 9
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
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "cursor-pointer px-4 py-2 ".concat(subscriptionTab === "paid" ? "border-b-2 border-blue-600 font-semibold text-blue-600" : "text-gray-500 hover:text-blue-600"),
                                onClick: ()=>setSubscriptionTab("paid"),
                                children: "Paid"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/[details]/page.js",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/[details]/page.js",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-96 overflow-y-auto space-y-3 pr-2 border rounded-xl p-4 bg-gray-50",
                        children: subscriptionsToShow.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-sm",
                            children: "No subscriptions found."
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/[details]/page.js",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this) : subscriptionsToShow.map((sub, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border rounded-xl bg-white hover:bg-gray-100 transition relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute top-4 right-4 text-sm font-medium px-3 py-1 rounded-full ".concat(getStatusClass(sub.status)),
                                        children: sub.status.toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/[details]/page.js",
                                        lineNumber: 220,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-gray-800",
                                                children: sub.paidForMonth
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                lineNumber: 230,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500",
                                                children: [
                                                    "Due Date: ",
                                                    formatDate(sub.paidForDueDate)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                lineNumber: 233,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/[details]/page.js",
                                        lineNumber: 229,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Amount: ₹",
                                                    sub.amount
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                lineNumber: 238,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "GST :",
                                                    sub.gst,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                lineNumber: 239,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Total: ₹",
                                                    sub.totalAmount
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                lineNumber: 240,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/[details]/page.js",
                                        lineNumber: 237,
                                        columnNumber: 17
                                    }, this),
                                    sub.status === "pending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>markAsPaid(index),
                                        className: "absolute bottom-4 right-4 px-3 py-1 bg-blue-600 text-white rounded hover:bg-green-700 transition text-sm",
                                        children: "Mark as Paid"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/[details]/page.js",
                                        lineNumber: 245,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/components/[details]/page.js",
                                lineNumber: 215,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/[details]/page.js",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/[details]/page.js",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold mb-3 text-gray-800",
                        children: "Services"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/[details]/page.js",
                        lineNumber: 260,
                        columnNumber: 9
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
                                lineNumber: 263,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "cursor-pointer px-4 py-2 ".concat(serviceTab === "paid" ? "border-b-2 border-blue-600 font-semibold text-blue-600" : "text-gray-500 hover:text-blue-600"),
                                onClick: ()=>setServiceTab("paid"),
                                children: "Paid"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/[details]/page.js",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/[details]/page.js",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-96 overflow-y-auto space-y-3 pr-2 border rounded-xl p-4 bg-gray-50",
                        children: servicesToShow.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-sm",
                            children: "No services found."
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/[details]/page.js",
                            lineNumber: 288,
                            columnNumber: 13
                        }, this) : servicesToShow.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border rounded-xl bg-white hover:bg-gray-100 transition relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute top-4 right-4 text-sm font-medium px-3 py-1 rounded-full ".concat(getStatusClass(service.status)),
                                        children: service.status.toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/[details]/page.js",
                                        lineNumber: 296,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-gray-800",
                                                children: service.paidForMonth
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                lineNumber: 306,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500",
                                                children: [
                                                    "EMI Number: ",
                                                    service.emiNumber
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                lineNumber: 309,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/[details]/page.js",
                                        lineNumber: 305,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "EMI Amount: ₹",
                                                    service.emiAmount
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                lineNumber: 314,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Due Date: ",
                                                    formatDate(service.dueDate)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/[details]/page.js",
                                                lineNumber: 315,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/[details]/page.js",
                                        lineNumber: 313,
                                        columnNumber: 17
                                    }, this),
                                    service.status === "pending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>checkServicePayment(index),
                                        className: "absolute bottom-4 right-4 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm",
                                        children: "Mark as Paid"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/[details]/page.js",
                                        lineNumber: 320,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/components/[details]/page.js",
                                lineNumber: 291,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/[details]/page.js",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/[details]/page.js",
                lineNumber: 259,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/[details]/page.js",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
_s(UserDashboard, "Y2vLaL8CdJxyO2FT89BIh/B92qc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = UserDashboard;
var _c;
__turbopack_context__.k.register(_c, "UserDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_components_%5Bdetails%5D_page_4c3c1d89.js.map