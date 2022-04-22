import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "/home/rita/summercamp/src/pages/App.js";
import reportWebVitals from "./reportWebVitals";
import PastCohort from "/home/rita/summercamp/src/pages/PastCohort.js";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Layout from "./component/Layout";

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pastCohort" element={<PastCohort />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
