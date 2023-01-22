import React from "react";

// GifList component displays a list of gifs
function GifList({ giphy }) {
  return (
    <>
    <ul>
      {giphy.map((giph) => {
        const { id, title, images } = giph;
        return (
            <>
            <div className=" row d-flex flex-row">
            <div className="col">
            <li key={id}>
            <img src={images.original.url} alt={title} title={title} />
            </li>
            </div>
            </div>
           </>
        );
      })}
      </ul>
    </>
  );
}

export default GifList;
