import bg1 from "../../public/assets/images/bg1.png";
import { FaCommentDots, FaTruckFast } from "react-icons/fa6";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import ButtonPrimary from "../components/elements/ButtonPrimary";
import HotDealCards from "../components/elements/HotDealCards";

export default function Section1() {
    return (
        <div className="w-full relative font-['Exo_2',_sans-serif] ">
            <div className="w-[50%] flex flex-col pl-[50px] mt-[68px] absolute">
                <div className="w-[70%]">
                    <h1 className="font-poppins text-[6rem] font-semibold text-font-color ">Modern Furniture</h1>
                </div>
                <div className="w-[60%]">
                    <p className="text-[1.4rem] text-font-color">
                        we combine interior and exterior design service and often
                        provide them as a single solution.
                    </p>
                </div>
                <div className="w-full flex gap-[10px] mt-[40px]" >
                    <ButtonPrimary
                        text="Start Now"
                        className="font-semibold text-black bg-primary-blue"
                    />
                    <ButtonPrimary
                        text="Read More"
                        className="font-semibold text-black bg-primary-brown"
                    />
                </div>
            </div>
            <div className="w-full flex justify-end">
                <img src={bg1} alt="" className="w-[90%] h-[110vh]" />
            </div>
            <div className=" w-full px-[50px]" >
                <div className="mb-[30px]">
                    <div className="w-full flex justify-center">
                        <h1 className="text-font-color font-semibold text-[3.5rem]">Hot Deals For You</h1>
                    </div>
                    <div className="w-full flex justify-between bg-[#EEDFCC] mt-[40px] py-[20px] rounded-[10px] px-[25px] shadow-2xl" >
                        {/* <HotDealCards>
                            <HotDealCards.Icon icon={<FaTruckFast className="text-[4rem]" />} />
                            <HotDealCards.Title title="Free Shipping" />
                            <HotDealCards.Description desc="we combine interior and exterior design service" />
                        </HotDealCards> */}
                        {/* <div className="w-[20%] flex flex-col gap-[10px] text-font-color">
                            <FaTruckFast className="text-[4rem]" />
                            <h2 className="font-bold text-[1.5rem]">Free Shipping</h2>
                            <p className="text-[22px]">we combine interior and exterior design service</p>
                        </div>
                        <div className="w-[20%] flex flex-col gap-[10px] text-font-color">
                            <FaCircleDollarToSlot className="text-[4rem]" />
                            <h2 className="font-bold text-[1.5rem]">save Money</h2>
                            <p className="text-[22px]">we combine interior and exterior design service</p>
                        </div>
                        <div className="w-[20%] flex flex-col gap-[10px] text-font-color">
                            <FaCommentDots className="text-[4rem]" />
                            <h2 className="font-bold text-[1.5rem]">Contact With Us</h2>
                            <p className="text-[22px]">we combine interior and exterior design service</p>
                        </div> */}
                        <HotDealCards
                            icon={FaTruckFast}
                            title="Free Shopping"
                            desc="we combine interior and exterior design service"
                        />
                        <HotDealCards
                            icon={FaCircleDollarToSlot}
                            title="Save Money"
                            desc="we combine interior and exterior design service"
                        />
                        <HotDealCards
                            icon={FaCommentDots}
                            title="Contact With Us"
                            desc="we combine interior and exterior design service"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}