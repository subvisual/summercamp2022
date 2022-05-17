import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "/home/rita/summercamp/src/pages/App.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./component/Layout";

ReactDOM.render(
  <BrowserRouter basename="/summercamp2022">
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
