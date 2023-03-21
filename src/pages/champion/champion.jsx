import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import "./champion.scss";
import {
  Chart as ChartJs,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import ImagesData from "../../../public/ImagesData";

ChartJs.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Champion = () => {
  const [chartData, setChartData] = useState({});
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery(
    ["Champion", id],
    async () => {
      const response = await fetch(
        `http://ddragon.leagueoflegends.com/cdn/13.5.1/data/pl_PL/champion/${id}.json`
      );
      const data = await response.json();
      console.log(Object.values(data.data));
      return Object.values(data.data);
    },
    {
      onSuccess: (data) => {
        console.log(data);
        console.log(Array.isArray(data));
        if (data.length === 0) {
          return null;
        }
        // console.log(data[0].info);
        const chartData = {
          labels: data[0].info,
          datasets: [
            {
              label: "diagram",
              data: Object.values(data[0].info),
              fill: true,
              borderColor: [
                "rgb(244,3,23)",
                "rgb(255, 205, 86)",
                "rgb(255, 205, 86)",
                "rgb(255, 205, 86)",
              ],
            },
          ],
        };

        console.log(chartData);
        setChartData(chartData);
      },
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  return (
    <div className="wrapper">
      {data.map((champ) => {
        return (
          <>
            <div className="wrapper__champion" key={champ.key}>
              <div
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/ImagesData/splash/${champ.id}_0.jpg)`,
                }}
                className="wrapper__champion__avatar"
              >
                <div className="wrapper__champion-title">{champ.title}</div>
                <div className="wrapper__champion-subtitle">{champ.name}</div>
              </div>
            </div>
            <span className="stat-span">STATYSTYKI</span>
            <div className="wrapper__statistics">
              <div className="statistics__spec">
                <span className="statistics__spec-role">{champ.tags[0]}</span>
                <div className="spec-chart"></div>
              </div>
              <div className="statistics__basic">
                <span className="statistics__basic-attack">attack</span>
                <span className="statistics__basic-defense">defense</span>
                <span className="statistics__basic-magic">magic </span>
                <span className="statistics__basic-difficulty">difficulty</span>
              </div>
            </div>
          </>
        );
      })}
      {/* {chartData.labels && (
        <Line
          data={chartData}
          options={{
            plugins: {
              Legend: { position: "top" },
              title: { display: true, text: "" },
            },
          }}
        />
      )} */}
    </div>
  );
};

export default Champion;
