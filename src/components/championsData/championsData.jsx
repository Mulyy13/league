import { useQuery } from "@tanstack/react-query";
import "./championsData.scss";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import Navbar, { NavbarContext } from "../navbar/navbar";

const ChampionsData = () => {
  const handleFilter = useContext(NavbarContext);
  console.log(handleFilter);
  const { isLoading, isError, data } = useQuery(["allChampions"], async () => {
    const response = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/13.5.1/data/pl_PL/champion.json"
    );
    console.log("response :: ", response);
    const data = await response.json();
    return Object.values(data.data);
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  return (
    <NavbarContext.Consumer>
      <Navbar />
      <div className="champions__wrapper">
        {data
          .filter((champ) => {
            return handleFilter.toLowerCase() === ""
              ? champ
              : champ.name.toLowerCase().includes(handleFilter);
          })
          .map((champ) => {
            return (
              <Link
                key={champ.key}
                to={`/champion/${champ.id}`}
                className="product"
              >
                <div className="champions__item" key={champ.id}>
                  <div
                    className="item__image"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/ImagesData/tiles/${champ.id}_0.jpg)`,
                    }}
                  >
                    <div>{champ.name}</div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </NavbarContext.Consumer>
  );
};

export default ChampionsData;
