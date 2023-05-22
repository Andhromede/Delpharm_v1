import React from 'react';
import Chart from "chart.js/auto";
import { Doughnut } from 'react-chartjs-2';
import '../assets/css/stat.css'

export const CHART_COLORS = {
    red: "rgb(255, 0,0)",
    carmin: "rgb(150, 0, 24)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)",
  };

  const data1 = {
    labels: ["PQA/SD", "ATAA", "ATSA", "ATB", "MORTEL"],
    datasets: [
      {
        label: "Statistique des déclarations du mois",
        data: [1, 0, 3, 1, 0],
        borderWidth: 1,
        backgroundColor: [
          CHART_COLORS.green,
          CHART_COLORS.red,
          CHART_COLORS.yellow,
          CHART_COLORS.blue,
          CHART_COLORS.carmin,
        ],
      },
    ],
  };

const MyStats = () => {
  return (
    <div className="body mt-5">
        <h1>Mes statistiques du mois en cours</h1>
        <div className="card w-25 mx-auto mt-5 mb-5 graphMobile">
            <Doughnut data={data1} />
        </div>
    </div>
  )
}

export default MyStats;