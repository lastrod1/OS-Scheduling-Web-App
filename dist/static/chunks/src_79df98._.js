(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_79df98._.js", {

"[project]/src/app/GanttChart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
const GanttChart = ({ algorithm, result })=>{
    _s();
    const [currentTimeline, setCurrentTimeline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GanttChart.useEffect": ()=>{
            if (result) {
                setCurrentTimeline(result.timeline);
                setCurrentStep(0);
            }
        }
    }["GanttChart.useEffect"], [
        result
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GanttChart.useEffect": ()=>{
            if (currentTimeline.length > 0 && currentStep < currentTimeline.length) {
                const timer = setTimeout({
                    "GanttChart.useEffect.timer": ()=>{
                        setCurrentStep({
                            "GanttChart.useEffect.timer": (prevStep)=>prevStep + 1
                        }["GanttChart.useEffect.timer"]);
                    }
                }["GanttChart.useEffect.timer"], 1000); // Update every second
                return ({
                    "GanttChart.useEffect": ()=>clearTimeout(timer)
                })["GanttChart.useEffect"];
            }
        }
    }["GanttChart.useEffect"], [
        currentStep,
        currentTimeline
    ]);
    const generateGanttChartData = (timeline)=>{
        const labels = [];
        const data = [];
        let lastTime = 0;
        timeline.forEach((entry)=>{
            const processId = entry.process;
            const currentTime = entry.time;
            const label = processId === 0 ? "Idle" : `P${processId}`;
            // Add process label to the list if not already added
            if (!labels.includes(label)) {
                labels.push(label);
            }
            data.push({
                x: [
                    lastTime,
                    currentTime
                ],
                y: label
            });
            lastTime = currentTime;
        });
        return {
            labels,
            data
        };
    };
    const chartData = (timeline)=>{
        if (timeline.length === 0) return {
            labels: [],
            datasets: []
        }; // Ensure timeline is available
        const { labels, data } = generateGanttChartData(timeline);
        return {
            labels,
            datasets: [
                {
                    label: "Process Execution Time",
                    data,
                    backgroundColor: (context)=>{
                        const label = context.raw.y;
                        return label === "Idle" ? "rgba(200, 200, 200, 0.8)" : "rgba(52, 152, 219, 0.8)"; // Gray for Idle, Blue for processes
                    },
                    borderColor: "#fff",
                    borderWidth: 1,
                    barThickness: 20
                }
            ]
        };
    };
    const chartOptions = {
        indexAxis: "y",
        scales: {
            x: {
                type: "linear",
                position: "bottom",
                min: 0,
                ticks: {
                    stepSize: 1
                }
            }
        },
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: (context)=>{
                        const { raw } = context;
                        return `Start: ${raw.x[0]}, End: ${raw.x[1]}`;
                    }
                }
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "80%",
            margin: "auto",
            paddingTop: "20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    color: "#fff",
                    textAlign: "center"
                },
                children: [
                    algorithm,
                    " Gantt Chart"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/GanttChart.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                    data: chartData(currentTimeline.slice(0, currentStep)),
                    options: chartOptions
                }, void 0, false, {
                    fileName: "[project]/src/app/GanttChart.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/GanttChart.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/GanttChart.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
};
_s(GanttChart, "Kn/IYPNMlNr4mF8ENNy1mZih048=");
_c = GanttChart;
const __TURBOPACK__default__export__ = GanttChart;
var _c;
__turbopack_refresh__.register(_c, "GanttChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Table.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Table = ({ processes })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '80%',
            margin: 'auto',
            paddingTop: '20px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    color: '#fff',
                    textAlign: 'center'
                },
                children: "Processes Table"
            }, void 0, false, {
                fileName: "[project]/src/app/Table.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                style: {
                    width: '100%',
                    borderCollapse: 'collapse',
                    color: '#fff'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    style: {
                                        border: '1px solid #fff',
                                        padding: '8px'
                                    },
                                    children: "PID"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Table.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    style: {
                                        border: '1px solid #fff',
                                        padding: '8px'
                                    },
                                    children: "Arrival Time"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Table.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    style: {
                                        border: '1px solid #fff',
                                        padding: '8px'
                                    },
                                    children: "Burst Time"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Table.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Table.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Table.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: processes.map((process)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            border: '1px solid #fff',
                                            padding: '8px'
                                        },
                                        children: process.pid
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Table.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            border: '1px solid #fff',
                                            padding: '8px'
                                        },
                                        children: process.arrivalTime
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Table.tsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            border: '1px solid #fff',
                                            padding: '8px'
                                        },
                                        children: process.burstTime
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Table.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, process.pid, true, {
                                fileName: "[project]/src/app/Table.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/Table.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Table.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Table.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
_c = Table;
const __TURBOPACK__default__export__ = Table;
var _c;
__turbopack_refresh__.register(_c, "Table");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/BarChart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
const BarChart = ({ results, waitTimeChartRef, turnaroundTimeChartRef })=>{
    _s();
    const waitTimeChartInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const turnaroundTimeChartInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BarChart.useEffect": ()=>{
            if (waitTimeChartInstanceRef.current) {
                waitTimeChartRef.current = waitTimeChartInstanceRef.current.canvas;
            }
            if (turnaroundTimeChartInstanceRef.current) {
                turnaroundTimeChartRef.current = turnaroundTimeChartInstanceRef.current.canvas;
            }
        }
    }["BarChart.useEffect"], [
        waitTimeChartRef,
        turnaroundTimeChartRef
    ]);
    const algorithms = Object.keys(results);
    const averageWaitTimes = algorithms.map((algorithm)=>results[algorithm].AverageWaitTime);
    const averageTurnaroundTimes = algorithms.map((algorithm)=>results[algorithm].AverageTurnAroundTime);
    const colors = [
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)'
    ];
    const waitTimeData = {
        labels: algorithms,
        datasets: [
            {
                label: 'Average Wait Time',
                data: averageWaitTimes,
                backgroundColor: colors,
                borderColor: colors.map((color)=>color.replace('0.6', '1')),
                borderWidth: 1
            }
        ]
    };
    const turnaroundTimeData = {
        labels: algorithms,
        datasets: [
            {
                label: 'Average Turnaround Time',
                data: averageTurnaroundTimes,
                backgroundColor: colors,
                borderColor: colors.map((color)=>color.replace('0.6', '1')),
                borderWidth: 1
            }
        ]
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: ''
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '80%',
            margin: 'auto',
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'space-between'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '45%'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                    ref: waitTimeChartInstanceRef,
                    data: waitTimeData,
                    options: {
                        ...options,
                        plugins: {
                            ...options.plugins,
                            title: {
                                ...options.plugins.title,
                                text: 'Average Wait Time by Algorithm'
                            }
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/BarChart.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/BarChart.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '45%'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                    ref: turnaroundTimeChartInstanceRef,
                    data: turnaroundTimeData,
                    options: {
                        ...options,
                        plugins: {
                            ...options.plugins,
                            title: {
                                ...options.plugins.title,
                                text: 'Average Turnaround Time by Algorithm'
                            }
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/BarChart.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/BarChart.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/BarChart.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
};
_s(BarChart, "huWbNS9VAXeguaNDbW4DTOhDZ8M=");
_c = BarChart;
const __TURBOPACK__default__export__ = BarChart;
var _c;
__turbopack_refresh__.register(_c, "BarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utilities/PDF.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PDF": (()=>PDF)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
;
const PDF = (waitTimeChart, turnaroundTimeChart)=>{
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsPDF"]();
    doc.setFontSize(14);
    let currentY = 30;
    if (waitTimeChart) {
        const waitTimeImage = waitTimeChart.toDataURL("image/png");
        doc.addImage(waitTimeImage, 'PNG', 14, currentY, 180, 90);
        currentY += 100;
    }
    if (turnaroundTimeChart) {
        const turnaroundTimeImage = turnaroundTimeChart.toDataURL("image/png");
        doc.addImage(turnaroundTimeImage, 'PNG', 14, currentY, 180, 90);
    }
    doc.save("results.pdf");
};
_c = PDF;
var _c;
__turbopack_refresh__.register(_c, "PDF");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utilities/processGenerator.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "generateProcesses": (()=>generateProcesses)
});
function generateProcesses(count) {
    const MaxBurst = 7;
    const MaxArrival = 7;
    let burstTime = 0; // need a variable so that remaining time and burst time are the sae
    const processes = [];
    for(let i = 0; i < count; i++){
        burstTime = Math.floor(Math.random() * MaxBurst) + 1;
        processes.push({
            pid: i + 1,
            arrivalTime: Math.floor(Math.random() * MaxArrival) + 1,
            burstTime: burstTime,
            completed: false,
            remainingTime: burstTime,
            queuelevel: 0
        });
    }
    console.log("Generated Processes: ", processes); // Debugging log
    return processes;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/algorithms/fifo.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "FirstInFirstOut": (()=>FirstInFirstOut)
});
function FirstInFirstOut(processes) {
    const result = {
        timeline: [],
        AverageWaitTime: 0,
        AverageTurnAroundTime: 0
    };
    const sorted = processes.sort((a, b)=>a.arrivalTime - b.arrivalTime);
    const numProcesses = processes.length;
    let currTime = 0; //for the timeline
    let TurnAroundTime = 0;
    let totalWaitTime = 0; //for calculating average wait time late
    let totalTurnAroundTime = 0; //for calculating average turnaround time later
    for(let i = 0; i < numProcesses; i++){
        if (processes[i].arrivalTime > currTime) {
            currTime = processes[i].arrivalTime;
            result.timeline.push({
                time: currTime,
                process: 0
            });
        }
        processes[i].completed = true;
        currTime += processes[i].burstTime;
        result.timeline.push({
            time: currTime,
            process: processes[i].pid
        });
        //wait time = turnaround time - burst time
        //turnaround time = completion time - arrival time
        TurnAroundTime = currTime - sorted[i].arrivalTime;
        totalTurnAroundTime = totalTurnAroundTime + TurnAroundTime;
        totalWaitTime = totalWaitTime + (TurnAroundTime - sorted[i].burstTime);
    }
    result.AverageTurnAroundTime = totalWaitTime / numProcesses;
    result.AverageWaitTime = totalWaitTime / numProcesses;
    return result;
}
_c = FirstInFirstOut;
var _c;
__turbopack_refresh__.register(_c, "FirstInFirstOut");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/algorithms/sjf.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "sjf": (()=>sjf)
});
function sjf(processes) {
    const result = {
        timeline: [],
        AverageWaitTime: 0,
        AverageTurnAroundTime: 0
    };
    const sorted = processes.sort((a, b)=>a.arrivalTime - b.arrivalTime);
    const numProcesses = sorted.length;
    let currTime = 0; //for the timeline
    let WaitTime = 0; //for calculating average wait time late
    let TurnAroundTime = 0; //for calculating average turnaround time later
    for(let i = 0; i < numProcesses; i++){
        let index = -1;
        if (sorted[i].arrivalTime >= currTime) {
            currTime = sorted[i].arrivalTime;
            result.timeline.push({
                time: currTime,
                process: 0
            });
        }
        //loop to find process with shortest burst time
        for(let j = 0; j < numProcesses; j++){
            if (sorted[j].arrivalTime <= currTime && !sorted[j].completed) {
                if (index === -1 || sorted[j].burstTime < sorted[index].burstTime) {
                    index = j;
                }
            }
        }
        currTime = currTime + sorted[index].burstTime;
        result.timeline.push({
            time: currTime,
            process: sorted[index].pid
        });
        //wait time = turnaround time - burst time
        //turnaround time = completion time - arrival time
        TurnAroundTime = currTime - sorted[index].arrivalTime;
        WaitTime = TurnAroundTime - sorted[index].burstTime;
        result.AverageTurnAroundTime += TurnAroundTime;
        result.AverageWaitTime += WaitTime;
        sorted[index].completed = true;
    }
    result.AverageTurnAroundTime = result.AverageTurnAroundTime / numProcesses;
    result.AverageWaitTime = result.AverageWaitTime / numProcesses;
    return result;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/algorithms/rr.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "rr": (()=>rr)
});
function rr(processes, quantum) {
    const result = {
        timeline: [],
        AverageWaitTime: 0,
        AverageTurnAroundTime: 0
    };
    const sorted = processes.sort((a, b)=>a.arrivalTime - b.arrivalTime);
    const numProcesses = sorted.length;
    let currTime = 0; //for the timeline
    let TurnAroundTime = 0;
    let done = false;
    while(done == false){
        done = true;
        for(let i = 0; i < numProcesses; i++){
            if (sorted[i].arrivalTime > currTime) {
                currTime = sorted[i].arrivalTime;
                result.timeline.push({
                    time: currTime,
                    process: 0
                });
            //here will be to indicate idle time
            }
            if (!sorted[i].completed) {
                if (sorted[i].remainingTime <= quantum && sorted[i].remainingTime > 0) {
                    currTime += sorted[i].remainingTime;
                    sorted[i].remainingTime = 0;
                    result.timeline.push({
                        time: currTime,
                        process: sorted[i].pid
                    });
                    sorted[i].completed = true;
                } else {
                    sorted[i].remainingTime -= quantum;
                    currTime += quantum;
                    result.timeline.push({
                        time: currTime,
                        process: sorted[i].pid
                    });
                    done = false;
                }
                //wait time = turnaround time - burst time
                //turnaround time = completion time - arrival time
                TurnAroundTime = currTime - sorted[i].arrivalTime;
                result.AverageTurnAroundTime += currTime - sorted[i].arrivalTime;
                result.AverageWaitTime += TurnAroundTime - sorted[i].burstTime;
            }
        }
    }
    result.AverageTurnAroundTime = result.AverageTurnAroundTime / numProcesses;
    result.AverageWaitTime = result.AverageWaitTime / numProcesses;
    return result;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/algorithms/stcf.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "stcf": (()=>stcf)
});
function stcf(processes) {
    const result = {
        timeline: [],
        AverageWaitTime: 0,
        AverageTurnAroundTime: 0
    };
    const sorted = processes.sort((a, b)=>a.arrivalTime - b.arrivalTime);
    const numProcesses = sorted.length;
    let currTime = 0; // for the timeline
    let TurnAroundTime = 0; // for calculating average turnaround time later
    let completedProcesses = 0;
    let shortest_index = -1; // index of process with shortest remaining time
    let currentProcess = -1;
    while(completedProcesses < numProcesses){
        shortest_index = -1;
        for(let i = 0; i < numProcesses; i++){
            if (sorted[i].arrivalTime <= currTime && !sorted[i].completed) {
                if (shortest_index == -1 || sorted[i].remainingTime < sorted[shortest_index].remainingTime) {
                    shortest_index = i;
                }
            }
        }
        if (shortest_index == -1) {
            if (shortest_index != currentProcess) {
                result.timeline.push({
                    time: currTime,
                    process: sorted[currentProcess].pid
                });
                sorted[currentProcess].remainingTime -= 1;
                currentProcess = shortest_index;
            }
        } else if (shortest_index != currentProcess) {
            if (currentProcess == -1) {
                result.timeline.push({
                    time: currTime,
                    process: 0
                });
            } else {
                result.timeline.push({
                    time: currTime,
                    process: sorted[currentProcess].pid
                });
                sorted[currentProcess].remainingTime -= 1;
            }
            currentProcess = shortest_index;
        } else {
            sorted[currentProcess].remainingTime -= 1;
        }
        if (currentProcess != -1 && sorted[currentProcess].remainingTime == 0) {
            sorted[currentProcess].completed = true;
            completedProcesses += 1;
            TurnAroundTime = currTime - sorted[currentProcess].arrivalTime + 1;
            result.AverageTurnAroundTime += TurnAroundTime;
            result.AverageWaitTime += TurnAroundTime - sorted[currentProcess].burstTime;
            result.timeline.push({
                time: currTime,
                process: sorted[currentProcess].pid
            });
            continue;
        }
        currTime += 1;
    }
    result.AverageTurnAroundTime = result.AverageTurnAroundTime / numProcesses;
    result.AverageWaitTime = result.AverageWaitTime / numProcesses;
    return result;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/algorithms/mlfq.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "mlfq": (()=>mlfq)
});
function mlfq(processes) {
    const result = {
        timeline: [],
        AverageWaitTime: 0,
        AverageTurnAroundTime: 0
    };
    const sorted = processes.sort((a, b)=>a.arrivalTime - b.arrivalTime);
    const numProcesses = sorted.length;
    let currTime = 0; //for the timeline
    let TurnAroundTime = 0; //for calculating average turnaround time later
    let completedProcesses = 0;
    const q1quantum = 2; //quantum for queue 1
    const q2quantum = 4; //quantum for queue 2
    const allotment = 4;
    let s = 20; //after 20 units of time. move all processes to the highest priority
    let lastProcess = 0; //index of the last process that was put into the queue to ensure no duplicate processes
    const q1 = [];
    const q2 = [];
    const q3 = [];
    while(completedProcesses < numProcesses){
        for(let i = 0; i < numProcesses; i++){
            if (sorted[i].queuelevel == 0 && sorted[i].arrivalTime <= currTime && !sorted[i].completed && i == lastProcess) {
                q1.push(sorted[i]);
                lastProcess++;
            }
        }
        let WorkingQueue = 0;
        ;
        if (q1.length != 0) {
            WorkingQueue = 0;
        } else if (q2.length != 0) {
            WorkingQueue = 1;
        } else {
            WorkingQueue = 2;
        }
        if (WorkingQueue == 0) {
            if (q1[0].remainingTime <= q1quantum) {
                currTime += q1[0].remainingTime;
                s -= q1[0].remainingTime;
                q1[0].remainingTime = 0;
                //wait time = turnaround time - burst time
                //turnaround time = completion time - arrival time
                TurnAroundTime = currTime - q1[0].arrivalTime;
                result.AverageTurnAroundTime += currTime - q1[0].arrivalTime;
                result.AverageWaitTime += TurnAroundTime - q1[0].burstTime;
                result.timeline.push({
                    time: currTime,
                    process: q1[0].pid
                });
                q1[0].completed = true;
                completedProcesses++;
                q1.shift();
            } else {
                currTime += q1quantum;
                s -= q1quantum;
                q1[0].remainingTime -= q1quantum;
                result.timeline.push({
                    time: currTime,
                    process: q1[0].pid
                });
                const temp = q1[0];
                q1.shift();
                if ((temp.burstTime - temp.remainingTime) % allotment == 0) {
                    temp.queuelevel++;
                    q2.push(temp);
                } else {
                    if (lastProcess < numProcesses && sorted[lastProcess].arrivalTime <= currTime) {
                        q1.push(sorted[lastProcess]);
                        lastProcess++;
                    }
                    q1.push(temp);
                }
            }
        } else if (WorkingQueue == 1) {
            if (q2[0].remainingTime <= q2quantum) {
                currTime += q2[0].remainingTime;
                s -= q2[0].remainingTime;
                q2[0].remainingTime = 0;
                TurnAroundTime = currTime - q2[0].arrivalTime;
                result.AverageTurnAroundTime += currTime - q2[0].arrivalTime;
                result.AverageWaitTime += TurnAroundTime - q2[0].burstTime;
                result.timeline.push({
                    time: currTime,
                    process: q2[0].pid
                });
                q2[0].completed = true;
                completedProcesses++;
                q2.shift();
            } else {
                currTime += q2quantum;
                s -= q2quantum;
                q2[0].remainingTime -= q2quantum;
                result.timeline.push({
                    time: currTime,
                    process: q2[0].pid
                });
                const temp = q2[0];
                q2.push(temp);
                q2.shift();
                if ((temp.burstTime - temp.remainingTime) % allotment == 0) {
                    temp.queuelevel++;
                    q3.push(temp);
                } else {
                    q2.push(temp);
                }
            }
        } else {
            if (q3.length > 0 && q3[0].remainingTime > 0) {
                currTime += q3[0].remainingTime;
                s -= q3[0].remainingTime;
                q3[0].remainingTime = 0;
                result.timeline.push({
                    time: currTime,
                    process: q3[0].pid
                });
                q3[0].completed = true;
                completedProcesses++;
                q3.shift();
            } else {
                currTime += 1;
                s -= 1;
                result.timeline.push({
                    time: currTime,
                    process: 0
                });
            }
        }
        if (s <= 0) {
            s = 20;
            for(let i = 0; i < q2.length; i++){
                const temp = q2[0];
                q1.push(temp);
                q2.shift();
            }
            for(let i = 0; i < q3.length; i++){
                const temp = q3[0];
                q1.push(temp);
                q3.shift();
            }
        }
    }
    result.AverageTurnAroundTime = result.AverageTurnAroundTime / numProcesses;
    result.AverageWaitTime = result.AverageWaitTime / numProcesses;
    return result;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$GanttChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/GanttChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/Table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$BarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/BarChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$PDF$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utilities/PDF.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$processGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utilities/processGenerator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$algorithms$2f$fifo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/algorithms/fifo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$algorithms$2f$sjf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/algorithms/sjf.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$algorithms$2f$rr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/algorithms/rr.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$algorithms$2f$stcf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/algorithms/stcf.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$algorithms$2f$mlfq$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/algorithms/mlfq.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
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
function Home() {
    _s();
    const algorithms = [
        {
            name: "FIFO",
            value: "FIFO"
        },
        {
            name: "SJF",
            value: "SJF"
        },
        {
            name: "RR",
            value: "RR"
        },
        {
            name: "STCF",
            value: "STCF"
        },
        {
            name: "MLFQ",
            value: "MLFQ"
        }
    ];
    const [numProcesses, setNumProcesses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const [quantum, setQuantum] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const [selectedAlgorithms, setSelectedAlgorithms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [processes, setProcesses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const waitTimeChartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const turnaroundTimeChartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setProcesses((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$processGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateProcesses"])(numProcesses));
        }
    }["Home.useEffect"], [
        numProcesses
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (processes.length === 0) return;
            const newResults = {};
            selectedAlgorithms.forEach({
                "Home.useEffect": (algorithm)=>{
                    const processesCopy = JSON.parse(JSON.stringify(processes)); // Deep copy to avoid mutation
                    let resultFromAlgorithm = {
                        timeline: [],
                        AverageWaitTime: 0,
                        AverageTurnAroundTime: 0
                    };
                    switch(algorithm){
                        case 'FIFO':
                            resultFromAlgorithm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$algorithms$2f$fifo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirstInFirstOut"])(processesCopy);
                            break;
                        case 'SJF':
                            resultFromAlgorithm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$algorithms$2f$sjf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sjf"])(processesCopy);
                            break;
                        case 'RR':
                            resultFromAlgorithm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$algorithms$2f$rr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rr"])(processesCopy, quantum);
                            break;
                        case 'STCF':
                            resultFromAlgorithm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$algorithms$2f$stcf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stcf"])(processesCopy);
                            break;
                        case 'MLFQ':
                            resultFromAlgorithm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$algorithms$2f$mlfq$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mlfq"])(processesCopy);
                            break;
                    }
                    newResults[algorithm] = resultFromAlgorithm;
                }
            }["Home.useEffect"]);
            setResults(newResults);
        }
    }["Home.useEffect"], [
        selectedAlgorithms,
        processes,
        quantum
    ]);
    const handleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        setSelectedAlgorithms((prev)=>checked ? [
                ...prev,
                value
            ] : prev.filter((algorithm)=>algorithm !== value));
    };
    const handleGeneratePDF = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$PDF$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDF"])(waitTimeChartRef.current, turnaroundTimeChartRef.current);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "0px",
            backgroundColor: "#000000",
            minHeight: "100vh"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    marginBottom: "20px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "numProcesses",
                        style: {
                            color: "#fff",
                            marginRight: "10px"
                        },
                        children: "Number of Processes:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "numProcesses",
                        type: "number",
                        value: numProcesses,
                        onChange: (e)=>setNumProcesses(Number(e.target.value)),
                        style: {
                            padding: "5px",
                            width: "50px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    marginBottom: "20px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "quantum",
                        style: {
                            color: "#fff",
                            marginRight: "10px"
                        },
                        children: "Quantum (for RR):"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "quantum",
                        type: "number",
                        value: quantum,
                        onChange: (e)=>setQuantum(Number(e.target.value)),
                        style: {
                            padding: "5px",
                            width: "50px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    marginBottom: "20px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleGeneratePDF,
                    style: {
                        padding: "10px 20px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "5px"
                    },
                    children: "Generate PDF"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    marginBottom: "20px"
                },
                children: algorithms.map((algorithm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            display: "block",
                            margin: "5px 0",
                            color: "#FFFFFF"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                value: algorithm.value,
                                checked: selectedAlgorithms.includes(algorithm.value),
                                onChange: handleCheckboxChange
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            algorithm.name
                        ]
                    }, algorithm.value, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                processes: processes
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$BarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                results: results,
                waitTimeChartRef: waitTimeChartRef,
                turnaroundTimeChartRef: turnaroundTimeChartRef
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            selectedAlgorithms.map((algorithm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$GanttChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    algorithm: algorithm,
                    result: results[algorithm]
                }, algorithm, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(Home, "ATP9S7dJmQPQYrA40ODkYZrHjLo=");
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_79df98._.js.map