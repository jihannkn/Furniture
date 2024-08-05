import chair21 from "../../../public/assets/images/21.png";
import chair22 from "../../../public/assets/images/22.png";
import chair31 from "../../../public/assets/images/31.png";
import chair32 from "../../../public/assets/images/32.png";
import chair33 from "../../../public/assets/images/33.png";
import { IoIosArrowBack,  IoIosArrowForward } from "react-icons/io";


export default function Section2(){
    return(
        <div className="w-full flex justify-center items-center flex-col gap-[50px] font-poppins">
            <div className="w-full flex justify-center">
                <h1 className="text-font-color font-bold text-[2.5rem]">This Week Featured Product</h1>
            </div>
            <div className="w-[70%] px-[50px] bg-[#F0DAC5] rounded-[20px] ">
            <div className="w-full flex items-center justify-between">
            <div className="w-[60%] flex flex-col gap-[10px]">
                <p className=" text-font-color text-[0.8rem] font-bold">
                    Being able to sit back and relax in your favourite armchair is
                    trully one of the greatest feelings in life. That's why we've
                    created a stunning range of lovingly handmade luxury armchair,
                    using only materials of the finest quality, to ensure you have
                    the best seat in the house
                </p>
                <button className="w-[30%] h-[35px] rounded-[10px] bg-primary-blue text-[0.7rem] flex items-center justify-center"><a href="#">Add To Card</a></button>
                    </div>
                    <div className="w-[30%] h-[350px] relative rounded-b-[20px] rounded-t-[300px] mt-[-50px] mr-[-80px] bg-[#D7AC82]">
                        <img src={chair21} alt="" className="w-[200px] h-[200px] absolute bottom-[20px] right-[70px]" />
                    </div>
            </div>
            <div className="w-full flex items-center justify-between">
                    <div className="w-[30%] h-[350px] relative rounded-b-[20px] rounded-t-[300px] mb-[-50px] ml-[-80px] bg-[#D7AC82]">
                        <img src={chair22} alt="" className="w-[200px] h-[200px] absolute bottom-[45px] left-[70px]" />
                    </div>
            <div className="w-[60%] flex flex-col gap-[10px]">
                <p className=" text-font-color text-[0.8rem] font-bold">
                As in the best seat in the house. Combining comfort and
                creativity, our smashing range of armchairs features design to
                suit any style. Perhaps you're looking for a mid-century
                masterpiece
                </p>
                <button className="w-[30%] h-[35px] rounded-[10px] bg-primary-brown text-[0.7rem] flex items-center justify-center"><a href="#">Add To Card</a></button>
                    </div>
            </div>
            </div>
            <div className="w-full flex flex-col mt-[40px]">
                <div className="w-full flex justify-center">
                    <h1 className="text-font-color font-bold text-[2.5rem]">Wonden Sofa Sets</h1>
                </div>
                <div className="w-full ">
                    <ul className="w-full flex justify-around">
                        <li>
                            <img src={chair31} alt="" className="h-[250px] w-[250px]" />
                        </li>
                        <li className="flex items-center gap-[50px]">
                            <IoIosArrowBack className="rounded-[50px] p-[7px] text-[3rem] bg-[#D7AC82] font-normal"/>
                            <img src={chair32} alt="" className="h-[350px] w-[350px]" />
                            <IoIosArrowForward className="rounded-[50px] p-[7px] text-[3rem] bg-[#D7AC82] font-normal"/>
                        </li>
                        <li>
                            <img src={chair33} alt="" className="h-[250px] w-[250px]" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}