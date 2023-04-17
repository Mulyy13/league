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
  const [skillName, setSkillName] = useState("");
  const [skinPreview, setSkinPreview] = useState(
    ""
    // `${process.env.PUBLIC_URL}/ImagesData/splash/${champ.id}_${skin.num}.jpg`
  );
  const [middleSkinVertical, setMiddleSkinVertical] = useState(null);
  const [skinsCount, setSkinsCount] = useState(null);
  const skinWidth = 110;
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
    <div className="champion">
      {data.map((champ) => {
        return (
          <>
            <div className="profile" key={champ.key}>
              <div
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/ImagesData/splash/${champ.id}_0.jpg)`,
                }}
                className="profile__avatar"
              >
                <div className="profile__title">{champ.name}</div>
              </div>
            </div>
            <div className="border-subtitle">
              <span>{champ.title}</span>
            </div>
            <div className="about">
              <h1 className="about__opis">Opis Postaci</h1>
              <p className="about__champion-history">{champ.lore}</p>
            </div>
            <div className="wrapper-bigger">
              <div className="wrapper-smaller">
                <div className="statistics">
                  <div className="statistics__specification">
                    <span className="role">
                      {champ.tags[0]}
                      {champ.tags[1] ? ` / ${champ.tags[1]}` : null}
                    </span>
                    <div className="chart"></div>
                  </div>
                  <div className="statistics__basic">
                    <div>
                      <span style={{ color: "grey" }}>
                        Trudność : {champ.info.difficulty}
                      </span>
                      <span style={{ color: "rgb(160, 69, 160)" }}>
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
                      <span style={{ color: "red" }}>
                        Atak : {champ.info.attack}
                      </span>
                      <span style={{ color: "rgb(71, 71, 245)" }}>
                        Defensywa : {champ.info.defense}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="skills">
                  <span>umiejętności</span>
                  <ul className="skills__panel">
                    <li
                      onClick={() => {
                        setSkillInfo(champ.passive.description);
                        setChampionSkill("P");
                        setSkillName(champ.passive.name);
                        // setSkillKey();
                      }}
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/ImagesData/passive/${champ.id}.png`}
                        alt="pass"
                      />
                    </li>
                    <li
                      onClick={() => {
                        setSkillInfo(champ.spells[0].description);
                        setChampionSkill("Q");
                        setSkillName(champ.spells[0].name);
                      }}
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/ImagesData/spell/${champ.spells[0].id}.png`}
                        alt="Q"
                      />
                    </li>
                    <li
                      onClick={() => {
                        setSkillInfo(champ.spells[1].description);
                        setChampionSkill("W");
                        setSkillName(champ.spells[1].name);
                      }}
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/ImagesData/spell/${champ.spells[1].id}.png`}
                        alt="W"
                      />
                    </li>
                    <li
                      onClick={() => {
                        setSkillInfo(champ.spells[2].description);
                        setChampionSkill("E");
                        setSkillName(champ.spells[2].name);
                      }}
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/ImagesData/spell/${champ.spells[2].id}.png`}
                        alt="E"
                      />
                    </li>
                    <li
                      onClick={() => {
                        setSkillInfo(champ.spells[3].description);
                        setChampionSkill("R");
                        setSkillName(champ.spells[3].name);
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
                        <div className="description-wrapper">
                          <div className="description-wrapper__key">
                            {championSkill}
                          </div>
                          <div className="description-wrapper__name">
                            {skillName}
                          </div>
                          <div className="description-wrapper__description">
                            {skillInfo}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <span> wybierz umiejętność</span>
                    )}
                  </div>
                </div>
                <div className="skins">
                  <div
                    className="skins__panel"
                    style={{
                      backgroundImage: `url(${skinPreview})`,
                      transition: "0.6s",
                    }}
                  >
                    <div
                      className="panel__container"
                      style={{
                        justifyContent:
                          champ.skins.length >= 9 ? "baseline" : "center",
                      }}
                    >
                      <ul>
                        {champ.skins.map((skin, index) => (
                          <li
                            key={index}
                            onClick={(e) => {
                              setSkinsCount(champ.skins.length);
                              const verticalMiddle = skinsCount * skinWidth;
                              const verticalPositionElement = e.clientX;
                              // setSkinIndex(index);

                              setMiddleSkinVertical(
                                verticalMiddle - verticalPositionElement
                              );
                              console.log(verticalPositionElement);
                              setSkinPreview(
                                `${process.env.PUBLIC_URL}/ImagesData/splash/${champ.id}_${skin.num}.jpg`
                              );
                              console.log(skinsCount);
                            }}
                            style={{
                              transform: `translateX(${
                                middleSkinVertical - 500
                              }px)`,
                              transition: "1s",
                            }}
                          >
                            <img
                              src={`${process.env.PUBLIC_URL}/ImagesData/tiles/${champ.id}_${skin.num}.jpg`}
                              alt="e"
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tips">
                  <ul className="tips__ally">
                    <div className="tips-ally__title">Granie</div>
                    {champ.allytips.map((tip, index) => (
                      <li key={index}> {tip} </li>
                    ))}
                  </ul>
                  <ul className="tips__enemy">
                    <div className="tips-enemy__title">Kontrowanie</div>
                    {champ.enemytips.map((tip, index) => (
                      <li key={index}> {tip} </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Champion;
