import { useQuery } from "@tanstack/react-query";
import "./championsData.scss";
import { Link } from "react-router-dom";

import Navbar from "../navbar/navbar";
import { useSelector } from "react-redux";

const ChampionsData = () => {
  const globalInputValue = useSelector((state) => state.inputValue);
  console.log(globalInputValue);
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
    <>
      <Navbar />
      <div className="champions-list">
        {data
          .filter((champ) => {
            return globalInputValue.toLowerCase() === ""
              ? champ
              : champ.name.toLowerCase().includes(globalInputValue);
          })
          .map((champ) => {
            return (
              <Link
                key={champ.key}
                to={`/champion/${champ.id}`}
                className="product"
              >
                <div className="item" key={champ.id}>
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
    </>
  );
};

export default ChampionsData;
