"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react";
import axios from "axios";
import Articles from "./components/Articles";

export default function Home() {

  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState(null);
  const [buttonPressed, setButtonPressed] = useState(0);
  
  const handleInputChange = (event) => {
    // Update the query state with the input value
    setQuery(event.target.value);
  };

  const getTopArticles = async () => {

    try {
      // Ensure that the query is not null or empty
      if (!query) {
        console.error('Query is required.');
        return;
      }
      setIsSearching(true);
      setButtonPressed(buttonPressed + 1);
      console.log("calling");
      // const response = await axios.get(`http://localhost:8082/api/search/getArticles?q=${query}`);
      // setData(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error('Error fetching top articles', error);
    }
  };

  
  return (

    <main className="flex min-h-screen flex-col items-center justify-between bg-black">

      {!isSearching ?
      (
        <>
          <div className='bg-black w-full h-24 items-center'>
            <div className='flex flex-row items-center pl-2 pt-2'>
              <text className='font-bold text-[40px] text-white'>News</text>
              <text className='font-thin text-newsaify text-[40px]'>AI</text>
              <text className='font-bold text-[40px] text-white'>fy</text>
            </div>
          </div>
          <div className='h-[90vh] w-full flex flex-row items-center justify-center'>
              <input 
              className='rounded-full shadow-lg w-1/2 h-20 text-black font-thin text-2xl pl-6 mb-[5%] mr-12' 
              placeholder="What are you curious about today?" 
              onChange={handleInputChange}/>
              <button className='bg-newsaify rounded-full w-20 h-20 mb-[5%] flex items-center justify-center border border-newsaify hover:bg-black' onClick={() => {getTopArticles()}}>
                <FontAwesomeIcon icon={faArrowRight} className= "w-8 h-12"/>
              </button>
          </div>
        </>
      )
      :
      (
        <>
         <div className='bg-black w-full h-24 items-center'>
            <div className='flex flex-row items-center pl-2 pt-2'>
              <text className='font-bold text-[40px] text-white'>News</text>
              <text className='font-thin text-newsaify text-[40px]'>AI</text>
              <text className='font-bold text-[40px] text-white'>fy</text>
              <div className="flex items-center justify-center w-full mr-20">
                <input 
                  className='rounded-full shadow-lg w-1/2 h-10 text-black font-thin text-2xl pl-6 mr-12' 
                  placeholder={query} 
                  onChange={handleInputChange}/>
                <button className='bg-newsaify rounded-full w-10 h-10 flex items-center justify-center border border-newsaify hover:bg-black' onClick={() => {getTopArticles()}}>
                  <FontAwesomeIcon icon={faArrowRight} className= "w-4 h-8"/>
                </button>
              </div>
            </div>
            <div className="flex flex-row w-full h-[90vh] overflow-x-hidden">
              <div className="flex flex-col pl-20 pt-16 w-3/5">
                <text className="font-thin text-[32px]">Top Stories</text>
                <Articles query={query} buttonPress = {buttonPressed}/>
              </div>
              <div className="flex flex-col pl-8 pt-16 w-2/5">
                <text className="font-thin text-[32px]">AI Verified Facts</text>
              </div>
            </div>
          </div>
        </>
      )
    }
    </main>
  )
}
