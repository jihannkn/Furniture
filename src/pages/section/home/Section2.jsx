import ButtonPrimary from "../../../components/elements/ButtonPrimary";
import chair21 from "../../../../public/assets/images/21.png";
import chair22 from "../../../../public/assets/images/22.png";
import chair31 from "../../../../public/assets/images/31.png";
import chair32 from "../../../../public/assets/images/32.png";
import chair33 from "../../../../public/assets/images/33.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



export default function Section2() {
    return (
        <div className="w-full py-[20px] px-[50px] text-[#716255] flex flex-col items-center font-['Exo_2',_sans-serif]">
            <div>
                <h1 className="text-font-color font-semibold text-[3.5rem]">This Week Featured Product</h1>
            </div>
            <div className="mt-[100px] mx-[40px] mb-[40px] py-[40px] px-[50px] bg-[#f0dbc5] rounded-[15px]">
                <div className="flex justify-between">
                    <div className="w-[40%]">
                        <p className="text-[23px]">
                            Being able to sit back and relax in your favourite armchair is
                            trully one of the greatest feelings in life. That's why we've
                            created a stunning range of lovingly handmade luxury armchair,
                            using only materials of the finest quality, to ensure you have
                            the best seat in the house
                        </p>
                        <ButtonPrimary
                            text="Add to Cart"
                            className="mt-[20px] ml-[13px] text-black bg-primary-blue"
                        />
                    </div>
                    <div className="bg-[#d9ae84] relative w-[35%] h-[80vh] mr-[-90px] mt-[-130px] rounded-bl-[15px] rounded-br-[15px] rounded-tl-[300px] rounded-tr-[300px]">
                        <img src={chair21} alt="" className="absolute bottom-0 w-[90%] -ml-[100px]" />
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <div className="bg-[#d9ae84] relative w-[35%] h-[80vh] ml-[-90px] mb-[-110px] rounded-bl-[15px] rounded-br-[15px] rounded-tl-[300px] rounded-tr-[300px]">
                        <img src={chair22} alt="" className="absolute bottom-0 right-0 w-[90%] -mr-[120px] mb-[100px]" />
                    </div>
                    <div className="w-[40%] mb-[50px]">
                        <p className="text-[23px]">
                            As in the best seat in the house. Combining comfort and creativity, our smashing range of armchairs features design to suit any style. Perhaps you're looking for a mid-century masterpiece
                        </p>
                        <ButtonPrimary
                            text="Add to Cart"
                            className="mt-[20px] text-black bg-primary-brown"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col mt-[70px]">
                <div className="w-full flex justify-center">
                    <h1 className="text-font-color font-semibold text-[3.5rem]">Wooden Sofa Sets</h1>
                </div>
                <div className="w-full mt-[90px]">
                    <ul className="w-full flex justify-around">
                        <li>
                            <img src={chair31} alt="" className="h-[250px] w-[250px]" />
                        </li>
                        <li className="flex items-center gap-[50px]">
                            <IoIosArrowBack className="rounded-[50px] p-[7px] text-[3rem] bg-[#D7AC82] font-normal" />
                            <img src={chair32} alt="" className="h-[350px] w-[350px]" />
                            <IoIosArrowForward className="rounded-[50px] p-[7px] text-[3rem] bg-[#D7AC82] font-normal" />
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