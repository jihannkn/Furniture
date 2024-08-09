import { TbShoppingBag } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import NavLink from "../elements/NavLink";


export default function Navbar() {
    return (
        <nav className="py-[20px] pr-[80px] pl-[50px] w-full flex justify-between items-center">
            <div className="font-dancing font-bold text-[#716255]">
                <p className="text-[1.2rem]">sofa set</p>
            </div>
            <div className="w-[35%]">
                <NavLink>
                    <NavLink.Link link={'Home'}/>
                    <NavLink.Link link={'Review'}/>
                    <NavLink.Link link={'Contact'}/>
                    <NavLink.Link link={'About Us'}/>
                </NavLink>

            </div>
            <div className="flex items-center gap-[20px] text-[#716255] pr-[40px]">
            <IoSearch className="text-[1.2rem]" />
            <TbShoppingBag className="text-[1.2rem]" />
        </div>
        </nav>
    )
}