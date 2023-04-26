import React, { useEffect, useState } from "react";
import { PolarArea } from "react-chartjs-2";
import PropTypes from "prop-types";
import "./statistics.scss";
import {
  Chart as ChartJs,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
ChartJs.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Statistics = ({ data }) => {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    console.log(data);
    const chartData = {
      labels: [],
      datasets: [
        {
          data: Object.values(data.info),

          borderColor: [
            "rgb(255,255,255)",
            "rgb(255,255,255)",
            "rgb(255,255,255)",
            "rgb(255,255,255)",
          ],
          backgroundColor: [
            "rgba( 255,0, 0)",
            "rgba( 0,0, 255)",
            "RGBA(201,56,235,0.4)",
            "rgba( 55,55, 55)",
          ],
        },
      ],
    };
    setChartData(chartData);
  }, []);

  return (
    <div className="statistics">
      <div className="statistics__specification">
        <h3 className="role-title">
          {data.tags[0]}
          {data.tags[1] ? ` / ${data.tags[1]}` : null}
        </h3>
        <div className="role-img">
          <img
            src={`${process.env.PUBLIC_URL}/ImagesData/role/${data.tags[0]}.webp`}
            alt={"jd"}
          />
        </div>
      </div>
      <div className="statistics__basic">
        <div>
          <span style={{ color: "grey" }}>
            Trudność : {data.info.difficulty}
          </span>
          <span style={{ color: "rgb(160, 69, 160)" }}>
            Moc : {data.info.magic}
          </span>
        </div>
        {chartData.labels && (
          <div className="chart-container">
            <PolarArea
              data={chartData}
              options={{
                responsive: true,
                scales: {
                  r: {
                    display: false,
                  },
                },
                plugins: {
                  Legend: { display: false },
                  title: { display: true, text: "" },
                },
              }}
            />
          </div>
        )}
        <div>
          <span style={{ color: "red" }}>Atak : {data.info.attack}</span>
          <span style={{ color: "rgb(71, 71, 245)" }}>
            Defensywa : {data.info.defense}
          </span>
        </div>
      </div>
    </div>
  );
};
Statistics.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Statistics;
