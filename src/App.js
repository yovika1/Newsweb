// import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
// import axios from "axios";
// import Newsitem from "./components/Newsitem";
import News from "./components/News";
export default function App() {
//   const API =
//     "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4aab3b8455d948c9b0c8fe6626d09d53";

//   const [data, setData] = useState([]);
// console.log(data)
//   const getData = async () => {
//     const res = await axios.get(API);
//     const Data = await res.data;
//     setData(Data?.articles);
//   };

//   useEffect(() => {
//     getData();
//     // console.log(data);
//   }, [data]);

  return (
    <div>
      <Navbar />
      {/* {data.map((item) => (
        <Newsitem
          key={item.url}
          title={item.title}
          description={item.description}
          url={item.url}
          urlToImage={item.urlToImage}
          publishedAt={item.publishedAt}
        />
      ))} */}
      <News />
      {/* <Newsitem /> */}
    </div>
  );
}
