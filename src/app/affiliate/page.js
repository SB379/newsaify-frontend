'use client'

import NavBar from "../NavBar";
import { Widget } from "@typeform/embed-react";

export default function Affiliate() {
    return (
        <div className="bg-black w-full h-[100vh]">
            <div className="flex flex-col w-full h-full bg-black items-center justify-center">
            <Widget id="1HMMG2T7NBRC2GC9PHRV9F062" style={{ width: '100%', height: '100%' }} className="my-form" />
                {/* <div class="lg:max-w-lg md:max-w-md max-w-sm lg:max-h-lg md:max-h-md max-h-sm p-6 bg-white border border-newsaify rounded-lg shadow md:mb-[15%] mb-[50%]">
                    <a>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-black">Interested in being an Affiliated Partner?</h5>
                    </a>
                    <p class="mb-3 font-normal text-newsaify">Get 20% of user generated revenue who sign with your link</p>
                    
                </div> */}
            </div>
        </div>
    )
}