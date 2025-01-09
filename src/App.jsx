import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Vendors from "./components/Vendors";
import Layout from "./components/Layout";
import Compare from "./components/Compare";
import AWSBilling from "./components/AWSBilling";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="compare" element={<Compare />} />
          <Route path="vendors" element={<Vendors />} />
          <Route path="awsbilling" element={<AWSBilling />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
