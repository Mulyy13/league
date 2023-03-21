import { useQuery } from "@tanstack/react-query";
import "./championsData.scss";
import { Link } from "react-router-dom";
import React from "react";
const ChampionsData = () => {
  // const [searchParams] = useSearchParams();
  // const filter = searchParams.get("filter");
  // const setFilterParams = (id) => `?filter=${id}`;

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
    <div>
      <h1>liga cweli</h1>
      <div className="champions__wrapper">
        {data.map((champ) => {
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
                ></div>
                <span className="item__name">{champ.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ChampionsData;
