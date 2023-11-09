import React from "react"
import dataHeatmapDS from "../data/dataHeatmapDS";
import dataHeatmapUS from "../data/dataHeatmapUS";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from '@changey/react-leaflet-markercluster';
import dataDUTInfo from "../data/dataDUTInfo";
import ReactApexChart from "react-apexcharts";
import { generalHelper } from "../helper/generalHelper";
import L from 'leaflet';
//import { colorHelper } from "../helper/colorHelper";


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
    const svgMarker = (dl, ul) => `
    <div class="w-12 h-12">
        <svg viewBox="0 0 24 24" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" fill="#000000">
            <g stroke-width="0"></g>
            <g stroke-linecap="round" stroke-linejoin="round"></g>
            <g>
                <g transform="translate(0 -1028.4)">
                    <path fill="${dl < 30 ? '#e74c3c' : dl < 300 ? '#3498db' : '#27ae60'}" d="m12 0c-4.4183 2.3685e-15 -8 3.5817-8 8 0 1.421 0.3816 2.75 1.0312 3.906 0.1079 0.192 0.221 0.381 0.3438 0.563l6.625 11.531 6.625-11.531c0.102-0.151 0.19-0.311 0.281-0.469l0.063-0.094c0.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z" transform="translate(0 1028.4)"></path>
                    <path fill="${dl < 30 ? '#c0392b' : dl < 300 ? '#2980b9' : '#2ecc71'}" d="m12 3c-2.7614 0-5 2.2386-5 5 0 2.761 2.2386 5 5 5 2.761 0 5-2.239 5-5 0-2.7614-2.239-5-5-5zm0 2c1.657 0 3 1.3431 3 3s-1.343 3-3 3-3-1.3431-3-3 1.343-3 3-3z" transform="translate(0 1028.4)" ></path>
                </g>
            </g>
        </svg>
    </div>`
    // const svgMarker2 = (dl, ul) => `
    //     <div class="w-12 h-12">
    //         <svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="100%" viewBox="0 0 850 850" enable-background="new 0 0 850 850" xml: space="preserve">
    //             <path fill="${colorHelper.percentageToGreen(dl / 5.0)}" opacity="1.0" stroke="none" d=" M63.188370,544.961304   C63.155170,543.129517 63.092957,541.297668 63.092907,539.465881   C63.088440,378.476929 63.088779,217.487946 63.088779,56.498985   C63.088779,54.672771 63.088779,52.846558 63.088779,50.740208   C64.372650,50.568668 65.476364,50.292103 66.580086,50.292053   C183.071838,50.287086 299.563568,50.302891 416.497681,50.693756   C416.966095,51.394131 416.992035,51.718224 417.027405,52.506126   C417.049835,272.420258 417.065247,491.870605 417.032898,711.320923   C417.032623,713.197754 416.389374,715.074524 415.901123,716.633362   C413.834015,712.543884 411.912170,708.772339 409.969238,704.638428   C386.523499,654.119690 365.126831,603.114197 346.122742,551.119873   C344.703278,547.236267 343.016602,545.887207 338.784668,545.893860   C249.198639,546.034058 159.612381,546.000732 70.026154,545.994934   C68.029869,545.994812 66.033585,545.920593 63.928490,545.697998   C63.668697,545.262756 63.458260,545.078125 63.188370,544.961304  z" />
    //             <path fill="${colorHelper.percentageToRed(ul / 5.0)}" opacity="1.0" stroke="none" d=" M417.017822,52.042324   C416.992035,51.718224 416.966095,51.394131 416.945007,50.826309   C419.103607,50.475555 421.257263,50.275249 423.410950,50.274883   C538.882690,50.255169 654.354370,50.252289 770.458252,50.591236   C771.253845,53.751656 771.560059,56.568493 771.560425,59.385372   C771.583374,219.715118 771.580811,380.044891 771.580811,540.374634   C771.580811,542.154968 771.580872,543.935364 771.580872,546.000122   C768.946777,546.000122 766.958435,546.000122 764.970093,546.000122   C674.972107,546.000183 584.974060,546.029785 494.976288,545.898193   C491.137329,545.892578 489.580505,547.116943 488.253632,550.578979   C476.231384,581.945557 464.284027,613.346191 451.747253,644.508545   C443.557892,664.864746 434.428436,684.842651 425.467407,705.209045   C423.114197,709.920471 421.013672,714.412964 418.606171,718.631470   C418.179413,716.210327 417.954865,714.062988 417.954803,711.915710   C417.947388,494.022766 417.959564,276.129791 417.926208,58.236847   C417.925903,56.171959 417.333710,54.107162 417.017822,52.042324  z" />
    //             <path fill="#000" opacity="0.2" stroke="none" d=" M425.467407,705.209045   C442.172760,705.342346 458.653381,705.208313 475.072144,706.151123   C506.472351,707.954163 537.949768,709.407410 568.825317,716.117371   C573.800659,717.198608 578.677612,719.137085 583.297485,721.319519   C586.863342,723.004150 587.012207,726.133728 583.426392,727.581787   C576.268616,730.472412 568.870911,733.258728 561.309570,734.554016   C547.301392,736.953674 533.145508,738.784851 518.975952,739.878235   C499.138184,741.408997 479.231110,742.039368 459.356201,743.102173   C458.607208,743.142212 457.884613,743.675415 456.970093,744.320801   C429.562286,744.692688 402.334106,744.722595 374.658020,744.707520   C372.780457,744.125793 371.370178,743.183838 369.918182,743.114380   C353.339081,742.321411 336.670349,742.466858 320.190765,740.763306   C299.320312,738.605835 278.587250,735.071350 257.834320,731.875244   C254.642899,731.383728 251.537537,729.761292 248.615677,728.234619   C244.855164,726.269531 244.610474,722.937622 248.489166,721.196228   C254.184860,718.639099 260.203613,716.224182 266.319946,715.292236   C282.994385,712.751465 299.746185,710.433594 316.552673,709.116333   C337.382568,707.483582 358.295807,706.891418 379.177887,705.957764   C389.130920,705.512756 399.095123,705.317627 409.522278,705.005005   C411.912170,708.772339 413.834015,712.543884 415.909546,716.970581   C417.013184,718.052246 417.963196,718.478821 418.913177,718.905396   C421.013672,714.412964 423.114197,709.920471 425.467407,705.209045  z" />
    //         </svg>
    //     </div>`


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

    return <main className="min-h-screen items-center my-6">
        <div className="flex flex-col max-w-6xl mx-auto my-0 gap-y-4">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-gray-400">DUT Dashboard</h1>
            </div>

            {/* Filters */}
            <div className="flex justify-start gap-x-4">
                <div className="flex flex-row gap-x-2">
                    <label htmlFor="dateRange" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400 flex-shrink-0">Date Range: </label>
                    <select name="dateRange" className="block w-full bg-white border border-slate-300 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 rounded py-0 px-2" onChange={handleChange}>
                        <option disabled value="thisM">This Month</option>
                        <option disabled value="prvM">Previous Month</option>
                        <option disabled value="thisQ">This Quarter</option>
                        <option disabled value="prvQ">Previous Quarter</option>
                        <option disabled value="thisY">This Year</option>
                        <option value="prvY">Previous Year</option>
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
                                dataDUTInfo.map((dut, idx) => (
                                    <Marker
                                        key={`marker- ${idx}`}
                                        position={[dut.lat, dut.long]}
                                        icon={
                                            L.divIcon({
                                                className: 'custom-div-icon',
                                                html: svgMarker(dut.dl, dut.ul),
                                            })
                                        }
                                        clickable={true}
                                        eventHandlers={{
                                            click: () => {
                                                setArrDL(generalHelper.getRandomNumbers(30 * 13, 10, 500, 35));
                                                setArrUL(generalHelper.getRandomNumbers(30 * 13, 10, 500, 35));
                                            },
                                        }}
                                    >
                                        <Popup>
                                            <div>Position: {dut.lat}, {dut.long}</div>
                                            <div>DUT Name: {dut.name}</div>
                                            <div><span class="text-gray-500"><i class="fa-solid fa-location-dot"></i></span> City: {dut.city}</div>
                                            <div><span style={{ color: `${dut.dl < 30 ? '#e74c3c' : dut.dl < 300 ? '#3498db' : '#27ae60'}` }}><i className="fas fa-download"></i></span> DL: {dut.dl}</div>
                                            <div><span style={{ color: `${dut.ul < 30 ? '#e74c3c' : dut.ul < 300 ? '#3498db' : '#27ae60'}` }}><i className="fas fa-upload"></i></span> UL: {dut.ul}</div>
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

export default PageDashDUT