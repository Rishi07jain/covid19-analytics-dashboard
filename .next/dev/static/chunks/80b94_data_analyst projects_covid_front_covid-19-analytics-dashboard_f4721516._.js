(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/stat-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatCard",
    ()=>StatCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
;
;
;
function StatCard({ label, value, color, icon }) {
    const getIcon = ()=>{
        switch(icon){
            case "chart":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/stat-card.tsx",
                    lineNumber: 15,
                    columnNumber: 16
                }, this);
            case "alert":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/stat-card.tsx",
                    lineNumber: 17,
                    columnNumber: 16
                }, this);
            case "check":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/stat-card.tsx",
                    lineNumber: 19,
                    columnNumber: 16
                }, this);
            case "activity":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/stat-card.tsx",
                    lineNumber: 21,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/stat-card.tsx",
                    lineNumber: 23,
                    columnNumber: 16
                }, this);
        }
    };
    const getBgColor = ()=>{
        if (color.includes("orange")) return "bg-orange-500/20 text-orange-400";
        if (color.includes("red")) return "bg-red-500/20 text-red-400";
        if (color.includes("green")) return "bg-green-500/20 text-green-400";
        if (color.includes("blue")) return "bg-blue-500/20 text-blue-400";
        return "bg-primary/20 text-primary";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-card border border-border p-6 hover:border-primary/50 transition-colors",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-sm font-medium",
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/stat-card.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-3xl font-bold mt-2",
                            children: value.toLocaleString()
                        }, void 0, false, {
                            fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/stat-card.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/stat-card.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `rounded-lg p-3 ${getBgColor()}`,
                    children: getIcon()
                }, void 0, false, {
                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/stat-card.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/stat-card.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/stat-card.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = StatCard;
var _c;
__turbopack_context__.k.register(_c, "StatCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/lib/chart-colors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Recharts cannot resolve CSS variables, so we need actual color values
__turbopack_context__.s([
    "CHART_COLORS",
    ()=>CHART_COLORS,
    "LINE_COLORS",
    ()=>LINE_COLORS,
    "getLineColor",
    ()=>getLineColor
]);
const CHART_COLORS = {
    // Primary colors for charts
    orange: "#f97316",
    red: "#ef4444",
    green: "#22c55e",
    blue: "#3b82f6",
    purple: "#8b5cf6",
    yellow: "#eab308",
    cyan: "#06b6d4",
    pink: "#ec4899",
    // Chart line colors (vibrant, high contrast)
    chart1: "#f97316",
    chart2: "#ef4444",
    chart3: "#22c55e",
    chart4: "#3b82f6",
    chart5: "#8b5cf6",
    // UI colors
    border: "#525252",
    muted: "#a3a3a3",
    background: "#262626",
    card: "#404040",
    foreground: "#f5f5f5",
    // Gradients for heatmaps
    heatmapLow: "#22c55e",
    heatmapMid: "#eab308",
    heatmapHigh: "#ef4444"
};
const LINE_COLORS = [
    "#f97316",
    "#3b82f6",
    "#22c55e",
    "#8b5cf6",
    "#ec4899",
    "#06b6d4",
    "#eab308",
    "#ef4444"
];
function getLineColor(index) {
    return LINE_COLORS[index % LINE_COLORS.length];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChoroplethMap",
    ()=>ChoroplethMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ScatterChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/recharts/es6/chart/ScatterChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/recharts/es6/cartesian/Scatter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/lib/chart-colors.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ChoroplethMap({ data, onCountrySelect }) {
    _s();
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cases");
    const processedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChoroplethMap.useMemo[processedData]": ()=>{
            return Object.entries(data).filter({
                "ChoroplethMap.useMemo[processedData]": ([_, country])=>country.latest && country.latest.confirmed > 0
            }["ChoroplethMap.useMemo[processedData]"]).map({
                "ChoroplethMap.useMemo[processedData]": ([name, country])=>({
                        name,
                        confirmed: country.latest?.confirmed || 0,
                        deaths: country.latest?.deaths || 0,
                        recovered: country.latest?.recovered || 0,
                        active: country.latest?.active || 0,
                        lat: country.lat,
                        lon: country.lon,
                        continent: country.continent || "Unknown"
                    })
            }["ChoroplethMap.useMemo[processedData]"]).sort({
                "ChoroplethMap.useMemo[processedData]": (a, b)=>{
                    if (sortBy === "cases") return b.confirmed - a.confirmed;
                    if (sortBy === "deaths") return b.deaths - a.deaths;
                    return 0;
                }
            }["ChoroplethMap.useMemo[processedData]"]).slice(0, 30);
        }
    }["ChoroplethMap.useMemo[processedData]"], [
        data,
        sortBy
    ]);
    const continentData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChoroplethMap.useMemo[continentData]": ()=>{
            const continents = {};
            Object.values(data).forEach({
                "ChoroplethMap.useMemo[continentData]": (country)=>{
                    if (country.latest && country.continent) {
                        if (!continents[country.continent]) {
                            continents[country.continent] = {
                                confirmed: 0,
                                deaths: 0,
                                countries: 0
                            };
                        }
                        continents[country.continent].confirmed += country.latest.confirmed;
                        continents[country.continent].deaths += country.latest.deaths;
                        continents[country.continent].countries += 1;
                    }
                }
            }["ChoroplethMap.useMemo[continentData]"]);
            return Object.entries(continents).map({
                "ChoroplethMap.useMemo[continentData]": ([name, stats])=>({
                        name,
                        ...stats
                    })
            }["ChoroplethMap.useMemo[continentData]"]).sort({
                "ChoroplethMap.useMemo[continentData]": (a, b)=>b.confirmed - a.confirmed
            }["ChoroplethMap.useMemo[continentData]"]);
        }
    }["ChoroplethMap.useMemo[continentData]"], [
        data
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-4",
                        children: "Cases by Continent"
                    }, void 0, false, {
                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-card border border-border p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: 300,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                data: continentData,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                        strokeDasharray: "3 3",
                                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].border
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                        dataKey: "name",
                                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].muted,
                                        tick: {
                                            fill: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].foreground,
                                            fontSize: 12
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].muted,
                                        tick: {
                                            fill: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].foreground,
                                            fontSize: 12
                                        },
                                        tickFormatter: (value)=>value >= 1000000 ? `${(value / 1000000).toFixed(0)}M` : value >= 1000 ? `${(value / 1000).toFixed(0)}K` : value
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        contentStyle: {
                                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].card,
                                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].border}`,
                                            borderRadius: "8px",
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].foreground
                                        },
                                        labelStyle: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].foreground,
                                            fontWeight: "bold"
                                        },
                                        formatter: (value)=>value.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                        wrapperStyle: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].foreground
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                        dataKey: "confirmed",
                                        fill: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].orange,
                                        name: "Confirmed",
                                        radius: [
                                            4,
                                            4,
                                            0,
                                            0
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                        dataKey: "deaths",
                                        fill: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].red,
                                        name: "Deaths",
                                        radius: [
                                            4,
                                            4,
                                            0,
                                            0
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold",
                                children: "Country Rankings"
                            }, void 0, false, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: sortBy,
                                    onChange: (e)=>setSortBy(e.target.value),
                                    className: "px-3 py-2 rounded-md bg-muted border border-border text-sm text-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "cases",
                                            children: "Sort by Cases"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "deaths",
                                            children: "Sort by Deaths"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-card border border-border p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-border",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-left py-3 px-4 text-muted-foreground font-medium",
                                                    children: "Rank"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-left py-3 px-4 text-muted-foreground font-medium",
                                                    children: "Country"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-right py-3 px-4 text-muted-foreground font-medium",
                                                    children: "Confirmed"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-right py-3 px-4 text-muted-foreground font-medium",
                                                    children: "Deaths"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-right py-3 px-4 text-muted-foreground font-medium",
                                                    children: "Recovered"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-right py-3 px-4 text-muted-foreground font-medium",
                                                    children: "Death Rate"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: processedData.map((country, idx)=>{
                                            const deathRate = (country.deaths / country.confirmed * 100).toFixed(1);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-b border-border hover:bg-muted/50 cursor-pointer transition-colors",
                                                onClick: ()=>onCountrySelect?.(country.name),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-4 text-muted-foreground",
                                                        children: idx + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-4 font-medium",
                                                        children: country.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "text-right py-3 px-4 text-orange-400",
                                                        children: country.confirmed.toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "text-right py-3 px-4 text-red-400",
                                                        children: country.deaths.toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "text-right py-3 px-4 text-green-400",
                                                        children: country.recovered.toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "text-right py-3 px-4",
                                                        children: [
                                                            deathRate,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, country.name, true, {
                                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                                lineNumber: 160,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-4",
                        children: "Geographic Distribution"
                    }, void 0, false, {
                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-card border border-border p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: 400,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ScatterChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScatterChart"], {
                                    margin: {
                                        top: 20,
                                        right: 20,
                                        bottom: 20,
                                        left: 20
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                            strokeDasharray: "3 3",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].border
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            dataKey: "lon",
                                            type: "number",
                                            name: "Longitude",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].muted,
                                            tick: {
                                                fill: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].foreground
                                            },
                                            domain: [
                                                -180,
                                                180
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                            dataKey: "lat",
                                            type: "number",
                                            name: "Latitude",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].muted,
                                            tick: {
                                                fill: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].foreground
                                            },
                                            domain: [
                                                -90,
                                                90
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            contentStyle: {
                                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].card,
                                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].border}`,
                                                borderRadius: "8px",
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].foreground
                                            },
                                            labelStyle: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].foreground
                                            },
                                            formatter: (value, name, props)=>{
                                                if (name === "Longitude" || name === "Latitude") return [
                                                    value.toFixed(2),
                                                    name
                                                ];
                                                return [
                                                    value.toLocaleString(),
                                                    name
                                                ];
                                            },
                                            cursor: {
                                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].orange
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scatter"], {
                                            name: "Countries",
                                            data: processedData,
                                            fill: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].orange,
                                            children: processedData.map((entry, index)=>{
                                                // Color by case severity
                                                const color = entry.confirmed > 10000000 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].red : entry.confirmed > 1000000 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].yellow : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].green;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                    fill: color
                                                }, `cell-${index}`, false, {
                                                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 26
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-6 mt-4 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-3 h-3 rounded-full",
                                                style: {
                                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].green
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                                lineNumber: 233,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "<1M cases"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                                lineNumber: 234,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-3 h-3 rounded-full",
                                                style: {
                                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].yellow
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                                lineNumber: 237,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "1M-10M cases"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                                lineNumber: 238,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-3 h-3 rounded-full",
                                                style: {
                                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$chart$2d$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_COLORS"].red
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                                lineNumber: 241,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: ">10M cases"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                                lineNumber: 242,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(ChoroplethMap, "KvmF5cJdAPn2ToO2+2p9mHhNkWs=");
_c = ChoroplethMap;
var _c;
__turbopack_context__.k.register(_c, "ChoroplethMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiveTicker",
    ()=>LiveTicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LiveTicker({ data }) {
    _s();
    const [tickerData, setTickerData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastUpdate, setLastUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveTicker.useEffect": ()=>{
            const generateTickerData = {
                "LiveTicker.useEffect.generateTickerData": ()=>{
                    const countries = Object.entries(data).filter({
                        "LiveTicker.useEffect.generateTickerData.countries": ([_, country])=>country.latest && country.latest.confirmed > 100000
                    }["LiveTicker.useEffect.generateTickerData.countries"]).map({
                        "LiveTicker.useEffect.generateTickerData.countries": ([name, country])=>{
                            const change = Math.floor(Math.random() * 10000) - 3000 // Simulated daily change
                            ;
                            return {
                                country: name,
                                confirmed: country.latest.confirmed,
                                deaths: country.latest.deaths,
                                change,
                                trend: change > 1000 ? "up" : change < -1000 ? "down" : "stable"
                            };
                        }
                    }["LiveTicker.useEffect.generateTickerData.countries"]).sort({
                        "LiveTicker.useEffect.generateTickerData.countries": (a, b)=>b.confirmed - a.confirmed
                    }["LiveTicker.useEffect.generateTickerData.countries"]).slice(0, 20);
                    setTickerData(countries);
                }
            }["LiveTicker.useEffect.generateTickerData"];
            generateTickerData();
        }
    }["LiveTicker.useEffect"], [
        data
    ]);
    const simulateRefresh = ()=>{
        setIsRefreshing(true);
        setTimeout(()=>{
            setTickerData((prev)=>prev.map((item)=>{
                    const change = Math.floor(Math.random() * 8000) - 2000;
                    return {
                        ...item,
                        confirmed: item.confirmed + Math.abs(change),
                        change,
                        trend: change > 1000 ? "up" : change < -1000 ? "down" : "stable"
                    };
                }));
            setLastUpdate(new Date());
            setIsRefreshing(false);
        }, 1000);
    };
    // Auto-refresh every 30 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveTicker.useEffect": ()=>{
            const interval = setInterval(simulateRefresh, 30000);
            return ({
                "LiveTicker.useEffect": ()=>clearInterval(interval)
            })["LiveTicker.useEffect"];
        }
    }["LiveTicker.useEffect"], []);
    const getTrendIcon = (trend)=>{
        switch(trend){
            case "up":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                    className: "w-4 h-4 text-red-400"
                }, void 0, false, {
                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                    lineNumber: 74,
                    columnNumber: 16
                }, this);
            case "down":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                    className: "w-4 h-4 text-green-400"
                }, void 0, false, {
                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                    lineNumber: 76,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                    className: "w-4 h-4 text-yellow-400"
                }, void 0, false, {
                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                    lineNumber: 78,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-913dee683edff994" + " " + "bg-card border border-border rounded-lg overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-913dee683edff994" + " " + "flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-913dee683edff994" + " " + "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-913dee683edff994" + " " + "relative flex h-2 w-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-913dee683edff994" + " " + "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-913dee683edff994" + " " + "relative inline-flex rounded-full h-2 w-2 bg-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-913dee683edff994" + " " + "text-sm font-medium",
                                children: "Live Statistics"
                            }, void 0, false, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-913dee683edff994" + " " + "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-913dee683edff994" + " " + "text-xs text-muted-foreground",
                                children: [
                                    "Updated: ",
                                    lastUpdate.toLocaleTimeString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: simulateRefresh,
                                disabled: isRefreshing,
                                className: "jsx-913dee683edff994" + " " + "p-1 hover:bg-muted rounded transition-colors disabled:opacity-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                    className: `w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-913dee683edff994" + " " + "overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-913dee683edff994" + " " + "animate-marquee flex",
                    children: [
                        ...tickerData,
                        ...tickerData
                    ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-913dee683edff994" + " " + "flex items-center gap-4 px-6 py-3 border-r border-border whitespace-nowrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-913dee683edff994" + " " + "font-medium",
                                    children: item.country
                                }, void 0, false, {
                                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-913dee683edff994" + " " + "text-orange-400",
                                    children: item.confirmed.toLocaleString()
                                }, void 0, false, {
                                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-913dee683edff994" + " " + "flex items-center gap-1",
                                    children: [
                                        getTrendIcon(item.trend),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-913dee683edff994" + " " + ((item.change > 0 ? "text-red-400 text-sm" : item.change < 0 ? "text-green-400 text-sm" : "text-yellow-400 text-sm") || ""),
                                            children: [
                                                item.change > 0 ? "+" : "",
                                                item.change.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `${item.country}-${idx}`, true, {
                            fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-913dee683edff994" + " " + "grid grid-cols-4 gap-4 px-4 py-3 border-t border-border bg-muted/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-913dee683edff994" + " " + "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-913dee683edff994" + " " + "text-xs text-muted-foreground",
                                children: "Total Tracked"
                            }, void 0, false, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-913dee683edff994" + " " + "text-lg font-bold text-orange-400",
                                children: tickerData.reduce((sum, item)=>sum + item.confirmed, 0).toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-913dee683edff994" + " " + "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-913dee683edff994" + " " + "text-xs text-muted-foreground",
                                children: "Countries"
                            }, void 0, false, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-913dee683edff994" + " " + "text-lg font-bold",
                                children: tickerData.length
                            }, void 0, false, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-913dee683edff994" + " " + "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-913dee683edff994" + " " + "text-xs text-muted-foreground",
                                children: "Rising"
                            }, void 0, false, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-913dee683edff994" + " " + "text-lg font-bold text-red-400",
                                children: tickerData.filter((i)=>i.trend === "up").length
                            }, void 0, false, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-913dee683edff994" + " " + "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-913dee683edff994" + " " + "text-xs text-muted-foreground",
                                children: "Declining"
                            }, void 0, false, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-913dee683edff994" + " " + "text-lg font-bold text-green-400",
                                children: tickerData.filter((i)=>i.trend === "down").length
                            }, void 0, false, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "913dee683edff994",
                children: "@keyframes marquee{0%{transform:translate(0)}to{transform:translate(-50%)}}.animate-marquee.jsx-913dee683edff994{animation:30s linear infinite marquee}.animate-marquee.jsx-913dee683edff994:hover{animation-play-state:paused}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(LiveTicker, "ZSusp08m0eyachlsoiy5rM10Qkg=");
