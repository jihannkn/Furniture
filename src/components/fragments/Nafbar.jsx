import { TbShoppingBag } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";


export default function Navbar() {
    return (
        <div className="w-full flex items-center p-[5px] text-font-color">
            <div className="w-[20%] flex justify-start">
                <h1 className="font-playwrite">Sofa Sheet</h1>
            </div>
            <div className="w-[65%]">
                <ul className="flex justify-around w-full font-poppins">
                    <li className="hover:font-bold text-[1.2rem] h-[30px] w-[20%] flex justify-center items-center ">Home</li>
                    <li className="hover:font-bold text-[1.2rem] h-[30px] w-[20%] flex justify-center items-center ">Review</li>
                    <li className="hover:font-bold text-[1.2rem] h-[30px] w-[20%] flex justify-center items-center ">Contact</li>
                    <li className="hover:font-bold text-[1.2rem] h-[30px] w-[20%] flex justify-center items-center ">About Us</li>
                </ul>
            </div>
            <div className="flex gap-[20px] w-[15%] justify-center">
                <i className="text-[1.2rem]">
                    <IoSearch />
                </i>
                <i className="text-[1.2rem]">
                    <TbShoppingBag />
                </i>
            </div>
        </div>
    )
}