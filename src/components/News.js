import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';
import axios from 'axios';
import { Spinner } from './Spinner';
import propTypes from 'prop-types'


const News = (props) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4aab3b8455d948c9b0c8fe6626d09d53&page=${page}&pageSize=${props.pageSize}`
        );
        const newArticles = response.data.articles;

        if (newArticles.length === 0) {
          setHasNextPage(false);
        } else {
          setNews(newArticles);
          setHasNextPage(true);
        }
      } catch (error) {
        console.log('Error fetching Data', error);
      } finally {
        setLoading(false); 
      }
    };
    fetchData();
  }, [page,props.country,props.category,props.pageSize]);


  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    if (hasNextPage) setPage(page + 1);
  };

  return (
    <>
      <div className=' my-3'>
        <p className='justify-center text-3xl font-bold font-serif flex'>News Top Headlines</p>
        <div className='container w-full flex-wrap justify-center flex'>
          {!loading&& news.map((item, index) => (
            <div className='col-span-4' key={index}>
              <Newsitem title={item.title} description={item.description} imageUrl={item.urlToImage} newsurl={item.url} />
            </div>
          ))}
           {loading && <Spinner />}
        </div>
        <div className='container px-4 lg:px-48 w-full mx-auto flex justify-between items-center' >
          <button
            disabled={page === 1}
            type='button'
            className='bg-black hover:bg-slate-900 outline-black text-white font-bold py-2 px-4 rounded '
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={!hasNextPage}
            type='button'
            className='bg-black hover:bg-slate-900 text-white font-bold py-2 px-4 rounded'
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </>
  );
};

  News.propTypes = {
  country: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  pageSize: propTypes.number.isRequired
}

  News.defaultProps = {
   country:'in',
   category:'bussiness',
   pageSize:8
}

export default News;
