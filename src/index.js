import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./Styles/index.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home.jsx";
import Quizz from "./Pages/Quizz/Quizz.jsx";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoveQuizz" element={<Quizz />} />
      </Routes>
      <Footer />

    </Router>
  </React.StrictMode>
);

reportWebVitals();
