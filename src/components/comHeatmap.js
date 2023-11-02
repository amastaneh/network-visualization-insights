import React from 'react';

const ComHeatmap = ({ data, color, type }) => {
    const min = Math.min(...Object.keys(data.rows).map(row => Math.min(...data.rows[row])));
    const max = Math.max(...Object.keys(data.rows).map(row => Math.max(...data.rows[row])));
    const getColor = (cell) => {
        const value = ((cell - min) / (max - min)) * 100
        return (value <= 10) ? 50 : Math.trunc((value - 1) / 10.0) * 100
    }


    return <div className="heatmap relative flex flex-col full-width w-full">
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
                                data-content={`
Type: ${type}
Region: ${row}
Time: ${data.columns[index]}
Value: ${cell}
                                `.trim()}
                                className={`tooltip border-white border-2 lg:border-4 bg-${color}-${getColor(cell)}`}
                            ></td>
                        )}
                    </tr>
                )}
            </tbody>
        </table>
    </div>
}

export default ComHeatmap;