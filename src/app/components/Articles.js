import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Facts from './Facts';
import { Discuss } from 'react-loader-spinner';

const Articles = ({ query, buttonPress }) => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {

    // const config = {
    //     headers: {
    //         'provider': `Bearer ${token}`,
    //         'authorization': `Bearer ${token}`
    //     }
    // }

    const fetchData = async () => {
      try {
        // https://newsaify-backend.onrender.com
        // const response = await axios.get(`http://localhost:8082/api/search/getArticles?q=${query}`, config);
        const response = await axios.get(`https://newsaify-backend.onrender.com/api/search/getArticles?q=${query}`);
        setJsonData(response.data); // Use response.data instead of response
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }); // Include query in the dependency array to trigger a re-fetch when the query changes

  if (!jsonData) {
    //Will need to wrap this into a div and center it slightly but not an issue right now
    return <Discuss
        visible={true}
        height="80"
        width="80"
        ariaLabel="discuss-loading"
        wrapperStyle={{}}
        wrapperClass="discuss-wrapper"
        color="#8E92F8"
        backgroundColor="#000000"
        colors={["#8E92F8", "#8E92F8"]}
        />;
  }

  function getAllLinks() {
    if (!jsonData || !jsonData.items) {
      return [];
    }

    // Extract links from each item in jsonData
    const links = jsonData.items.map((item) => item.link);
    return links;
  }

  return (
    <div className='flex flex-row w-full h-full'>
        <div className="flex flex-col pl-20 pt-16 w-3/5">
            <text className="font-thin text-[32px]">Top Stories</text>
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
        <div className="flex flex-col pl-8 pt-16 w-2/5">
            <text className="font-thin text-[32px]">AI Verified Facts</text>
            <Facts url = {jsonData.items[0].link} buttonPress = {buttonPress}/>
        </div>
    </div>
    
    // <div>
    //   <Facts url = {jsonData.items[0].link} buttonPress={buttonPress}/>
    // </div>
  );
};

export default Articles;
