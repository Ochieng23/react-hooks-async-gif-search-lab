import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
    const [giphy, setGiphy] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    const [search, setSearch] = useState('');

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
            <div className=""  style={{ display: "flex", flexDirection: "row" }} >

                
                {currentGifs

                .map((gif) => (
                    <>
                    
                    <div className="card">
                    <img className="card-img-top"  key={gif.id} src={gif.images.original.url} alt={gif.title} />
                    
                    <div className="card-body">
                    <p className="card-text" >Pagination is a beautiful thing</p>
                    </div>
                    </div>
                    
                    
                    </>
                ))}
                
            </div>
            <GifSearch search={search} setSearch={setSearch} />
            <div className="row"  style={{ display: "flex", flexDirection: "row" }}>
            <GifList giphy={giphy} search={search}/>
            </div>
        </>
    );
}

export default GifListContainer;
