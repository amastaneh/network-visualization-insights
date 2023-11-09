import React from "react"
import dataHeatmapDS from "../data/dataHeatmapDS";
import dataHeatmapUS from "../data/dataHeatmapUS";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from '@changey/react-leaflet-markercluster';
import dataGatewayInfo from "../data/dataGatewayInfo";
import ReactApexChart from "react-apexcharts";
import { generalHelper } from "../helper/generalHelper";
import L from 'leaflet';


const PageDashGateway = () => {
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
    const [arrDL, setArrDL] = React.useState();
    const [arrUL, setArrUL] = React.useState();
    const arrDLYear = arrDL && [
        { name: 'Jan', data: arrDL.slice(30 * 0, (30 * 0) + 31) },
        { name: 'Feb', data: arrDL.slice(30 * 1, (30 * 1) + 28) },
        { name: 'Mar', data: arrDL.slice(30 * 2, (30 * 2) + 31) },
        { name: 'Apr', data: arrDL.slice(30 * 3, (30 * 3) + 30) },
        { name: 'May', data: arrDL.slice(30 * 4, (30 * 4) + 31) },
        { name: 'Jun', data: arrDL.slice(30 * 5, (30 * 5) + 30) },
        { name: 'Jul', data: arrDL.slice(30 * 6, (30 * 6) + 31) },
        { name: 'Aug', data: arrDL.slice(30 * 7, (30 * 7) + 31) },
        { name: 'Sep', data: arrDL.slice(30 * 8, (30 * 8) + 30) },
        { name: 'Oct', data: arrDL.slice(30 * 9, (30 * 9) + 31) },
        { name: 'Nov', data: arrDL.slice(30 * 10, (30 * 10) + 30) },
        { name: 'Dec', data: arrDL.slice(30 * 11, (30 * 11) + 31) },
    ]
    const arrULYear = arrUL && [
        { name: 'Jan', data: arrUL.slice(30 * 0, (30 * 0) + 31) },
        { name: 'Feb', data: arrUL.slice(30 * 1, (30 * 1) + 28) },
        { name: 'Mar', data: arrUL.slice(30 * 2, (30 * 2) + 31) },
        { name: 'Apr', data: arrUL.slice(30 * 3, (30 * 3) + 30) },
        { name: 'May', data: arrUL.slice(30 * 4, (30 * 4) + 31) },
        { name: 'Jun', data: arrUL.slice(30 * 5, (30 * 5) + 30) },
        { name: 'Jul', data: arrUL.slice(30 * 6, (30 * 6) + 31) },
        { name: 'Aug', data: arrUL.slice(30 * 7, (30 * 7) + 31) },
        { name: 'Sep', data: arrUL.slice(30 * 8, (30 * 8) + 30) },
        { name: 'Oct', data: arrUL.slice(30 * 9, (30 * 9) + 31) },
        { name: 'Nov', data: arrUL.slice(30 * 10, (30 * 10) + 30) },
        { name: 'Dec', data: arrUL.slice(30 * 11, (30 * 11) + 31) },
    ]
    const arrColorRange = [
        { name: 'Poor', color: '#FF0000', from: 0, to: 30, },
        { name: 'Good', color: '#128FD9', from: 30, to: 300, },
        { name: 'Excelent', color: '#00A100', from: 300, to: 500, },
    ]


    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        // Heatmap
        if (name === "heatmap") {
            if (value === "ds") { setDataset({ ...dataset, heatmap: value, heatmapData: dataHeatmapDS, heatmapColor: "emerald", heatmapType: "Download Speed" }); }
            else if (value === "us") { setDataset({ ...dataset, heatmap: value, heatmapData: dataHeatmapUS, heatmapColor: "red", heatmapType: "Upload Speed" }); }
            else if (value === "rsrp") { setDataset({ ...dataset, heatmap: value, heatmapData: dataHeatmapDS, heatmapColor: "cyan", heatmapType: "RSRP" }); }
            else if (value === "rsrq") { setDataset({ ...dataset, heatmap: value, heatmapData: dataHeatmapDS, heatmapColor: "rose", heatmapType: "RSRQ" }); }
            else { alert("Error: Invalid heatmap value"); }
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

    // const getIcon = (gateway) => {
    //     let icon = `        
    //     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s-8-4.5-8-11.8C4 5.01 9.33 2 12 2s8 3.01 8 8.2c0 7.3-8 11.8-8 11.8z"></path>
    //     </svg>`
    //     // if (gateway.dl < 30) { icon = L.divIcon({ className: 'marker-icon-red', html: `<div>${gateway.dl}</div>` }); }
    //     // else if (gateway.dl < 300) { icon = L.divIcon({ className: 'marker-icon-blue', html: `<div>${gateway.dl}</div>` }); }
    //     // else { icon = L.divIcon({ className: 'marker-icon-green', html: `<div>${gateway.dl}</div>` }); }
    //     // return icon;
    //     return L.divIcon({
    //         html: `<div class='p-4 bg-red-500'>AB</div>`
    //     });
    // }

    return <main className="min-h-screen items-center my-6">
        <div className="flex flex-col max-w-6xl mx-auto my-0 gap-y-4">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-gray-400">Gateway Dashboard</h1>
            </div>

            {/* Filters */}
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

            {/* Map */}
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

                        <MarkerClusterGroup animate={true} animateAddingMarkers={true}>
                            {
                                dataGatewayInfo.map((gateway, idx) => (
                                    <Marker
                                        key={`marker-${idx}`}
                                        position={[gateway.lat, gateway.long]}
                                        //icon={getIcon(gateway)}
                                        clickable={true}
                                        eventHandlers={{
                                            click: () => {
                                                setArrDL(generalHelper.getRandomNumbers(30 * 13, 10, 500, 35));
                                                setArrUL(generalHelper.getRandomNumbers(30 * 13, 10, 500, 35));
                                            },
                                        }}
                                    >
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
            <div className="flex flex-col w-full overflow-x-auto p-4">
                {arrDLYear && <ReactApexChart
                    series={arrDLYear.reverse()}
                    type="heatmap"
                    height={350}
                    options={{
                        title: { text: "Downlink Throughput" },
                        chart: { type: 'heatmap', },
                        xaxis: {
                            type: 'category',
                            tickPlacement: 'between',
                            tickAmount: 15,
                            min: 1,
                            max: 31,
                        },
                        plotOptions: {
                            heatmap: {
                                colorScale: {
                                    ranges: arrColorRange,
                                },
                            }
                        },
                        dataLabels: { enabled: false },
                        colors: ['#00A100', '#128FD9', '#FF0000'],
                        tooltip: {
                            x: {
                                show: true,
                                formatter: function (value, { _series, seriesIndex, _dataPointIndex, _w }) {
                                    return `${arrDLYear[seriesIndex].name} ${value}`
                                },
                            },
                            y: {
                                title: {
                                    formatter: (value) => "DL: ",
                                },
                                formatter: value => `${value} Mbps`
                            }
                        }
                    }}
                />}
                {arrULYear && <ReactApexChart
                    series={arrULYear.reverse()}
                    type="heatmap"
                    height={350}
                    options={{
                        title: { text: "Uplink Throughput" },
                        chart: { type: 'heatmap', },
                        xaxis: {
                            type: 'category',
                            tickPlacement: 'between',
                            tickAmount: 15,
                            min: 1,
                            max: 31,
                        },
                        plotOptions: {
                            heatmap: {
                                colorScale: {
                                    ranges: arrColorRange,
                                },
                            }
                        },
                        dataLabels: { enabled: false },
                        colors: ['#00A100', '#128FD9', '#FF0000'],
                        tooltip: {
                            x: {
                                show: true,
                                formatter: function (value, { _series, seriesIndex, _dataPointIndex, _w }) {
                                    return `${arrDLYear[seriesIndex].name} ${value}`
                                },
                            },
                            y: {
                                title: {
                                    formatter: (value) => "DL: ",
                                },
                                formatter: value => `${value} Mbps`
                            }
                        }
                    }}
                />}
            </div>
        </div>
    </main>
}

export default PageDashGateway