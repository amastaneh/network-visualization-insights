import React from "react"
import ComMapUS from "../components/comMapUS"
import ComHeatmap from './../components/comHeatmap';
import dataHeatmapDS from "../data/dataHeatmapDS";
import dataHeatmapUS from "../data/dataHeatmapUS";
import ComTailwindReset from './../components/comTailwindReset';
import ComAreaChart from "../components/comAreaChart";
import packageJson from "./../../package.json";


const PageDashboard = () => {
    const [dataset, setDataset] = React.useState({
        heatmap: "ds",
        heatmapData: dataHeatmapDS,
        heatmapColor: "emerald",
        heatmapType: "Download Speed",
        dateRange: "thisQ",
        state: "tx"
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        // Heatmap
        if (name === "heatmap") {
            if (value === "ds") {
                setDataset({ ...dataset, heatmap: value, heatmapData: dataHeatmapDS, heatmapColor: "emerald", heatmapType: "Download Speed" });
            } else if (value === "us") {
                setDataset({ ...dataset, heatmap: value, heatmapData: dataHeatmapUS, heatmapColor: "red", heatmapType: "Upload Speed" });
            }
            else if (value === "rsrp") {
                setDataset({ ...dataset, heatmap: value, heatmapData: dataHeatmapDS, heatmapColor: "cyan", heatmapType: "RSRP" });
            }
            else if (value === "rsrq") {
                setDataset({ ...dataset, heatmap: value, heatmapData: dataHeatmapDS, heatmapColor: "rose", heatmapType: "RSRQ" });
            }
            else {
                alert("Error: Invalid heatmap value");
            }
        }
    };

    return <main className="min-h-screen max-w-fit mx-auto place-items-top px-4 py-6 flex flex-col gap-y-6">
        <div>
            <h1 className="text-2xl font-bold text-slate-900">Regional Dashboard</h1>
        </div>

        {/* Map */}
        <div className="flex justify-start gap-x-4">
            <div className="flex flex-row gap-x-2">
                <label htmlFor="dateRange" className="block text-sm font-medium leading-6 text-gray-900 flex-shrink-0">Date Range: </label>
                <select name="dateRange" className="block w-full bg-white border border-slate-300 rounded py-0 px-2" onChange={handleChange}>
                    <option disabled value="thisM">This Month</option>
                    <option disabled value="prvM">Previous Month</option>
                    <option value="thisQ">This Quarter</option>
                    <option disabled value="prvQ">Previous Quarter</option>
                    <option disabled value="thisY">This Year</option>
                    <option disabled value="prvY">Previous Year</option>
                    <option disabled value="custom">Custom</option>
                </select>
            </div>
            <div className="flex flex-row gap-x-2">
                <label htmlFor="dateRange" className="block text-sm font-medium leading-6 text-gray-900 flex-shrink-0">State: </label>
                <select name="state" className="block w-full bg-white border border-slate-300 rounded py-0 px-2" onChange={handleChange}>
                    <option value="tx">Texas</option>
                    <option disabled value="ca">California</option>
                    <option disabled value="fl">Florida</option>
                    <option disabled value="ny">New York</option>
                    <option disabled value="il">Illinois</option>
                    <option disabled value="pa">Pennsylvania</option>
                </select>
            </div>
        </div>
        <div className="flex flex-col bg-slate-50">
            <div className="flex flex-row justify-between">
                <ComMapUS highlightState={dataset.state.toUpperCase()} />
            </div>
        </div>

        {/* Heatmap */}
        <div className="flex justify-start gap-x-4">
            <div className="flex flex-row gap-x-2">
                <label htmlFor="dateRange" className="block text-sm font-medium leading-6 text-gray-900 flex-shrink-0">Heatmap Category: </label>
                <select
                    name="heatmap"
                    className="block w-full bg-white border border-slate-300 rounded py-0 px-2"
                    onChange={handleChange}
                    defaultValue={dataset.heatmap}
                >
                    <option value="ds">Download Speed</option>
                    <option value="us">Upload Speed</option>
                    <option value="rsrp">RSRP</option>
                    <option value="rsrq">RSRQ</option>
                </select>
            </div>
        </div>
        <div className="flex justify-start gap-x-4">
            <ComHeatmap data={dataset.heatmapData} color={dataset.heatmapColor} type={dataset.heatmapType} />
        </div>
        <div className="flex justify-start gap-x-4">
            <ComAreaChart data={dataset.heatmapData} color={dataset.heatmapColor} type={dataset.heatmapType} />
        </div>

        <div className="flex flex-row justify-center gap-x-4">
            <div className="text-xs text-gray-400">
                <small>All Rights Reserved &copy; 2023 {packageJson.title} - v{packageJson.version}</small>
            </div>
        </div>

        <ComTailwindReset />
    </main>
}

export default PageDashboard