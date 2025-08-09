import React from 'react';
import { colorHelper } from '../helper/colorHelper';

const ComHeatmap = ({ data, color, type }) => {
    const min = Math.min(...Object.values(data.rows).flatMap(row => row));
    const max = Math.max(...Object.values(data.rows).flatMap(row => row));
    const getColorShade = (cell) => {
        const value = ((cell - min) / (max - min)) * 100;
        return (value <= 10) ? 100 : Math.min(900, Math.trunc(value / 10) * 100);
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="p-2 text-left text-sm font-medium text-neutral-500"></th>
                        {data.columns.map(col => (
                            <th className="p-2 text-center text-xs font-normal text-neutral-500" key={col}>
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data.rows).map(row => (
                        <tr key={row}>
                            <td className="p-2 text-sm text-neutral-700 whitespace-nowrap">{row}</td>
                            {data.rows[row].map((cell, index) => (
                                <td
                                    key={index}
                                    className="relative group border-2 border-white"
                                    style={{ backgroundColor: colorHelper.getColorCode(color, getColorShade(cell)) }}
                                >
                                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max p-2 text-xs text-white bg-neutral-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                        {`${type}: ${cell}`}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ComHeatmap;