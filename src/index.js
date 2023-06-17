import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/offcanvas';
import War from './Categories/war';
import Mystery from './Categories/Mystery';
import Animated from './Categories/Animated';
import Thriller from './Categories/Thriller';
import Fantasy from './Categories/Fantasy';
import Navbar from './Navbar';
import Footer from './Footer';

ReactDOM.render(
  <>
  {/* <BrowserRouter>
    <Routing />
   </BrowserRouter> */}
   <Navbar />
      <div id='animated'>
        <Animated/>
      </div>
      <div id='fantasy'>
        <Fantasy />
      </div>
      <div id='thriller'>
        <Thriller />
      </div>
      <div id='mystery'>
        <Mystery/>
      </div>
      <div id='war'>
        <War/>
      </div>
      <Footer/>
      </>
   ,document.getElementById("root")
);
