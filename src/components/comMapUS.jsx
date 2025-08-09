import React from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from "react-simple-maps";
import dataGeo from "./../data/topo-counties-10m.json";
import dataUSRegions from "../data/dataUSRegions";
import dataUSCounties from "../data/dataUSCounties";

const ComMapUS = ({ highlightState }) => {
    const [position, setPosition] = React.useState({ coordinates: [-98, 38], zoom: 1 });
    const hightlightIds = dataUSCounties?.filter(county => county.state === highlightState).map(county => county.id) || [];

    function handleZoomIn() {
        if (position.zoom >= 4) return;
        setPosition(pos => ({ ...pos, zoom: pos.zoom * 1.5 }));
    }

    function handleZoomOut() {
        if (position.zoom <= 1) return;
        setPosition(pos => ({ ...pos, zoom: pos.zoom / 1.5 }));
    }

    return (
        <div className="relative w-full bg-neutral-100 rounded-lg">
            <ComposableMap projection="geoAlbersUsa">
                <ZoomableGroup zoom={position.zoom} center={position.coordinates}>
                    <Geographies geography={dataGeo}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={hightlightIds.includes(geo.id) ? "#94a3b8" : "#e2e8f0"}
                                    stroke="#ffffff"
                                    strokeWidth={0.5}
                                    style={{
                                        default: { outline: "none" },
                                        hover: { fill: "#64748b", outline: "none" },
                                        pressed: { fill: "#64748b", outline: "none" }
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                    {dataUSRegions.map(region => (
                        <Marker key={region.id} coordinates={[region.lng, region.lat]}>
                            <circle r={8} fill="#3b82f6" stroke="#fff" strokeWidth={2} />
                            <text y="3" fontSize={8} textAnchor="middle" fill="#fff">
                                {region.name}
                            </text>
                        </Marker>
                    ))}
                </ZoomableGroup>
            </ComposableMap>
            <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                <button onClick={handleZoomIn} className='w-8 h-8 flex items-center justify-center bg-white rounded-md shadow-md hover:bg-neutral-100 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="#334155" strokeWidth="3">
                        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </button>
                <button onClick={handleZoomOut} className='w-8 h-8 flex items-center justify-center bg-white rounded-md shadow-md hover:bg-neutral-100 *:cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="#334155" strokeWidth="3">
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ComMapUS;