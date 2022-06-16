import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from './routes/Navigation';
import Routes from "./routes/Routes";
import './App.css';

function App() {
  
  return (
      <BrowserRouter>
          <div >
            <Navigation  />
            <Routes  />
          </div>
      </BrowserRouter>
  );
}

export default App;
