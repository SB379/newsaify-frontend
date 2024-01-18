import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Facts from './Facts';
import { Discuss } from 'react-loader-spinner';

const Articles = ({ query, buttonPress }) => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {

    setJsonData(null);

    // const config = {
    //     headers: {
    //         'provider': `Bearer ${token}`,
    //         'authorization': `Bearer ${token}`
    //     }
    // }

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

    // console.log(factData);

    // getAllLinks();

  }, [buttonPress]); // Include query in the dependency array to trigger a re-fetch when the query changes

  if (!jsonData) {
    //Will need to wrap this into a div and center it slightly but not an issue right now
    return <Discuss
        visible={true}
        height="100vh"
        width="100vw"
        ariaLabel="discuss-loading"
        wrapperStyle={{}}
        wrapperClass="discuss-wrapper"
        color="#8E92F8"
        backgroundColor="#000000"
        colors={["#8E92F8", "#8E92F8"]}
        />;
  } 

  return (
    <div className='flex flex-col w-full h-full'>
        <div className="flex flex-col pl-8 md:pt-16 pt-4 w-full">
            <text className="font-thin text-[32px] text-white">AI Verified Facts</text>
            {/* {jsonData.facts.facts.map((fact, index) => (
                <div key = {index} className='bg-queryBG bg-opacity-10 rounded-3xl w-[90%] flex mb-10 shadow-newsaify shadow-sm'>
                    <p key = {index} className = 'text-white font-thin ml-2 p-4'>
                        {fact}
                    </p>
                </div>
            ))} */}

          <div  className='bg-queryBG bg-opacity-10 rounded-3xl w-[95%] flex mb-10 shadow-newsaify shadow-sm'>
            <p  className = 'text-white font-thin ml-2 p-4'>
                {jsonData.facts}
            </p>
          </div>
        </div>
        <div className="flex flex-col pl-8 pt-4 w-full">
            <text className="font-thin text-[32px] text-white">Top Stories</text>
            {jsonData.articles.items.map((item, index) => (
                <div key={index} className="w-[95%] h-40 bg-queryBG bg-opacity-10 rounded-3xl flex flex-row mb-10 shadow-newsaify shadow-sm">
                <img src={item.img} className="w-1/3 h-full rounded-tl-3xl rounded-bl-3xl object-cover" alt={`Image ${index}`} />
                <div className="flex flex-col pl-2 w-2/3">
                    <h3 className="font-semibold md:text-xl text-sm text-white">{item.title}</h3>
                    <p className="font-thin md:text-lg text-xs text-white">{item.snippet}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="md:font-thin font-normal mb-2 mt-auto md:text-lg text-[10px] text-white flex items-center justify-center bg-newsaify rounded-full hover:bg-white hover:text-newsaify md:w-[99%] w-[90%]">
                    Read full article
                    </a>
                </div>
                </div>
            ))}
        </div>
    </div>
    
    // <div>
    //   <Facts url = {jsonData.items[0].link} buttonPress={buttonPress}/>
    // </div>
  );
};

export default Articles;
