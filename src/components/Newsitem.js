import React from 'react';

const Newsitem = (props) => {

  return (
    // <div>
      <div className="  p-4 md:w-64 lg:w-96 sm:mx-auto">
        <img alt="content" src= {!props.imageUrl?"https://images.wsj.net/im-905191/social":props.imageUrl}/>
      <div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{props.title}</h2>
        <p className="text-base leading-relaxed mt-2">{props.description}</p>
        <a href={props.newsurl} className="text-indigo-500 inline-flex items-center mt-3 cursor-pointer">Read More</a>
      </div>
      </div>
    // </div>
  );
};

export default Newsitem;
