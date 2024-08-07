import { TbShoppingBag } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import Navlink from "../elements/NavLink";


export default function Navbar() {
    return (
        <nav className="py-[20px] pr-[80px] pl-[50px] w-full flex justify-between items-center">
            <div className="font-dancing font-bold text-[#716255]">
                <p className="text-[1.2rem]">sofa set</p>
            </div>
            <div className="w-[35%]">
                <Navlink>
                    <Navlink.link link={'Home'}/>
                    <Navlink.link link={'Review'}/>
                    <Navlink.link link={'Contact'}/>
                    <Navlink.link link={'About Us'}/>
                </Navlink>

            </div>
            <div className="flex items-center gap-[20px] text-[#716255] pr-[40px]">
            <IoSearch className="text-[1.2rem]" />
            <TbShoppingBag className="text-[1.2rem]" />
        </div>
        </nav>
    )
}