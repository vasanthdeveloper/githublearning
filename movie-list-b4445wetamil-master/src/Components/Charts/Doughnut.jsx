import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      display: true
    },
    title: {
      display: false
    }
  },
  cutoutPercentage: 100
};

export const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [15, 55, 30],
      backgroundColor: ["#36b9cc", "#4e73df", "#1cc88a"],
      borderWidth: 4
    }
  ]
};

function DoughnutChart() {
  return <Doughnut options={options} data={data} />;
}


export default DoughnutChart;
