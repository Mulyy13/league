import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChampionsData from "../components/championsData/championsData";
import Layout from "../layout/layout";
import Champion from "./champion/champion";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<ChampionsData />} />
            <Route path="/champion/:id" element={<Champion />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;