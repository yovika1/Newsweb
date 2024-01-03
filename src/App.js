// import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
// import axios from "axios";
// import Newsitem from "./components/Newsitem";
import News from "./components/News";
export default function App() {
//   const API =
//     "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4aab3b8455d948c9b0c8fe6626d09d53";
  return (
    <div>
      <Navbar />
     
      <News pageSize={10} />
      {/* <Newsitem /> */}
    </div>
  );
}
