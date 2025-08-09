import React from "react";
import ComMapUS from "../components/comMapUS.jsx";
import ComHeatmap from '../components/comHeatmap.jsx';
import dataHeatmapDS from "./../data/dataHeatmapDS.json";
import dataHeatmapUS from "../data/dataHeatmapUS.json";
import ComAreaChart from "../components/comAreaChart.jsx";

const PageDashRegional = () => {
    const [dataset, setDataset] = React.useState({
        heatmap: "ds",
        heatmapData: dataHeatmapDS,
        heatmapColor: "blue",
        heatmapType: "Download Speed",
        dateRange: "prvY",
        state: "tx"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "heatmap") {
            const heatmapSettings = {
                ds: { data: dataHeatmapDS, color: "blue", type: "Download Speed" },
                us: { data: dataHeatmapUS, color: "red", type: "Upload Speed" },
                rsrp: { data: dataHeatmapDS, color: "teal", type: "RSRP" },
                rsrq: { data: dataHeatmapDS, color: "rose", type: "RSRQ" },
            };
            setDataset({ ...dataset, heatmap: value, ...heatmapSettings[value] });
        } else {
            setDataset({ ...dataset, [name]: value });
        }
    };

    return (
        <main className="min-h-screen max-w-7xl mx-auto px-4 py-6 flex flex-col gap-y-6">
            <h1 className="text-3xl font-bold text-neutral-900">Regional Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Map and Filters */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                        <div className="flex items-center gap-x-3">
                            <label htmlFor="dateRange" className="text-sm font-medium text-neutral-700">Date Range:</label>
                            <select name="dateRange" className="w-full bg-neutral-50 border border-neutral-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-neutral-800" onChange={handleChange}>
                                <option value="prvY">Previous Year</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <label htmlFor="state" className="text-sm font-medium text-neutral-700">State:</label>
                            <select name="state" className="w-full bg-neutral-50 border border-neutral-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-neutral-800" onChange={handleChange} defaultValue="tx">
                                <option value="tx">Texas</option>
                            </select>
                        </div>
                    </div>
                    <ComMapUS highlightState={dataset.state.toUpperCase()} />
                    <p className="mt-4 text-sm text-neutral-600 text-center">
                        Click on city regions on the map for more insights.
                    </p>
                </div>

                {/* Area Chart */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <ComAreaChart data={dataset.heatmapData} color={dataset.heatmapColor} type={dataset.heatmapType} />
                </div>
            </div>

            {/* Heatmap */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-x-3 mb-4">
                    <label htmlFor="heatmap" className="text-sm font-medium text-neutral-700">Heatmap Category:</label>
                    <select
                        name="heatmap"
                        className="bg-neutral-50 border border-neutral-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-neutral-800"
                        onChange={handleChange}
                        defaultValue={dataset.heatmap}
                    >
                        <option value="ds">Download Speed</option>
                        <option value="us">Upload Speed</option>
                        <option value="rsrp">RSRP</option>
                        <option value="rsrq">RSRQ</option>
                    </select>
                </div>
                <div className="overflow-x-auto">
                    <ComHeatmap data={dataset.heatmapData} color={dataset.heatmapColor} type={dataset.heatmapType} />
                </div>
            </div>
        </main>
    );
};

export default PageDashRegional;