import React from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from "react-simple-maps"
import dataGeo from "./../data/topo-counties-10m.json";
import dataMarkers from "../data/dataTexasGateways.json";
import dataCounties from "../data/dataCounties";


const ComMapUS = ({ highlightState }) => {
    const [position, setPosition] = React.useState({ coordinates: [0, 0], zoom: 1 });
    const hightlightIds = dataCounties?.filter(county => county.state === highlightState).map(county => county.id) || [];
    console.log("hightlightIds", hightlightIds)

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
            //width={800}
            //height={500}
            //projection="geoAzimuthalEqualArea"
            projection="geoAlbersUsa"
            projectionConfig={{
                rotate: [0, 0, 0],
                center: [0, 0],
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
                        geographies.map((geo) => {
                            return <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={(hightlightIds.length && hightlightIds.includes(geo.id)) ? "#64748b" : "#e2e8f0"}
                                hover={{ fill: "#f59e0b" }}
                                //outline="none"
                                //stroke="#fff"
                                //strokeWidth={1}
                                style={{
                                    // default: {
                                    //     fill: "#D6D6DA",
                                    //     outline: "none"
                                    // },
                                    hover: {
                                        fill: "#f59e0b",
                                        outline: "none"
                                    },
                                    // pressed: {
                                    //     fill: "#642",
                                    //     outline: "none"
                                    // }
                                }}
                                onMouseEnter={() => {
                                    //setTooltipContent(`${geo.properties.name}`);
                                    console.log("setTooltipContent", geo.id)
                                }}
                                onMouseLeave={() => {
                                    //setTooltipContent("");
                                    //console.log("setTooltipContent", "")
                                }}
                            />
                        })
                    }
                </Geographies>
                {dataMarkers?.map(marker =>
                    <Marker key={marker.id} coordinates={[marker.lng, marker.lat]}>
                        <circle fill="#F53" stroke="#FFF" strokeWidth={1} r={marker.scale * 20} />
                        {/* <text y="2" fontSize={14} textAnchor="middle">{marker.name}</text> */}
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