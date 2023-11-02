import React from 'react';
import * as d3 from 'd3';
import dataGeo from './../data/dataGeo.json';

const ComMap = () => {
    const projection = d3
        // .geoAlbersUsa()
        // .scale(1300)
        // .translate([487.5, 305])
        .geoAlbers()
        .precision(0)
        .rotate([90, 0, 0])
        .fitExtent([[0, 0], [96 * 10, 48 * 10],], dataGeo)
    const path = d3
        .geoPath()
        .projection(projection);


    React.useEffect(() => {
        d3
            .select("body")
            .append("div")
            .attr("id", "tooltip")
            .attr("style", "position: absolute; opacity: 0");
    }, []);


    const handleMouseOver = function (tooltipData) {
        d3
            .select("#tooltip")
            .style("opacity", 1)
            .style("background-color", "slategray")
            .text(tooltipData);
    };

    const handleMouseOut = function () {
        d3
            .select("#tooltip")
            .style("opacity", 0);
    };

    const handleMouseMove = function (event) {
        d3
            .select("#tooltip")
            .style("left", event.pageX + 10 + "px")
            .style("top", event.pageY + 10 + "px");
    };

    return <svg className="map-canvas h-[360px] w-[960px] border bg-slate-50 shadow-sm">
        <g>
            {dataGeo.features.map((data) =>
                <path
                    key={data.properties.FID}
                    className="path fill-slate-300 stroke-white stroke-1 hover:cursor-pointer hover:fill-orange-400 hover:opacity-50"
                    d={path(data)}
                    onMouseOver={() => { handleMouseOver(data.properties["NAME_ENG"]); }}
                    onMouseOut={handleMouseOut}
                    onMouseMove={(e) => { handleMouseMove(e); }}
                />
            )}
        </g>
    </svg>
}

export default ComMap