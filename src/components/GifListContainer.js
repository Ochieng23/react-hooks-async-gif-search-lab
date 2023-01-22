import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
    const [giphy, setGiphy] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=WNYTTBYgPMnCwU5juwWi3oXPCdGRVrXJ`)
            .then((r) => r.json())
            .then((data) => setGiphy(data.data))
            .catch((err) => console.log(err));
    }, []);

    const indexOfLastGif = currentPage * itemsPerPage;
    const indexOfFirstGif = indexOfLastGif - itemsPerPage;
    const currentGifs = giphy.slice(indexOfFirstGif, indexOfLastGif);

    console.log(currentGifs);

    return (
        <>
            <div className="row" >
                
                {currentGifs.map((gif) => (
                    <>
                    
                    <div className="col">
                    <img  key={gif.id} src={gif.images.original.url} alt={gif.title} />
                    
                    
                    <h1 >Pagination is a beautiful thing</h1>
                    </div>
                    
                    
                    </>
                ))}
                
            </div>
            <GifList giphy={giphy}/>
            <GifSearch />
        </>
    );
}

export default GifListContainer;
