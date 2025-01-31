import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import AppRouter from './router'
import { BrowserRouter } from "react-router-dom";

function App() {

  useEffect(() => {
    document.title = "ConIntact";
  }, []);

  return (
    <Router>
      <AppRouter />
    </Router>
    );
};

export default App
