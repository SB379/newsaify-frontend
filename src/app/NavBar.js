'use client'

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar () {

    const supabaseUrl = 'https://rzmjlphkmwtxctwpirvw.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6bWpscGhrbXd0eGN0d3BpcnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2NjE3NDQsImV4cCI6MjAxNzIzNzc0NH0.7_RMSNls1V9uE2RUI3TmrMWL7rEvD2GzZqBYk3s5WDc'
    const supabase = createClient(supabaseUrl, supabaseKey)

    const [ isSigned, setIsSigned ] = useState(null);
    const [ user, setUser ] = useState(null);
    const [ access, setAccess ] = useState(null);
    const [nav, setNav] = useState(false);

    // useEffect(() => {
    //     supabase.auth.getSession().then(({ data, error
    //     }) => {
    //       // console.log(data?.session.access_token);
    //       if(data?.session?.access_token)
    //       {
    //         getUserInfo();
    
    //         if(data?.session?.access_token === null)
    //         {
    //           googleAuth();
    //         }
    
    //         setAccess(data?.session?.access_token);
    //       } else {
    //         setIsSigned(false);
    //       }
    //     })
    
    //     const subscription = supabase.auth.onAuthStateChange((event => {
    //       if (event === "SIGNED_OUT") {
    //         setIsSigned(false);
    //       }
    //       return subscription.data.subscription.unsubscribe();
    //     }))
    
    //   })

      async function googleAuth() {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
        })

        const { data: { user } } = await supabase.auth.getUser();

        setUser(user);
        setIsSigned(true);
    
        setAccess(data.session.access_token);
    
      }

      const links = [
        {
          id: 1,
          link: "/",
          title: "Try Me"
        },
        {
          id: 2,
          link: "/stories",
          title: "Top Stories"
        },
        {
          id: 3,
          link: "/affiliate",
          title: "Affiliate"
        },
        {
          id: 4,
          link: "/pricing",
          title: "Pricing"
        },
        {
          id: 5,
          link: "https://discord.gg/3N9Sq45dnm",
          title: "Contact",
        },
      ];

    return (
        <div className='bg-black w-full h-24 items-center flex flex-row absolute top-0'>
            <Link href = "/" className='flex flex-row items-center mt-2 ml-4 mr-auto hover:scale-105'>
              <text className='font-bold md:text-[40px] text-2xl text-white'>News</text>
              <text className='font-thin md:text-[40px] text-2xl  text-newsaify'>AI</text>
              <text className='font-bold md:text-[40px] text-2xl text-white'>fy</text>
            </Link>

            {/* <ul className="hidden md:flex mt-4 ml-auto items-center justify-center">
              {links.map(({id, link, title}) => (
                <li
                  key = {id}
                  className = "md:text-xl font-medium md:mr-4 mr-2 text-white hover:text-newsaify hover:scale-105"
                >
                  <Link href = {link}>{title}</Link>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setNav(!nav)}
              className="cursor-pointer mr-4 mt-2 z-10 text-white md:hidden"
            >
              {nav ? <FontAwesomeIcon icon = {faTimes} size={'2x'} color = {"#F4F4FF"}/> : <FontAwesomeIcon icon = {faBars} size={'2x'} color = {"#F4F4FF"}/>}
            </button>

            {nav && (
              <ul className="flex flex-col justify-start items-center absolute pt-20 top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-newsaify">
                 {links.map(({ id, link, title }) => (
                   <li
                     key={id}
                     className="px-4 cursor-pointer py-6 text-4xl font-medium text-white hover:scale-105"
                   >
                     <Link onClick={() => setNav(!nav)} href={link}>
                       {title}
                     </Link>
                   </li>
                 ))}
               </ul>
             )}

            { !isSigned ?
                <>
                  <button className="mt-2 bg-newsaify rounded-full p-4 mr-4 ml-2 hover:bg-black border border-newsaify" onClick={googleAuth}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="19.0625" viewBox="0 0 488 512">
                      <path fill="#F4F4FF" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                    </svg>
                  </button>
                </>
                :
                <>
                  <button className='bg-newsaify rounded-full w-12 h-12 flex items-center justify-center mt-2 mr-4 ml-2 border-newsaify border-2' disabled = {true}>
                    <img className='text-black rounded-full' src = {user.user_metadata.avatar_url} alt = "Google User" width={"48"} height={"48"}/>
                  </button>
                </>
              } */}
          </div>
    );
};
