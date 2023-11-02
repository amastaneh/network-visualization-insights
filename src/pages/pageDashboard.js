import React from "react"
import ComMap from "../components/comMap"
import ComHeatmap from './../components/comHeatmap';
import dataHeatmap from "../data/dataHeatmap";

const PageDashboard = () => {
    return <main className="min-h-screen max-w-fit mx-auto place-items-top py-8 ">
        <div className="flex justify-start gap-x-4">

            {/* Filters */}
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
                <select className="block w-full bg-white border border-slate-300 rounded py-0 px-2">
                    <option value="ca">California</option>
                    <option value="tx">Texas</option>
                    <option value="ny">New York</option>
                    <option value="fl">Florida</option>
                    <option value="il">Illinois</option>
                </select>
            </div>
        </div>

        {/* Map */}
        <div className="flex flex-col my-4">
            <div className="flex flex-row justify-between">
                <ComMap />
            </div>
        </div>

        <div className="flex justify-start gap-x-4">
            <ComHeatmap data={dataHeatmap} />
        </div>
    </main>
}


export default PageDashboard