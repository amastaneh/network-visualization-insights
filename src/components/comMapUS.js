import React from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from "react-simple-maps"
import dataGeo from "./../data/topo-counties-10m.json";
import dataUSRegions from "../data/dataUSRegions";
import dataUSCounties from "../data/dataUSCounties";
import dataGateways from "../data/dataGateways";


const ComMapUS = ({ highlightState }) => {
    const [position, setPosition] = React.useState({ coordinates: [0, 0], zoom: 1 });
    const hightlightIds = dataUSCounties?.filter(county => county.state === highlightState).map(county => county.id) || [];
    const markers = React.useMemo(() => {
        return dataUSRegions?.map(region => {
            const gateways = dataGateways.filter(gateway => gateway.Location === region.name);
            const qty = gateways?.length || 0;
            return {
                ...region,
                qty,
                scale: qty / dataGateways.length,
                rateColor: ["emerald-600", "red-600", "amber-500"][Math.floor(Math.random() * 3)]
            }
        }) || [];
    }, []);
    console.log("markers", markers);

    function handleZoomIn() {
        if (position.zoom >= 5) return;
        setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
    }

    function handleZoomOut() {
        if (position.zoom <= 1) return;
        setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
    }

    function handleMoveEnd(position) {
        setPosition(position);
    }

    return <div className="relative flex w-full h-[400px]">
        <ComposableMap
            height={400}
            //projection="geoAzimuthalEqualArea"
            projection="geoAlbersUsa"
            projectionConfig={{
                rotate: [100, 0, 0],
                center: [100, 0],
                scale: 950,
            }}
        >
            <ZoomableGroup
                zoom={position.zoom}
                center={position.coordinates}
                onMoveEnd={handleMoveEnd}
            >
                <Geographies geography={dataGeo}>
                    {({ geographies }) =>
                        geographies.map((geo) =>
                            (hightlightIds.length && hightlightIds.includes(geo.id)) &&
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={(hightlightIds.length && hightlightIds.includes(geo.id)) ? "#94a3b8" : "#e2e8f0"}
                                hover={{ fill: "#64748b" }}
                                outline="none"
                                stroke="#fff"
                                strokeWidth={0}
                                style={{
                                    default: {
                                        //fill: "#D6D6DA",
                                        outline: "none"
                                    },
                                    hover: {
                                        fill: "#64748b",
                                        outline: "none"
                                    },
                                    pressed: {
                                        fill: "#64748b",
                                        outline: "none"
                                    }
                                }}
                                onMouseEnter={() => {
                                    //setTooltipContent(`${geo.properties.name}`);
                                    //console.log("setTooltipContent", geo.id)
                                }}
                                onMouseLeave={() => {
                                    //setTooltipContent("");
                                    //console.log("setTooltipContent", "")
                                }}
                            />
                        )
                    }
                </Geographies>
                {markers
                    ?.sort((a, b) => a.scale - b.scale)
                    ?.map(marker =>
                        <Marker key={marker.id} coordinates={[marker.lng, marker.lat]}>
                            <circle
                                className={`shadow-lg fill-current text-${marker.rateColor}`}
                                fill='#ff0000'
                                stroke="#FFF"
                                strokeWidth={0.2}
                                r={marker.scale * 20}
                                opacity={0.8}
                            />
                            <text y="0.9" fontSize={2} textAnchor="middle" fill="#FFF">{marker.name}</text>
                        </Marker>
                    )}
            </ZoomableGroup>
        </ComposableMap>
        <div className="absolute bottom-2 right-2">
            <button onClick={handleZoomIn} className='shadow-sm bg-slate-50 hover:bg-slate-100 mr-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="#0f172a" strokeWidth="3">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </button>
            <button onClick={handleZoomOut} className='shadow-sm bg-slate-50 hover:bg-slate-100'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="#0f172a" strokeWidth="3">
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </button>
        </div>
    </div>
}

export default ComMapUS