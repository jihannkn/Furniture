import { TbShoppingBag } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";


export default function Navbar() {
    return (
        <nav className="py-[20px] pr-[80px] pl-[50px] w-full flex justify-between items-center">
            <div className="sofa font-dancing font-bold text-lg text-[#716255]">
                <p>sofa set</p>
            </div>
            <div className="w-[35%]">
                <ul className="flex gap-[50px] w-full font-poppins">
                    <li className="hover:font-bold text-[18px] text-[#716255] h-[30px] w-[20%] flex justify-center items-center ">Home</li>
                    <li className="hover:font-bold text-[18px] text-[#716255] h-[30px] w-[20%] flex justify-center items-center ">Review</li>
                    <li className="hover:font-bold text-[18px] text-[#716255] h-[30px] w-[20%] flex justify-center items-center ">Contact</li>
                    <li className="hover:font-bold text-[18px] text-[#716255] h-[30px] w-[20%] flex justify-center items-center ">About Us</li>
                </ul>
            </div>
            <div className="flex items-center gap-[20px] text-[#716255] pr-[40px]">
            <IoSearch className="text-[1.2rem]" />
            <TbShoppingBag className="text-[1.2rem]" />
        </div>
        </nav>
    )
}