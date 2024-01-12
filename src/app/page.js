"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react";
import Articles from "./components/Articles";


// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://rzmjlphkmwtxctwpirvw.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6bWpscGhrbXd0eGN0d3BpcnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2NjE3NDQsImV4cCI6MjAxNzIzNzc0NH0.7_RMSNls1V9uE2RUI3TmrMWL7rEvD2GzZqBYk3s5WDc'
// const supabase = createClient(supabaseUrl, supabaseKey)

export default function Home() {

  const [ isSearching, setIsSearching ] = useState(false);
  const [ query, setQuery ] = useState(null);
  const [ buttonPressed, setButtonPressed ] = useState(0);
  // const [ isSigned, setIsSigned ] = useState(null);
  // const [ user, setUser ] = useState(null);
  // const [ access, setAccess ] = useState(null);

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data, error
  //   }) => {
  //     // console.log(data?.session.access_token);
  //     if(data?.session?.access_token)
  //     {
  //       getUserInfo();

  //       if(data?.session?.access_token === null)
  //       {
  //         // signInWithSpotify();
  //         // googleAuth();
  //       }

  //       setAccess(data?.session?.access_token);
  //     } else {
  //       setIsSigned(false);
  //     }
  //   })

  //   const subscription = supabase.auth.onAuthStateChange((event => {
  //     if (event === "SIGNED_OUT") {
  //       setIsSigned(false);
  //     }
  //     return subscription.data.subscription.unsubscribe();
  //   }))

  // })

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

  // async function googleAuth() {
  //   const { data, error } = await supabase.auth.signInWithOAuth({
  //     provider: 'google',
  //     options: {
  //       scopes: 'https://www.googleapis.com/auth/cse',
  //       redirectTo: 'https://newsaify.vercel.app/',
  //     }
  //   })

  //   getUserInfo();

  //   setAccess(data.session.access_token);

  // }

  // async function getUserInfo() {
  //   const { data: { user } } = await supabase.auth.getUser();

  //   setUser(user);
  //   setIsSigned(true);

  // }

  
  return (

    <main className="flex min-h-screen flex-col items-center justify-between bg-black">

      {!isSearching ?
      (
        <>
          <div className='bg-black w-full h-24 items-center flex flex-row'>
            <div className='flex flex-row items-center ml-2 mt-2 mr-auto'>
              <text className='font-bold text-[40px] text-white'>News</text>
              <text className='font-thin text-newsaify text-[40px]'>AI</text>
              <text className='font-bold text-[40px] text-white'>fy</text>
            </div>
            {/* { !isSigned ?
              <>
                <button className="mt-2 bg-newsaify rounded-full p-4 mr-4 hover:bg-black border border-newsaify" onClick={googleAuth}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="19.0625" viewBox="0 0 488 512">
                    <path fill="#F4F4FF" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                  </svg>
                </button>
              </>
              :
              <>
                <button className='bg-newsaify rounded-full w-12 h-12 flex items-center justify-center mt-2 mr-4 border-newsaify border-2' disabled = {true}>
                  <img className='text-black rounded-full' src = {user.user_metadata.avatar_url} alt = "Google User" width={"48"} height={"48"}/>
                </button>
              </>
            } */}
          </div>
          <div className='h-[90vh] w-full flex flex-row items-center justify-center'>
              <input 
              className='rounded-full shadow-lg w-1/2 h-20 text-black font-thin text-2xl pl-6 mb-[5%] mr-12' 
              placeholder="What are you curious about today?" 
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}/>
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
              <div className="flex items-center justify-center w-full mr-auto">
                <input 
                  className='rounded-full shadow-lg w-1/2 h-10 text-black font-thin text-2xl pl-6 mr-12' 
                  placeholder={query} 
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}/>
                <button className='bg-newsaify rounded-full w-10 h-10 flex items-center justify-center border border-newsaify hover:bg-black' onClick={() => {getTopArticles()}}>
                  <FontAwesomeIcon icon={faArrowRight} className= "w-4 h-8"/>
                </button>
              </div>
              {/* <button className='bg-newsaify rounded-full w-10 h-10 flex items-center justify-center mt-2 mr-4 border-newsaify border-2' disabled = {true}>
                <img className='text-black rounded-full' src = {user.user_metadata.avatar_url} alt = "Google User" width={"48"} height={"48"}/>
              </button> */}
            </div>
            <div className="flex flex-row w-full h-[90vh] overflow-x-hidden">
              <Articles query={query} buttonPress = {buttonPressed}/>
            </div>
          </div>
        </>
      )
    }
    </main>
  )
}
