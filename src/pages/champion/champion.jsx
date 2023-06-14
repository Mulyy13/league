import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";

import "./champion.scss";
import SkinsSlider from "../../components/skinsSlider/skinsSlider";
import Tips from "../../components/tips/tips";
import Skills from "../../components/skills/skills";
import Statistics from "../../components/statistics/statistics";
import About from "../../components/about/about";
import { FaArrowLeft } from "react-icons/fa";

const Champion = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery(["Champion", id], async () => {
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/13.5.1/data/pl_PL/champion/${id}.json`
    );
    const data = await response.json();
    return Object.values(data.data);
  });

  const champ = data?.[0];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  if (!champ) return null;

  return (
    <div className="champion__wrapper">
      <div
        className="back-to-main"
        onClick={() => {
          navigate("/");
        }}
      >
        <FaArrowLeft />
      </div>
      <div className="champion">
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

        <div className="wrapper-bigger">
          <div className="wrapper-smaller">
            <About data={champ} />
            <Statistics data={champ} />
            <Skills data={champ} />
            <SkinsSlider data={champ} />
            <Tips data={champ} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Champion;
