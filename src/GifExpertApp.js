import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = (props) => {
  // const categorias = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["One Punch"]);
  // const handleAdd = () => {
  //   setCategories([...categories, "Los Simpsons"]);
  // };

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agragar</button> */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

GifExpertApp.propTypes = {};

export default GifExpertApp;
