"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react";
import Link from "next/link";
import Articles from "./components/Articles";
import NavBar from "./NavBar";
import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://rzmjlphkmwtxctwpirvw.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6bWpscGhrbXd0eGN0d3BpcnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2NjE3NDQsImV4cCI6MjAxNzIzNzc0NH0.7_RMSNls1V9uE2RUI3TmrMWL7rEvD2GzZqBYk3s5WDc'
// const supabase = createClient(supabaseUrl, supabaseKey)

export default function Home() {

  const [ isSearching, setIsSearching ] = useState(false);
  const [ query, setQuery ] = useState(null);
  const [ buttonPressed, setButtonPressed ] = useState(0);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      getTopArticles();
    }
  };
   
  const handleInputChange = (event) => {
    // Update the query state with the input value
    setQuery(event.target.value);
  };

  const getTopArticles = async () => {

    // if(!access)
    // {
    //   console.error('Login is required.');
    //   return;
    // }

    try {
      // Ensure that the query is not null or empty
      if (!query) {
        console.error('Query is required.');
        return;
      }
      setIsSearching(true);
      setButtonPressed(buttonPressed + 1);

    } catch (error) {
      console.error('Error fetching top articles', error);
    }
  };
  
  return (

    <main className="flex min-h-screen flex-col items-center justify-between bg-black">

      {!isSearching ?
      (
        <>
          
          {/* <NavBar/> */}
          <div className='h-[90vh] w-full flex md:flex-row flex-col items-center justify-center'>
              <input 
              className='rounded-full shadow-lg md:w-1/2 w-3/4 h-20 text-black md:font-thin font-normal md:text-2xl pl-6 mb-[5%] md:mr-12' 
              placeholder="What are you curious about today?" 
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}/>
              <button className='bg-newsaify rounded-full md:w-20 w-1/2 h-20 md:mb-[5%] mb-[25%] flex items-center justify-center border border-newsaify hover:bg-black' onClick={() => {getTopArticles()}}>
                <FontAwesomeIcon icon={faArrowRight} className= "w-8 h-12" color="#F4F4FF"/>
              </button>
          </div>
        </>
      )
      :
      (
        <>
         <div className='bg-black w-full h-24 items-center'>
            {/* <NavBar/> */}
            <div className="flex flex-row w-full h-[90vh] overflow-x-hidden mt-8">
              <Articles query={query} buttonPress = {buttonPressed}/>
            </div>
          </div>
        </>
      )
    }
    </main>
  )
}
