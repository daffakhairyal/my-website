import { BsLinkedin, BsInstagram, BsTiktok } from "react-icons/bs";
import CircularText from "./CircularText";
import heroImage from "../../public/img/me.jpg"

export default function Hero() {
    const imageUrl = typeof heroImage === "string" ? heroImage : heroImage.src;
    return (
        <section className="bg-gradient-to-br from-gray-900 to-black flex justify-center items-center h-full w-full pt-10 pb-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-purple-900 opacity-20 blur-3xl"></div>
            <div className="flex md:flex-row flex-col-reverse justify-center items-center py-20 md:py-10 max-w-[75%] lg:max-w-[1000px] w-full gap-y-20 md:gap-x-10 relative">
                <div className="left1 text-white">
                    <h1 className="text-white text-5xl xl:text-6xl max-w-[750px] ">
                        I <span className="text-yellow-300">Create</span> Visually <span className="text-yellow-300">Stunning</span> Websites That Drive <span className="text-yellow-300">Engagement</span>
                    </h1>
                    <br />
                    <p className="w-full max-w-[100%] lg:max-w-[80%] 3xl:max-w-[50%] text-left">Your business deserves a website that speaks professionalism and innovation. I create stunning, high-quality websites that engage users, build trust, and help you stand out in a competitive market. Let’s work together!</p>
                    
                    <div className="flex gap-x-10 py-3">
                    <a href="#service" className="bg-white text-black py-3 px-10 rounded-2xl duration-100 hover:scale-110 hover:font-semibold">Explore</a>
                    </div>
                    <br />
                    <p>Connect with me</p>
                    <br />
{/* Media Sosial */}
<ul className="flex flex-row gap-x-6 py-2">
                        <li>
                            <a href="https://linkedin.com/in/daffakhairyalmayrizq" className="flex items-center gap-x-2 text-xl relative group text-white hover:text-[#0077B5] transition-all duration-300">
                                <BsLinkedin className="w-6 h-6 text-white group-hover:text-[#0077B5]" />
                                <p className="z-10 relative">LinkedIn</p>
                                <div className="w-0 h-[35px] group-hover:w-[110px] group-hover:h-[35px] absolute top-0 z-0 border-b-4 border-[#0077B5] transition-all duration-300"></div>
                            </a>
                        </li>
                        <li>
                            <a href="" className="flex items-center gap-x-2 text-xl relative group text-white hover:text-[#E1306C] transition-all duration-300">
                                <BsInstagram className="w-6 h-6 text-white group-hover:text-[#E1306C]" />
                                <p className="z-10 relative">Instagram</p>
                                <div className="w-0 h-[35px] group-hover:w-[130px] group-hover:h-[35px] absolute top-0 z-0 border-b-4 border-[#E1306C] transition-all duration-300"></div>
                            </a>
                        </li>
                        <li>
                            <a href="" className="flex items-center gap-x-2 text-xl relative group text-white hover:text-[#69C9D0] transition-all duration-300">
                                <BsTiktok className="w-6 h-6 text-white group-hover:text-[#69C9D0]" />
                                <p className="z-10 relative">Tiktok</p>
                                <div className="w-0 h-[35px] group-hover:w-[100px] group-hover:h-[35px] absolute top-0 z-0 border-b-4 border-[#69C9D0] transition-all duration-300"></div>
                            </a>
                        </li>
                    </ul>

                </div>
                <div className="relative image1 ">
                    <div className="absolute w-[250px] h-[350px] lg:w-[400px] lg:h-[500px] bg-yellow-300 opacity-75 right-[-6%] bottom-[-6%] z-0"></div>
                    <div className="absolute w-[125px] h-[125px] left-[-4%] top-[-4%]  z-10 border-t-4 border-white border-l-4"></div>
                    <div className="absolute w-[100px] h-[100px] left-[-2%] top-[-2%] z-10 border-t-2 border-white border-l-2"></div>
                    <div className="absolute w-[125px] h-[125px] right-[-4%] bottom-[-4%]  z-10 border-b-4 border-white border-r-4"></div>
                    <div className="absolute w-[100px] h-[100px] right-[-2%] bottom-[-2%] z-10 border-b-2 border-white border-r-2"></div>
                    {/* Tambahkan class "relative" agar gambar tidak terpengaruh oleh posisi parent */}
                    <div className="relative  w-[250px] h-[350px] lg:w-[400px] lg:h-[500px] flex justify-center items-center overflow-hidden shadow-md">
                    <img 
  src={imageUrl}
  className="relative z-10 h-full w-full object-cover drop-shadow-md duration-500 hue-rotate-15 hover:hue-rotate-0" 
  alt="Hero Image" 
/>

                    </div>
                    <div className="absolute bottom-[-10%] left-[-10%] z-20">
                    <CircularText />
                    </div>
                </div>
            </div>
        </section>
    );
}
