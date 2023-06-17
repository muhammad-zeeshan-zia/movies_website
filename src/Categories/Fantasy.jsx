import React from "react";

import '../../src/index.css';
import Cards from "../Card";
import '../../src/index.css';
import movies from '../../src/movies.json';
import Footer from "../../src/Footer";
import Navbar from "../Navbar";

function Fantasy()
{ 
 
  return(
    <>

    <div className="main-container">
   {movies.fantasy.map((item, index) => {
        return (
        <>
        <div className="container1">
         
          <Cards key={index} name={item.name} company={item.company} image={item.poster} year={item.release} description={item.description} plot={item.plot}/></div>
          </>
        ) ;
      })}
      </div>
  
    </>
  )
}
export default Fantasy;