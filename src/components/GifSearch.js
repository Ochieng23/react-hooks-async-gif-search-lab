import React, { useState } from "react";

function GifSearch ({search,setSearch}) {
    
    const handleSearch = (event) => {
        setSearch(event.target.value)
        }
        


    return (
        <>    
      <input type="text" 
          placeholder="Search Gif"
          value={search}
          onChange ={handleSearch}
          className= 'mb-3 mx-2 mb-5'
          style={{width:'660px'}}
          />
        
      </>

    )
}

export default GifSearch