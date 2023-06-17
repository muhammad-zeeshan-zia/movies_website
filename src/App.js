import React from "react";
import movies from './movies.json';
import Cards from "./Card";
import './index.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

function App_()
{ 
 
  return(
    <>
    <div className="main-container">
   {movies.home.map((item, index) => {
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
export default App_;