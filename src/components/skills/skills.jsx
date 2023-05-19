import React, { useState } from "react";
import "./skills.scss";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

const Skills = ({ data }) => {
  const [skillInfo, setSkillInfo] = useState("");
  const [championSkill, setChampionSkill] = useState("");
  const [skillName, setSkillName] = useState("");
  const [active, setAcctive] = useState(null);
  let cleanSkillInfo = skillInfo.replace(/<[^>]+>/g, "");
  return (
    <>
      <div className="skills">
        <h2>Umiejętności</h2>
        <ul className="skills__panel">
          <li>
            <img
              className={active === 0 ? "active" : null}
              onClick={() => {
                setSkillInfo(data.passive.description);
                setChampionSkill("P");
                setSkillName(data.passive.name);
                setAcctive(0);
              }}
              src={`${process.env.PUBLIC_URL}/ImagesData/passive/${data.id}.png`}
              alt="pass"
            />
          </li>
          <li>
            <img
              className={active === 1 ? "active" : null}
              onClick={() => {
                setSkillInfo(data.spells[0].description);
                setChampionSkill("Q");
                setSkillName(data.passive.name);
                setAcctive(1);
              }}
              src={`${process.env.PUBLIC_URL}/ImagesData/spell/${data.spells[0].id}.png`}
              alt="Q"
            />
          </li>
          <li>
            <img
              className={active === 2 ? "active" : null}
              onClick={() => {
                setSkillInfo(data.spells[1].description);
                setChampionSkill("W");
                setSkillName(data.spells[1].name);
                setAcctive(2);
              }}
              src={`${process.env.PUBLIC_URL}/ImagesData/spell/${data.spells[1].id}.png`}
              alt="W"
            />
          </li>
          <li>
            <img
              className={active === 3 ? "active" : null}
              onClick={() => {
                setSkillInfo(data.spells[2].description);
                setChampionSkill("E");
                setSkillName(data.spells[2].name);
                setAcctive(3);
              }}
              src={`${process.env.PUBLIC_URL}/ImagesData/spell/${data.spells[2].id}.png`}
              alt="E"
            />
          </li>
          <li>
            <img
              className={active === 4 ? "active" : null}
              onClick={() => {
                setSkillInfo(data.spells[3].description);
                setChampionSkill("R");
                setSkillName(data.spells[3].name);
                setAcctive(4);
              }}
              src={`${process.env.PUBLIC_URL}/ImagesData/spell/${data.spells[3].id}.png`}
              alt="R"
            />
          </li>
        </ul>
        <div className="skills__display">
          {championSkill ? (
            <div>
              <div className="container">
                <ReactPlayer
                  url={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${data.key}/ability_0${data.key}_${championSkill}1.mp4`}
                  fallback={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${data.key}/ability_0${data.key}_${championSkill}1.webm`}
                  playing
                  muted
                  loop
                  width="100%"
                  height="100%"
                  config={{
                    file: {
                      attributes: {
                        controlsList: "nodownload",
                      },
                      sources: [
                        {
                          src: `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${data.key}/ability_0${data.key}_${championSkill}1.mp4`,
                          type: "video/mp4",
                        },
                        {
                          src: `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${data.key}/ability_0${data.key}_${championSkill}1.webm`,
                          type: "video/webm",
                        },
                      ],
                    },
                  }}
                />
              </div>
              <div className="description-wrapper">
                <div className="description-wrapper__key">{championSkill}</div>
                <div className="description-wrapper__name">{skillName}</div>
                <div className="description-wrapper__description">
                  {cleanSkillInfo}
                </div>
              </div>
            </div>
          ) : (
            <span> wybierz umiejętność</span>
          )}
        </div>
      </div>
    </>
  );
};
Skills.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Skills;
