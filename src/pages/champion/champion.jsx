import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import "./champion.scss";
import ReactPlayer from "react-player";
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
import { PolarArea } from "react-chartjs-2";

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

const Champion = () => {
  const [skillInfo, setSkillInfo] = useState("");
  const [chartData, setChartData] = useState({});
  const [championSkill, setChampionSkill] = useState("");

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
        if (data.length === 0) {
          return null;
        }
        const chartData = {
          labels: [],
          datasets: [
            {
              data: Object.values(data[0].info),

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
        // console.log(Object.values(chartData.labels));
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
            <div className="wrapper__about">{champ.lore}</div>
            <span className="stat-span">STATYSTYKI</span>
            <div className="wrapper__statistics">
              <div className="statistics__spec">
                <span className="statistics__spec-role">
                  {champ.tags[0]}
                  {champ.tags[1] ? ` / ${champ.tags[1]}` : null}
                </span>
                <div className="spec-chart"></div>
              </div>
              <div className="statistics__basic">
                <div>
                  <span className="statistics__basic-attack">
                    Trudność : {champ.info.difficulty}
                  </span>
                  <span className="statistics__basic-defense">
                    Moc : {champ.info.magic}
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
                  <span className="statistics__basic-magic">
                    Atak : {champ.info.attack}
                  </span>
                  <span className="statistics__basic-difficulty">
                    Defensywa : {champ.info.defense}
                  </span>
                </div>
              </div>
            </div>
            <div className="wrapper__skills">
              <span>umiejętności</span>
              <ul className="skills__panel">
                <li
                  className="skills__panel-passive"
                  onClick={() => {
                    setSkillInfo(champ.passive.description);
                    setChampionSkill("P");
                  }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/ImagesData/passive/${champ.id}.png`}
                    alt="pass"
                  />
                </li>
                <li
                  className="skills__panel-Q"
                  onClick={() => {
                    setSkillInfo(champ.spells[0].description);
                    setChampionSkill("Q");
                  }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/ImagesData/spell/${champ.spells[0].id}.png`}
                    alt="Q"
                  />
                </li>
                <li
                  className="skills__panel-W"
                  onClick={() => {
                    setSkillInfo(champ.spells[1].description);
                    setChampionSkill("W");
                  }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/ImagesData/spell/${champ.spells[1].id}.png`}
                    alt="W"
                  />
                </li>
                <li
                  className="skills__panel-E"
                  onClick={() => {
                    setSkillInfo(champ.spells[2].description);
                    setChampionSkill("E");
                  }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/ImagesData/spell/${champ.spells[2].id}.png`}
                    alt="E"
                  />
                </li>
                <li
                  className="skills__panel-R"
                  onClick={() => {
                    setSkillInfo(champ.spells[3].description);
                    setChampionSkill("R");
                  }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/ImagesData/spell/${champ.spells[3].id}.png`}
                    alt="R"
                  />
                </li>
              </ul>
              <div className="skills__display">
                {championSkill ? (
                  <div>
                    <ReactPlayer
                      url={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${champ.key}/ability_0${champ.key}_${championSkill}1.mp4`}
                      fallback={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${champ.key}/ability_0${champ.key}_${championSkill}1.webm`}
                      playing
                      muted
                      loop
                      width={530}
                      height={360}
                      config={{
                        file: {
                          attributes: {
                            controlsList: "nodownload",
                          },
                          sources: [
                            {
                              src: `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${champ.key}/ability_0${champ.key}_${championSkill}1.mp4`,
                              type: "video/mp4",
                            },
                            {
                              src: `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${champ.key}/ability_0${champ.key}_${championSkill}1.webm`,
                              type: "video/webm",
                            },
                          ],
                        },
                      }}
                    />
                    <div className="skills__display-description">
                      {skillInfo}
                    </div>
                  </div>
                ) : (
                  <span> wybierz umiejętność</span>
                )}
              </div>
            </div>
            <span className="tips-span">Porady</span>
            <div className="wrapper__tips">
              <ul className="wrapper__tips-ally">
                <div className="tips-ally__title">Granie</div>
                {champ.allytips.map((tip, index) => (
                  <li key={index}> {tip} </li>
                ))}
              </ul>
              <ul className="wrapper__tips-enemy">
                <div className="tips-enemy__title">Kontrowanie</div>
                {champ.enemytips.map((tip, index) => (
                  <li key={index}> {tip} </li>
                ))}
              </ul>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Champion;
