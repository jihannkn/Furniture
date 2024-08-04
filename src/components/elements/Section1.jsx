import bg1 from "../../../public/assets/images/bg1.png";
import { FaTruckFast } from "react-icons/fa6";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { HiOutlineChatAlt2 } from "react-icons/hi";

export default function Section1() {
    return (
        <div className="w-full relative font-poppins ">
                    <div className="w-[50%] flex flex-col gap-[20px] absolute">
                        <div className="w-[70%]">
                            <h1 className="font-poppins text-[5rem] font-bold text-font-color ">Modern Furniture</h1>
                        </div>
                        <div className="w-[60%]">
                            <p className="text-[1.1rem] text-font-color">
                                we combine interior and exterior design service and often
                                provide them as a single solution.
                            </p>
                        </div>
                        <div className="w-full flex gap-[20px]" >
                            <button className="w-[15%] h-[35px] rounded-[10px] bg-primary-blue text-[0.7rem] flex items-center justify-center"><a href="#">Start Now</a></button>
                            <button className="w-[15%] h-[35px] rounded-[10px] bg-primary-brown text-[0.7rem] flex items-center justify-center"><a href="#">Read More</a></button>
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <img src={bg1} alt="" className="w-[100%] h-[100vh]"/>
                    </div>
                <div className=" w-full" >
                <div className="mb-[30px]">
                        <div className="w-full flex justify-center">
                            <h1 className="text-font-color font-bold text-[2.5rem]">Hot Deals For You</h1>
                        </div>
                        <div className="w-full flex justify-between bg-[#EEDFCC] p-[20PX] rounded-[10px] px-[60px] shadow-2xl" >
                        <div className="w-[20%] flex flex-col gap-[10px] text-font-color" >
                            <FaTruckFast className="text-[4rem]"/>
                            <h2 className="font-bold text-[1.1rem]">Free Shopping</h2>
                            <p>we combine interior and exterior design service</p>
                        </div>
                        <div className="w-[20%] flex flex-col gap-[10px] text-font-color">
                            <FaCircleDollarToSlot className="text-[4rem]"/>
                            <h2 className="font-bold text-[1.1rem]">save Money</h2>
                            <p>we combine interior and exterior design service</p>
                        </div>
                        <div className="w-[20%] flex flex-col gap-[10px] text-font-color">
                            <HiOutlineChatAlt2 className="text-[4rem]"/>
                            <h2 className="font-bold text-[1.1rem]">Contact With Us</h2>
                            <p>we combine interior and exterior design service</p>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
    )
}