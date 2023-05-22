import React, { useState } from "react";
import "../assets/css/account.css";
import Chart from "chart.js/auto";
import { Bar, Doughnut, Line, Radar} from "react-chartjs-2";
import "../assets/css/stat.css";

export const CHART_COLORS = {
  red: "rgb(255, 0,0)",
  carmin: "rgb(150, 0, 24)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(50,205,50)",
  blue: "rgb(54, 162, 235)",
};

const data1 = {
  labels: ["PQA/SD", "ATAA", "ATSA", "ATB", "MORTEL"],
  datasets: [
    {
      label: "Statistique des déclarations du mois",
      data: [12, 19, 3, 5, 0],
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

const data3 = {
  labels: ["Juin","Juillet","Août",
    
  ],
  datasets: [
    {
      label: "PQA/SD",
      data: ["3","60","7",],
      backgroundColor: CHART_COLORS.green,
      borderColor: CHART_COLORS.green,
      animations: {
        y: {
          duration: 2000,
          delay: 500
        }
      },
      pointStyle: 'triangle',
      pointRadius: 6,
    },
    {
      label: "ATAA",
      data: ["54","7","23",],
      backgroundColor: CHART_COLORS.red,
      borderColor: CHART_COLORS.red,
      pointStyle: 'circle',
      pointRadius: 6,
    },
    {
      label: "ATSA",
      data: ["23","18","18",],
      backgroundColor: CHART_COLORS.yellow,
      borderColor: CHART_COLORS.yellow,
      pointStyle: 'star',
      pointRadius:6,
    },
    {
      label: "ATB",
      data: ["23","23","18"],
      backgroundColor: CHART_COLORS.blue,
      borderColor: CHART_COLORS.blue,
      pointRadius: 6,
    },
    {
      label: "MORTEL",
      data: ["0", "0", "1"],
      backgroundColor: CHART_COLORS.carmin,
      borderColor: CHART_COLORS.carmin,
      pointStyle: 'triangle',
      pointRadius: 6,
    },
  ],
};

const data6 = {
  labels: ["Mars","Avril","Mai","Juin","Juillet","Août",
    
  ],
  datasets: [
    {
      label: "PQA/SD",
      data: ["3","60","7","54","7","23"],
      backgroundColor: CHART_COLORS.green,
      borderColor: CHART_COLORS.green,
      tension: 0.4,
      animations: {
        y: {
          duration: 2000,
          delay: 500
        }
      },
      pointStyle: 'triangle',
      pointRadius: 6,
    },
    {
      label: "ATAA",
      data: ["54","7","23","3","60","7"],
      backgroundColor: CHART_COLORS.red,
      borderColor: CHART_COLORS.red,
      tension: 0.4,
      pointStyle: 'circle',
      pointRadius: 6,
    },
    {
      label: "ATSA",
      data: ["23","18","18","7","23","3"],
      backgroundColor: CHART_COLORS.yellow,
      borderColor: CHART_COLORS.yellow,
      tension: 0.4,
      animations: {
        y: {
          duration: 2000,
          delay: 500
        }
      },
      pointStyle: 'star',
      pointRadius: 6,
    },
    {
      label: "ATB",
      data: ["23","23","18","7","23","3"],
      backgroundColor: CHART_COLORS.blue,
      borderColor: CHART_COLORS.blue,
      tension: 0.4,
    },
    {
      label: "MORTEL",
      data: ["0", "0", "1","0", "0", "0"],
      backgroundColor: CHART_COLORS.carmin,
      borderColor: CHART_COLORS.carmin,
      tension: 0.4,
      pointStyle: 'triangle',
      pointRadius: 6,
    },
  ],
};

const data12 = {
  labels: ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre",],
  datasets: [
    {
      label: "PQA/SD",
      data: ["3","60","7","23","18","11","3","41","7","23","18","11",],
      backgroundColor: CHART_COLORS.green,
      animations: {
        y: {
          duration: 2000,
          delay: 500
        }
      },
    },
    {
      label: "ATAA",
      data: ["7","23","18","11","3","35","56","11","3","54","7","23",],
      backgroundColor: CHART_COLORS.red,
    },
    {
      label: "ATSA",
      data: ["23", "18","11","3","23","7","11","3","21","7","23","18",],
      backgroundColor: CHART_COLORS.yellow,
    },
    {
      label: "ATB",
      data: ["23","18","11","3","23","23","18","11","3","23","23","18",],
      backgroundColor: CHART_COLORS.blue,
      animations: {
        y: {
          duration: 2000,
          delay: 500
        }
      },
    },
    {
      label: "MORTEL",
      data: ["0", "0", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      backgroundColor: CHART_COLORS.carmin,
    },
  ],
};





const Stat = () => {
  const [showGraphMonth, setShowGraphMonth] = useState(false);
  const [showGraph3Month, setShowGraph3Month] = useState(false);
  const [showGraph6Month, setShowGraph6Month] = useState(false);
  const [showGraph12Month, setShowGraph12Month] = useState(false);
  const [showGraphPyramide, setShowGraphPyramide] = useState(false);

  const handleClickGraphMonth = (event) => {
    setShowGraphMonth((current) => !current);
    setShowGraph3Month(false);
    setShowGraph6Month(false);
    setShowGraph12Month(false);
    setShowGraphPyramide(false);
  };
  const handleClickGraph3Month = (event) => {
    setShowGraph3Month((current) => !current);
    setShowGraphMonth(false);
    setShowGraph6Month(false);
    setShowGraph12Month(false);
    setShowGraphPyramide(false);
  };
  const handleClickGraph6Month = (event) => {
    setShowGraph6Month((current) => !current);
    setShowGraphMonth(false);
    setShowGraph3Month(false);
    setShowGraph12Month(false);
    setShowGraphPyramide(false);
  };
  const handleClickGraph12Month = (event) => {
    setShowGraph12Month((current) => !current);
    setShowGraphMonth(false);
    setShowGraph3Month(false);
    setShowGraph6Month(false);
    setShowGraphPyramide(false);
  };
  
  const handleClickGraphPyramide = (event) => {
    setShowGraphPyramide((current) => !current);
    setShowGraphMonth(false);
    setShowGraph3Month(false);
    setShowGraph6Month(false);
    setShowGraph12Month(false);
  };

  return (
    <div className="body">
      <div className="row mx-auto buttonGraphMobile">
        <div className="col-2 col-sm-1 mx-auto mt-5">
          <button
            className="btn bg-warning btn-block mb-4 mx-auto button3 roll-in-left"
            title="Graphique du mois en cours"
            onClick={handleClickGraphMonth}
            id="graph"
          >
            Graphique du mois en cours
          </button>
        </div>
        <div className="col-2 col-sm-1 mx-auto mt-5">
          <button
            className="btn bg-warning btn-block mb-4 mx-auto button3 roll-in-left"
            title="Graphique des 3 derniers mois"
            onClick={handleClickGraph3Month}
            id="graph"
          >
            Graphique des 3 derniers mois
          </button>
        </div>
        <div className="col-2 col-sm-1 mx-auto mt-5">
          <button
            className="btn bg-warning btn-block mb-4 mx-auto button3 roll-in-right"
            title="Graphique des 6 derniers mois"
            onClick={handleClickGraph6Month}
          >
            Graphique des 6 derniers mois
          </button>
        </div>
        <div className="col-2 col-sm-1 mx-auto mt-5">
          <button
            className="btn bg-warning btn-block mb-4 mx-auto button3 roll-in-right"
            title="Graphique des 12 mois"
            onClick={handleClickGraph12Month}
            id="graph"
          >
            Graphique des 12 mois
          </button>
        </div>
        
        <div className="col-2 col-sm-1 mx-auto mt-5">
          <button
            className="btn bg-warning btn-block mb-4 mx-auto button3 roll-in-right"
            title="Pyramide des déclarations par services"
            onClick={handleClickGraphPyramide}
          >
            Pyramide des déclarations par services
          </button>
        </div>
      </div>

      
      {showGraphMonth && (
        <div>
          <h1>Graphique du mois en cours</h1>
          <div className="card w-25 mx-auto mt-5 mb-5 graphMobile graphTablette">
            <Doughnut data={data1} />
          </div>
        </div>
      )}
      {showGraph3Month && (
        <div>
          <h1>Graphique des 3 derniers mois</h1>
          <div className="card w-50 mx-auto mt-5 mb-5 graphMobile">
            <Line data={data3} />
          </div>
        </div>
      )}
      {showGraph6Month && (
        <div>
          <h1>Graphique des 6 derniers mois</h1>
          <div className="card w-50 mx-auto mt-5 mb-5 graphMobile">
          <Line data={data6} />
          </div>
        </div>
      )}
      {showGraph12Month && (
        <div>
          <h1>Graphique des 12 mois</h1>
          <div className="card w-50 mx-auto mt-5 mb-5 graphMobile">
          <Bar data={data12} />
          </div>
        </div>
      )}
      {showGraphPyramide && (
        <div>
          <h1>Pyramide des déclarations par service</h1>
          <div className="card w-50 mx-auto mt-5 mb-5 graphMobile">
          <Radar data={data6} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Stat;
