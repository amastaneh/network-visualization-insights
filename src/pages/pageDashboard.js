import React from "react"
//import ComMap from "../components/comMap"
import ComHeatmap from './../components/comHeatmap';
import dataHeatmapDS from "../data/dataHeatmapDS";
import dataHeatmapUS from "../data/dataHeatmapUS";
//import dataGeo from "../data/dataGeo";
//import dataGeoTX from "../data/dataGeoTX";
//import dataGeo from "../data/tx_counties.json";
import ComTailwindReset from './../components/comTailwindReset';

const PageDashboard = () => {
    const [dataset, setDataset] = React.useState({
        heatmap: "ds",
        heatmapData: dataHeatmapDS,
        heatmapColor: "emerald",
        heatmapType: "Download Speed",
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

    return <main className="min-h-screen max-w-fit mx-auto place-items-top py-8 flex flex-col gap-y-6">
        <div>
            <h1 className="text-2xl font-bold text-slate-900">Regional Dashboard</h1>
        </div>

        {/* Map */}
        <div className="flex justify-start gap-x-4">
            <div className="flex flex-row gap-x-2">
                <label htmlFor="dateRange" className="block text-sm font-medium leading-6 text-gray-900 flex-shrink-0">Date Range: </label>
                <select className="block w-full bg-white border border-slate-300 rounded py-0 px-2">
                    <option value="thisWeek">This Week</option>
                    <option value="lastWeek">Last Week</option>
                    <option value="thisMonth">This Month</option>
                    <option value="lastMonth">Last Month</option>
                    <option value="thisYear">This Year</option>
                    <option value="lastYear">Last Year</option>
                    <option value="custom">Custom</option>
                </select>
            </div>
            <div className="flex flex-row gap-x-2">
                <label htmlFor="dateRange" className="block text-sm font-medium leading-6 text-gray-900 flex-shrink-0">State: </label>
                <select className="block w-full bg-white border border-slate-300 rounded py-0 px-2" onChange={handleChange}>
                    <option value="ca">California</option>
                    <option value="tx">Texas</option>
                    <option value="ny">New York</option>
                    <option value="fl">Florida</option>
                    <option value="il">Illinois</option>
                </select>
            </div>
        </div>
        <div className="flex flex-col">
            <div className="flex flex-row justify-between">
                {/* <ComMap dataGeo={dataGeoTX} /> */}
                {/* <ComMap dataGeo={dataGeo} /> */}
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
        <ComTailwindReset />
    </main>
}

export default PageDashboard