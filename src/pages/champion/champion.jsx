import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import "./champion.scss";
import SkinsSlider from "../../components/skinsSlider/skinsSlider";
import Tips from "../../components/tips/tips";
import Skills from "../../components/skills/skills";
import Statistics from "../../components/statistics/statistics";

const Champion = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery(["Champion", id], async () => {
    const response = await fetch(
      `http://ddragon.leagueoflegends.com/cdn/13.5.1/data/pl_PL/champion/${id}.json`
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
      <div className="about">
        <h1 className="about__title">Opis Postaci</h1>
        <p className="about__champion-history">{champ.lore}</p>
      </div>
      <div className="wrapper-bigger">
        <div className="wrapper-smaller">
          <Statistics data={champ} />
          <Skills data={champ} />
          <SkinsSlider data={champ} />
          <Tips data={champ} />
        </div>
      </div>
    </div></div>
  );
};

export default Champion;