_c = LiveTicker;
var _c;
__turbopack_context__.k.register(_c, "LiveTicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/lib/covid-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchCovidData",
    ()=>fetchCovidData,
    "getEmptyCovidData",
    ()=>getEmptyCovidData
]);
async function fetchCovidData() {
    try {
        const response = await fetch("/api/covid-data", {
            cache: "no-store"
        });
        if (!response.ok) {
            console.error("[v0] COVID data fetch failed with status:", response.status);
            return null;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("[v0] Fetch error:", error);
        return null;
    }
}
function getEmptyCovidData() {
    return {
        country_data: {},
        last_updated: new Date().toISOString(),
        data_source: "empty"
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalDashboard",
    ()=>GlobalDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$components$2f$stat$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/stat-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$components$2f$choropleth$2d$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/choropleth-map.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$components$2f$live$2d$ticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/live-ticker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/lucide-react/dist/esm/icons/loader.js [app-client] (ecmascript) <export default as Loader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$covid$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/lib/covid-data.ts [app-client] (ecmascript)");
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
function GlobalDashboard() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [globalStats, setGlobalStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        confirmed: 0,
        deaths: 0,
        recovered: 0,
        active: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalDashboard.useEffect": ()=>{
            const loadData = {
                "GlobalDashboard.useEffect.loadData": async ()=>{
                    setLoading(true);
                    setError(null);
                    const covidData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$covid$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCovidData"])();
                    if (!covidData || !covidData.country_data) {
                        setData((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$lib$2f$covid$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEmptyCovidData"])());
                        setError("Unable to load COVID-19 data. Please ensure the data processing scripts have been run.");
                        setLoading(false);
                        return;
                    }
                    setData(covidData);
                    // Calculate global statistics
                    const totals = {
                        confirmed: 0,
                        deaths: 0,
                        recovered: 0,
                        active: 0
                    };
                    try {
                        Object.values(covidData.country_data).forEach({
                            "GlobalDashboard.useEffect.loadData": (country)=>{
                                if (country.latest && typeof country.latest === "object") {
                                    totals.confirmed += country.latest.confirmed || 0;
                                    totals.deaths += country.latest.deaths || 0;
                                    totals.recovered += country.latest.recovered || 0;
                                    totals.active += country.latest.active || 0;
                                }
                            }
                        }["GlobalDashboard.useEffect.loadData"]);
                    } catch (statError) {
                        console.error("[v0] Error calculating statistics:", statError);
                    }
                    setGlobalStats(totals);
                    setLoading(false);
                }
            }["GlobalDashboard.useEffect.loadData"];
            loadData();
        }
    }["GlobalDashboard.useEffect"], []);
    const handleCountrySelect = (country)=>{
        router.push(`/country/${encodeURIComponent(country)}`);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen bg-background",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                        className: "w-8 h-8 animate-spin text-primary"
                    }, void 0, false, {
                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Loading global data..."
                    }, void 0, false, {
                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b border-border bg-card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-bold text-balance",
                                        children: "COVID-19 Global Analytics"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground mt-2",
                                        children: "Real-time statistics and insights"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                    "Last updated: ",
                                    new Date(data.last_updated).toLocaleDateString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "border-b border-border bg-card/50 sticky top-0 z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-8 h-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/",
                                className: "text-foreground font-medium hover:text-primary transition-colors",
                                children: "Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/analytics",
                                className: "text-muted-foreground font-medium hover:text-primary transition-colors",
                                children: "Analytics"
                            }, void 0, false, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/socioeconomic",
                                className: "text-muted-foreground font-medium hover:text-primary transition-colors",
                                children: "Socioeconomic"
                            }, void 0, false, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/export",
                                className: "text-muted-foreground font-medium hover:text-primary transition-colors",
                                children: "Export"
                            }, void 0, false, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
                children: [
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-destructive/10 border border-destructive/20 p-4 mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "w-5 h-5 text-destructive flex-shrink-0 mt-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-destructive",
                                            children: "Data Loading Error"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-destructive/80 mt-1",
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    data && Object.keys(data.country_data).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$components$2f$live$2d$ticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveTicker"], {
                            data: data.country_data
                        }, void 0, false, {
                            fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold mb-6",
                                children: "Global Statistics"
                            }, void 0, false, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            globalStats.confirmed === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "bg-card border border-border p-8 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground",
                                    children: "No data available. Please run the data processing scripts to populate the database."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$components$2f$stat$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
                                        label: "Confirmed",
                                        value: globalStats.confirmed,
                                        color: "bg-orange-500",
                                        icon: "chart"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$components$2f$stat$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
                                        label: "Deaths",
                                        value: globalStats.deaths,
                                        color: "bg-red-500",
                                        icon: "alert"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$components$2f$stat$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
                                        label: "Recovered",
                                        value: globalStats.recovered,
                                        color: "bg-green-500",
                                        icon: "check"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$components$2f$stat$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
                                        label: "Active",
                                        value: globalStats.active,
                                        color: "bg-blue-500",
                                        icon: "activity"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    data && Object.keys(data.country_data).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold mb-6",
                                children: "Global Distribution & Rankings"
                            }, void 0, false, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$components$2f$choropleth$2d$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChoroplethMap"], {
                                data: data.country_data,
                                onCountrySelect: handleCountrySelect
                            }, void 0, false, {
                                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Data sources: Johns Hopkins CSSE COVID-19 | World Bank Open Data | DataHub"
                        }, void 0, false, {
                            fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/data_analyst projects/covid_front/covid-19-analytics-dashboard/components/global-dashboard.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(GlobalDashboard, "V0KsgdysPPId5/qWDvd1jAflnXg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$data_analyst__projects$2f$covid_front$2f$covid$2d$19$2d$analytics$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = GlobalDashboard;
var _c;
__turbopack_context__.k.register(_c, "GlobalDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=80b94_data_analyst%20projects_covid_front_covid-19-analytics-dashboard_f4721516._.js.map