import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);
  // const [loading,setLoading] = usesate(false)
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4aab3b8455d948c9b0c8fe6626d09d53&page=${page}`
        );
        setNews(response.data.articles);
      } catch (error) {
        console.log('Error fetching Data', error);
      }
    };
    fetchData();
  }, [page]);

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  return (
    <div className='container my-3'>
      <p className='justify-center text-3xl font-bold font-serif flex'>News Top Headlines</p>

      <div className='ml-20 flex-wrap flex w-screen'>
        {news.map((item, index) => (
          <div className='col-span-4' key={index}>
            <Newsitem title={item.title} description={item.description} imageUrl={item.urlToImage} newsurl={item.url} />
          </div>
        ))}
      </div>
      <div className='container flex justify-between ml-16'>
        <button
          disabled={page === 1}
          type='button'
          className='bg-black hover:bg-slate-900 outline-black text-white font-bold py-2 px-4 rounded mr-2'
          onClick={handlePrevClick}
        >
          &larr; Previous
        </button>
        <button
          type='button'
          className='bg-black hover:bg-slate-900 text-white font-bold py-2 px-4 rounded'
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
