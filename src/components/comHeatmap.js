import React from 'react';

const ComHeatmap = ({ data, color }) =>
    <div className="heatmap relative flex flex-col full-width w-full">
        {console.log("ComHeatmap:data", data)}
        <table>
            <thead>
                <tr>
                    <th></th>
                    {data.columns.map(col => <th className={"font-light text-xs"} key={col}>{col}</th>)}
                </tr>
            </thead>

            <tbody>
                {Object.keys(data.rows).map(row =>
                    <tr key={row}>
                        <td>
                            <span className='whitespace-nowrap text-sm'>{row}</span>
                        </td>
                        {data.rows[row].map((cell, index) =>
                            <td
                                key={index}
                                data-content={`${row}, ${data.columns[index]}: ${cell}`}
                                className={`tooltip border-white border-2 lg:border-4 bg-${color}-${(cell <= 10) ? 50 : Math.trunc((cell - 1) / 10.0) * 100}`}
                            ></td>
                        )}
                    </tr>
                )}
            </tbody>
        </table>
    </div>


export default ComHeatmap;