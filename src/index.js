import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/offcanvas'
import Routing from './Routing';



ReactDOM.render(
  <>
  <BrowserRouter>
    <Routing />
   </BrowserRouter>
   </>,document.getElementById("root")
);
