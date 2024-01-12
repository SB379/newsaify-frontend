import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Discuss } from "react-loader-spinner"

const Facts = ({ factJSON, buttonPress }) => {

    const [ data, setData ] = useState(null);

    useEffect(() => {

        // console.log('working');

        // let endpoint = null;

        const fetchData = async () => {

            setData(null);

            setData(factJSON);

        //     // const config = {
        //     //     headers: {
        //     //         'provider': `Bearer ${token}`,
        //     //         'authorization': `Bearer ${token}`
        //     //     }
        //     // }

        //     // Assuming `urls` is an array of URLs
        //     // const requestBody = {
        //     //     urls: urls,
        //     //     query: query
        //     // };
  
        //     try {

        //         // const response = await axios.get(`https://newsaify-backend.onrender.com/api/search/factCheck?url=${url}`);
        //         // const response = await axios.get(`http://localhost:8082/api/search/factCheck?url=${url}`)
        //         // const response = await axios.get(`http://localhost:8082/api/search/lang?urls=${urlParam}?query=${query}`);
        //         const response = await axios.get(endpoint);
        //         setData(response.data);
        //     } catch (error){

        //         console.log('going here');

        //         return (
        //             <>
        //                 <div className='bg-queryBG bg-opacity-10 rounded-3xl w-[90%] flex flex-col mb-10'>
        //                     <text className='text-[#FF0000]'>Error querying our AI Models, try again later</text>
        //                 </div>    
        //             </>
        //         )
        //     }
        }

        // endpoint = prepareLinks();

        fetchData();

    }, [buttonPress])

    if (!data) {
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

    return (
        <div className='flex flex-col'>
            {data.facts.map((fact, index) => (
                <div key = {index} className='bg-queryBG bg-opacity-10 rounded-3xl w-[90%] flex mb-10 shadow-newsaify shadow-sm'>
                    <p key = {index} className = 'text-white font-thin ml-2 p-4'>
                        {fact}
                    </p>
                </div>
            ))}
        </div>
      );
};

export default Facts;