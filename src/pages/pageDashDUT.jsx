import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import ReactApexChart from "react-apexcharts";

import dataHeatmapDS from "../data/dataHeatmapDS.json";
import dataHeatmapUS from "../data/dataHeatmapUS.json";
import dataDUTInfo from "../data/dataDUTInfo.js";
import { generalHelper } from "../helper/generalHelper.js";

const PageDashDUT = () => {
    const mapRef = React.useRef();
    const [dataset, setDataset] = React.useState({
        heatmap: "ds",
        heatmapData: dataHeatmapDS,
        heatmapColor: "emerald",
        heatmapType: "Download Speed",
        dateRange: "prvY",
        state: "tx",
        stateLat: 32.7767,
        stateLong: -96.7970,
    });
    const [arrDL, setArrDL] = React.useState();
    const [arrUL, setArrUL] = React.useState();

    const arrDLYear = arrDL && [
        { name: 'Jan', data: arrDL.slice(0, 31) },
        { name: 'Feb', data: arrDL.slice(31, 59) },
        { name: 'Mar', data: arrDL.slice(59, 90) },
        { name: 'Apr', data: arrDL.slice(90, 120) },
        { name: 'May', data: arrDL.slice(120, 151) },
        { name: 'Jun', data: arrDL.slice(151, 181) },
        { name: 'Jul', data: arrDL.slice(181, 212) },
        { name: 'Aug', data: arrDL.slice(212, 243) },
        { name: 'Sep', data: arrDL.slice(243, 273) },
        { name: 'Oct', data: arrDL.slice(273, 304) },
        { name: 'Nov', data: arrDL.slice(304, 334) },
        { name: 'Dec', data: arrDL.slice(334, 365) },
    ];

    const arrULYear = arrUL && [
        { name: 'Jan', data: arrUL.slice(0, 31) },
        { name: 'Feb', data: arrUL.slice(31, 59) },
        { name: 'Mar', data: arrUL.slice(59, 90) },
        { name: 'Apr', data: arrUL.slice(90, 120) },
        { name: 'May', data: arrUL.slice(120, 151) },
        { name: 'Jun', data: arrUL.slice(151, 181) },
        { name: 'Jul', data: arrUL.slice(181, 212) },
        { name: 'Aug', data: arrUL.slice(212, 243) },
        { name: 'Sep', data: arrUL.slice(243, 273) },
        { name: 'Oct', data: arrUL.slice(273, 304) },
        { name: 'Nov', data: arrUL.slice(304, 334) },
        { name: 'Dec', data: arrUL.slice(334, 365) },
    ];

    const arrColorRange = [
        { name: 'Poor', color: '#ef4444', from: 0, to: 30 },
        { name: 'Good', color: '#3b82f6', from: 30, to: 300 },
        { name: 'Excellent', color: '#22c55e', from: 300, to: 500 },
    ];

    const svgMarker = (dl) => `
        <div class="w-12 h-12">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g>
                    <path fill="${dl < 30 ? '#ef4444' : dl < 300 ? '#3b82f6' : '#22c55e'}" d="m12 0c-4.4183 0-8 3.5817-8 8 0 1.421 0.3816 2.75 1.0312 3.906 0.1079 0.192 0.221 0.381 0.3438 0.563l6.625 11.531 6.625-11.531c0.102-0.151 0.19-0.311 0.281-0.469l0.063-0.094c0.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z"></path>
                    <path fill="${dl < 30 ? '#dc2626' : dl < 300 ? '#2563eb' : '#16a34a'}" d="m12 3c-2.7614 0-5 2.2386-5 5 0 2.761 2.2386 5 5 5 2.761 0 5-2.239 5-5 0-2.7614-2.239-5-5-5zm0 2c1.657 0 3 1.3431 3 3s-1.343 3-3 3-3-1.3431-3-3 1.343-3 3-3z"></path>
                </g>
            </svg>
        </div>`;

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'state') {
            const newLocation = {
                tx: { lat: 32.7767, lng: -96.7970 },
                ca: { lat: 36.7783, lng: -119.4179 },
                fl: { lat: 27.6648, lng: -81.5158 },
                ny: { lat: 43.2994, lng: -74.2179 },
            }[value];
            if (newLocation && mapRef.current) {
                setDataset({ ...dataset, state: value, stateLat: newLocation.lat, stateLong: newLocation.lng });
                mapRef.current.flyTo(newLocation, 6);
            }
        } else {
            setDataset({ ...dataset, [name]: value });
        }
    };

    return (
        <main className="min-h-screen items-center my-6">
            <div className="flex flex-col max-w-7xl mx-auto gap-y-6">
                <h1 className="text-3xl font-bold text-neutral-900">DUT Dashboard</h1>

                {/* Filters */}
                <div className="flex justify-start gap-x-6 p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center gap-x-3">
                        <label htmlFor="dateRange" className="block text-sm font-medium text-neutral-700">Date Range:</label>
                        <select name="dateRange" className="block w-full bg-neutral-50 border border-neutral-300 text-neutral-900 rounded-md py-2 px-3 focus:ring-2 focus:ring-neutral-800" onChange={handleChange}>
                            <option value="prvY">Previous Year</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <label htmlFor="state" className="block text-sm font-medium text-neutral-700">State:</label>
                        <select name="state" className="block w-full bg-neutral-50 border border-neutral-300 text-neutral-900 rounded-md py-2 px-3 focus:ring-2 focus:ring-neutral-800" onChange={handleChange} defaultValue="tx">
                            <option value="tx">Texas</option>
                            <option value="ca">California</option>
                            <option value="fl">Florida</option>
                            <option value="ny">New York</option>
                        </select>
                    </div>
                </div>

                {/* Map */}
                <div className="relative bg-white rounded-lg shadow-sm overflow-hidden">
                    <MapContainer
                        whenCreated={(map) => (mapRef.current = map)}
                        className="w-full h-[500px]"
                        center={[dataset.stateLat, dataset.stateLong]}
                        zoom={6}
                        maxZoom={18}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <MarkerClusterGroup chunkedLoading>
                            {dataDUTInfo.map((dut, idx) => (
                                <Marker
                                    key={`marker-${idx}`}
                                    position={[dut.lat, dut.long]}
                                    icon={L.divIcon({ html: svgMarker(dut.dl) })}
                                    eventHandlers={{
                                        click: () => {
                                            setArrDL(generalHelper.getRandomNumbers(365, 10, 500, 35));
                                            setArrUL(generalHelper.getRandomNumbers(365, 10, 500, 35));
                                        },
                                    }}
                                >
                                    <Popup>
                                        <div className="font-bold">{dut.name}</div>
                                        <div>City: {dut.city}</div>
                                        <div>DL: {dut.dl} Mbps</div>
                                        <div>UL: {dut.ul} Mbps</div>
                                    </Popup>
                                </Marker>
                            ))}
                        </MarkerClusterGroup>
                    </MapContainer>
                    <div className="absolute top-4 left-4 bg-white/80 p-2 rounded-md shadow-md text-sm text-neutral-700">
                        Click on the markers for more details.
                    </div>
                </div>

                {/* Heatmap */}
                {(arrDLYear && arrULYear) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="w-full bg-white p-4 rounded-lg shadow-sm">
                            <ReactApexChart
                                series={arrDLYear.reverse()}
                                type="heatmap"
                                height={350}
                                options={{
                                    title: { text: "Downlink Throughput (Mbps)", align: 'left' },
                                    chart: { type: 'heatmap' },
                                    xaxis: { type: 'category', tickAmount: 15, min: 1, max: 31 },
                                    plotOptions: { heatmap: { colorScale: { ranges: arrColorRange } } },
                                    dataLabels: { enabled: false },
                                    colors: arrColorRange.map(r => r.color),
                                }}
                            />
                        </div>
                        <div className="w-full bg-white p-4 rounded-lg shadow-sm">
                            <ReactApexChart
                                series={arrULYear.reverse()}
                                type="heatmap"
                                height={350}
                                options={{
                                    title: { text: "Uplink Throughput (Mbps)", align: 'left' },
                                    chart: { type: 'heatmap' },
                                    xaxis: { type: 'category', tickAmount: 15, min: 1, max: 31 },
                                    plotOptions: { heatmap: { colorScale: { ranges: arrColorRange } } },
                                    dataLabels: { enabled: false },
                                    colors: arrColorRange.map(r => r.color),
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default PageDashDUT;