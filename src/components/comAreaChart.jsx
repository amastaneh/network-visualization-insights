import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { colorHelper } from '../helper/colorHelper';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const ComAreaChart = ({ data, color, type }) => (
    <Line
        height="350px"
        options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: `${type} Over Time`,
                    font: {
                        size: 18,
                    },
                    padding: {
                        bottom: 20,
                    }
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: colorHelper.getColorCode('neutral', 200),
                    },
                },
                x: {
                    grid: {
                        display: false,
                    },
                },
            },
        }}
        data={{
            labels: data.columns,
            datasets: Object.keys(data.rows).map((row) => ({
                fill: true,
                label: row,
                data: data.rows[row],
                borderColor: colorHelper.getColorCode(color, 500),
                backgroundColor: colorHelper.getColorCode(color, 200, 0.5),
                tension: 0.3,
            })),
        }}
    />
);

export default ComAreaChart;