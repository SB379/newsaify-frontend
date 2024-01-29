
import Image from "next/image";
import NewsAIfySVG from "../assets/NewsAIfySearch.svg";
import NavBar from "../NavBar";
export default function Pricing() {

    return (
        <main className="flex flex-col min-h-screen items-center justify-between bg-black">
            {/* <NavBar/> */}
            <div className="flex md:flex-row flex-col-reverse justify-center items-center w-full h-[90vh]">
                <div className="ml-auto md:w-[40%] w-full md:mr-[5%] md:h-80 h-40 bg-black flex items-center justify-center">
                    <Image priority src = {NewsAIfySVG} width = {"100%"} height={"100%"}/>
                </div>
                <div className="flex flex-col items-center justify-center mr-auto md:ml-[5%] md:w-[40%] w-full mb-16">
                    <text className="text-white md:text-[40px] text-[38px] font-bold">$1 per 100 searches</text>
                    <text className="text-white font-thin text-2xl pb-4">maximize power per search</text>
                    <button className="bg-newsaify w-64 h-12 rounded-3xl text-white hover:bg-white border-newsaify border-1 hover:text-newsaify shadow-lg shadow-queryBG">Start Searching</button>
                </div>
            </div>
        </main>
    );

};