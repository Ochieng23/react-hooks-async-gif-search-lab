import React, { useState } from "react";

function GifSearch ({search,setSearch}) {
    
    const handleSearch = (event) => {
        setSearch(event.target.value)
        }
        


    return (
        <>    
      <input type="text" 
          placeholder="Search"
          value={search}
          onChange ={handleSearch}
          className= 'mb-3 mx-2'
          />
        
      </>

    )
}

export default GifSearch