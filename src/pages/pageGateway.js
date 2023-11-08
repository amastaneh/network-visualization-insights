import React from "react"
import ComHeatmap from './../components/comHeatmap';
import dataHeatmapDS from "../data/dataHeatmapDS";
import dataHeatmapUS from "../data/dataHeatmapUS";
import ComTailwindReset from './../components/comTailwindReset';
import ComAreaChart from "../components/comAreaChart";
import packageJson from "./../../package.json";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from '@changey/react-leaflet-markercluster';
import dataGatewayInfo from "../data/dataGatewayInfo";


const PageGateway = () => {
    const mapRef = React.useRef();
    const [dataset, setDataset] = React.useState({
        heatmap: "ds",
        heatmapData: dataHeatmapDS,
        heatmapColor: "emerald",
        heatmapType: "Download Speed",
        dateRange: "thisQ",
        state: "tx",
        stateLat: 32.7767,
        stateLong: -96.7970,
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

        else if (name === 'state') {
            let newLocation = {};
            switch (value) {
                case "tx":
                    newLocation = { lat: 32.7767, lng: -96.7970 };
                    break;
                case "ca":
                    newLocation = { lat: 36.7783, lng: -119.4179 };
                    break;
                case "fl":
                    newLocation = { lat: 27.6648, lng: -81.5158 };
                    break;
                case "ny":
                    newLocation = { lat: 43.2994, lng: -74.2179 };
                    break;
                default:
                    alert("Error: Invalid state value");
                    break;
            }

            if (mapRef) {
                setDataset({ ...dataset, [name]: value, stateLat: newLocation.lat, stateLong: newLocation.lng });
                mapRef?.current.flyTo(newLocation, 5);
            }
        }

        else
            setDataset({ ...dataset, [name]: value });
    };

    return <main className="min-h-screen max-w-fit mx-auto place-items-top px-4 py-6 flex flex-col gap-y-6">
        <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-gray-400">Gateways Dashboard</h1>
        </div>

        {/* Map */}
        <div className="flex justify-start gap-x-4">
            <div className="flex flex-row gap-x-2">
                <label htmlFor="dateRange" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400 flex-shrink-0">Date Range: </label>
                <select name="dateRange" className="block w-full bg-white border border-slate-300 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 rounded py-0 px-2" onChange={handleChange}>
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
                <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400 flex-shrink-0">State: </label>
                <select name="state" className="block w-full bg-white border border-slate-300 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 rounded py-0 px-2" onChange={handleChange}>
                    <option value="tx">Texas</option>
                    <option value="ca">California</option>
                    <option value="fl">Florida</option>
                    <option value="ny">New York</option>
                </select>
            </div>
        </div>
        <div className="flex flex-col bg-slate-50">
            <div className="flex flex-row justify-between">
                <MapContainer
                    ref={mapRef}
                    className="w-full h-96"
                    center={[dataset.stateLat, dataset.stateLong]}
                    zoom={6}
                    maxZoom={18}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />

                    <MarkerClusterGroup>
                        {
                            dataGatewayInfo.map((gateway, idx) => (
                                <Marker key={`marker-${idx}`} position={[gateway.lat, gateway.long]}>
                                    <Popup>
                                        <div>Position: {gateway.lat}, {gateway.long}</div>
                                        <div>Gateway Name: {gateway.name}</div>
                                        <div>City: {gateway.city}</div>
                                        <div>Download Speed: {gateway.dl}</div>
                                        <div>Upload Speed: {gateway.ul}</div>
                                    </Popup>
                                </Marker>
                            ))}
                    </MarkerClusterGroup>
                </MapContainer>

            </div>
        </div>

        {/* Heatmap */}
        <div className="flex justify-start gap-x-4">
            <div className="flex flex-row gap-x-2">
                <label htmlFor="dateRange" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400 flex-shrink-0">Heatmap Category: </label>
                <select
                    name="heatmap"
                    className="block w-full bg-white border border-slate-300 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 rounded py-0 px-2"
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

export default PageGateway