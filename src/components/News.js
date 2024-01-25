import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from './Spinner';
import propTypes from 'prop-types';

const News = (props) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    console.log("first" , process.env.REACT_APP_API_KEY)
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page}&pageSize=${props.pageSize}`
        );
        const newArticles = response.data.articles;

        if (newArticles.length === 0) {
          setHasNextPage(false);
        } else {
          setNews((prevNews) => [...prevNews, ...newArticles]);
          setHasNextPage(true);
        }
      } catch (error) {
        console.log('Error fetching Data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, props.country, props.category, props.pageSize, props.apiKey]);

  useEffect(() => {
    setPage(1);
  }, []);

  return (
    <div className={` ${props.darkMode ? 'bg-black text-white' : 'bg-slate-50 text-black'}`}>
      <p className='justify-center text-3xl font-bold font-serif flex my-24 text-'>
        News Top Headlines - {props.category.charAt(0).toUpperCase() + props.category.slice(1)}
      </p>

      <InfiniteScroll
        dataLength={news.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={hasNextPage}
        loader={<Spinner />}
      >
        <div className={`container w-full flex-wrap justify-center flex ${props.darkMode ? 'bg-black text-white' : 'bg-slate-50 text-black'}`} >
          {!loading &&
            news.map((item, index) => (
              <div className='col-span-4' key={index}>
                <Newsitem
                  title={item.title}
                  description={item.description}
                  imageUrl={item.urlToImage}
                  newsurl={item.url}
                  Author={item.author}
                  Date={item.publishedAt}
                  darkMode={props.darkMode}
                />
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.propTypes = {
  country: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  pageSize: propTypes.number.isRequired,
  // apiKey: propTypes.string.isRequired,
  darkMode: propTypes.bool.isRequired,
};

News.defaultProps = {
  country: 'in',
  category: 'general',
  pageSize: 8,
};

export default News;
