import React, { useState } from "react";
import "./skills.scss";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

const Skills = ({ data }) => {
  const [skillInfo, setSkillInfo] = useState("");
  const [championSkill, setChampionSkill] = useState("");
  const [skillName, setSkillName] = useState("");

  return (
    <>
      <div className="skills">
        {data.name}
        <h2>Umiejętności</h2>
        <ul className="skills__panel">
          <li
            onClick={() => {
              setSkillInfo(data.passive.description);
              setChampionSkill("P");
              setSkillName(data.passive.name);
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/ImagesData/passive/${data.id}.png`}
              alt="pass"
            />
          </li>
          <li
            onClick={() => {
              setSkillInfo(data.spells[0].description);
              setChampionSkill("Q");
              setSkillName(data.spells[0].name);
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/ImagesData/spell/${data.spells[0].id}.png`}
              alt="Q"
            />
          </li>
          <li
            onClick={() => {
              setSkillInfo(data.spells[1].description);
              setChampionSkill("W");
              setSkillName(data.spells[1].name);
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/ImagesData/spell/${data.spells[1].id}.png`}
              alt="W"
            />
          </li>
          <li
            onClick={() => {
              setSkillInfo(data.spells[2].description);
              setChampionSkill("E");
              setSkillName(data.spells[2].name);
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/ImagesData/spell/${data.spells[2].id}.png`}
              alt="E"
            />
          </li>
          <li
            onClick={() => {
              setSkillInfo(data.spells[3].description);
              setChampionSkill("R");
              setSkillName(data.spells[3].name);
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/ImagesData/spell/${data.spells[3].id}.png`}
              alt="R"
            />
          </li>
        </ul>
        <div className="skills__display">
          {championSkill ? (
            <div>
              <ReactPlayer
                url={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${data.key}/ability_0${data.key}_${championSkill}1.mp4`}
                fallback={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${data.key}/ability_0${data.key}_${championSkill}1.webm`}
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
              <div className="description-wrapper">
                <div className="description-wrapper__key">{championSkill}</div>
                <div className="description-wrapper__name">{skillName}</div>
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
    </>
  );
};
Skills.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Skills;
