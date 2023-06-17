import React from "react";
import App_ from "./App";
import Animated from "./Categories/Animated";
import War from "./Categories/war";
import Mystery from "./Categories/Mystery";
import Fantasy from "./Categories/Fantasy";
import {Routes,Route, Navigate } from "react-router-dom";
import Thriller from "./Categories/Thriller";
// switch is replaced by Routes
//REdirect is replaced by navigate
const Routing = () => {
    return (
    
        <Routes>
            <Route exact path="/" Component={App_}/>
             <Route exact path="/animated" Component={Animated}/>
            <Route exact path="/war" Component={War}/>
            <Route exact path="/thriller" Component={Thriller}/>
            <Route exact path="/mystery" Component={Mystery}/>
            <Route exact path="/fantasy" Component={Fantasy}/>
        </Routes>
        
    )
};
export default Routing;