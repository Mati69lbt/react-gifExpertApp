import React from "react";
// import { getGifts } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__rotateIn">{category}</h3>
      {loading && <p className="animate__flip">Loading</p>}
      <div className="card-grid">
        {data.map((e) => (
          <GifGridItem key={e.id} {...e} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
