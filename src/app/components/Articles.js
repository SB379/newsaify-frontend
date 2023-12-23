import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Articles = ({ query, buttonPress }) => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // https://newsaify-backend.onrender.com
        // const response = await axios.get(`http://localhost:8082/api/search/getArticles?q=${query}`);
        const response = await axios.get(`https://newsaify-backend.onrender.com/api/search/getArticles?q=${query}`);
        setJsonData(response.data); // Use response.data instead of response
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [buttonPress]); // Include query in the dependency array to trigger a re-fetch when the query changes

  if (!jsonData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {jsonData.items.map((item, index) => (
        <div key={index} className="w-full h-40 bg-queryBG bg-opacity-10 rounded-3xl flex flex-row mb-10">
          <img src={item.img} className="w-1/3 h-full rounded-tl-3xl rounded-bl-3xl object-cover" alt={`Image ${index}`} />
          <div className="flex flex-col pl-2">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="font-thin text-md">{item.snippet}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-thin text-sm flex items-center justify-center bg-newsaify rounded-full hover:bg-white hover:text-newsaify">
              Read full article
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
