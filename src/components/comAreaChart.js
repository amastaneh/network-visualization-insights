import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { colorHelper } from '../helper/colorHelper';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const ComAreaChart = ({ data, color, type }) =>
    <Line
        options={{
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                },
            },
        }}
        data={{
            labels: data.columns,
            datasets: Object.keys(data.rows).map(row => {
                return {
                    fill: false,
                    label: row,
                    data: data.rows[row],
                    borderColor: colorHelper.getColorCode(color, 500),
                    backgroundColor: colorHelper.getColorCode("slate", 100, 0.5),
                }
            })
        }}
    />


export default ComAreaChart;