import React from "react";

const Newsitem = (props) => {
  const cardStyle = {
    backgroundColor: props.darkMode ? '#000' : '#fff',
    color: props.darkMode ? '#fff' : '#000',
  };

  return (
    <div className={`p-7 md:w-64 lg:w-96 sm:mx-auto rounded overflow-hidden shadow-lg mx-5`} style={cardStyle}>
      <img
        alt="content"
        src={
          !props.imageUrl
            ? "https://images.wsj.net/im-905191/social"
            : props.imageUrl
        }
        className={`w-full h-auto ${props.darkMode ? 'filter-invert' : ''}`}
      />
      <div>
        <h2 className={`text-xl font-medium title-font mt-5`}>
          {props.title}
        </h2>
        <p className={`text-base leading-relaxed mt-2`}>
          {props.description}
        </p>
        <div className={`card-base text-sm text-gray-500`}>
          <span className="font-semibold">
            Author: {!props.Author ? "Unknown" : props.Author}
          </span>
        </div>
        <div className={`text-sm text-gray-500`}>
          <span className="font-semibold">Date: {new Date(props.Date).toGMTString()}</span>
        </div>

        <a
          href={props.newsurl}
          className={`text-indigo-500 inline-flex items-center mt-3 cursor-pointer`}
          style={{ color: props.darkMode ? '#fff' : '#000' }}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
