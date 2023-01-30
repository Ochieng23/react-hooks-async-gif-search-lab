import React from "react";

// GifList component displays a list of gifs
function GifList({ giphy,search }) {
  return (
    <>
    <div  className="col bg-danger">
    <ul style={{listStyle:'none', display:'flex', flexDirection:'column'}}>
      {giphy
      .filter(giph => search === "" || giph.title.toLowerCase().includes(search.toLowerCase()))
      
      .map((giph) => {
        const { id, title, images } = giph;
        return (
            <>
            
            <div className="card mt-4"  >
            <li key={id}>
            <img className="card-img-top" src={images.original.url} alt={title} title={title} />
            <div className="card-body">
             <p className="card-text">reps kadhaa</p>
            </div>
            </li>
            </div>
            
           </>
        );
      })}
      </ul>
      </div>
    </>
  );
}

export default GifList;
