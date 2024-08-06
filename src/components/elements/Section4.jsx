import image5 from "../../../public/assets/images/5.png";
export default function Section4() {
    return (
        <div className="w-full flex items-center font-['Exo 2'] text-[#716255]">
            <div className="w-[40%] h-[75vh] bg-[#d5b598] rounded-full flex justify-center items-center">
                <img src={image5} alt="Furniture Image" className="w-full" />
            </div>
            <div className="w-3/5 p-[60px] pl-[90px] pr-[60px] pt-[60px] pb-[30px]">
                <div className="w-[72%] text-[42px] font-semibold">
                    <h1>We Are The Biggest Furniture Brands</h1>
                </div>
                <div className="w-[87%] mt-[27px] text-[20px]">
                    <p>
                        over the years we have always been athe the too of the furniture
                        industries around the world, that why everyone believes in the
                        quality of our products
                    </p>
                </div>
                <div className="mt-[27px]">
                    <button className="px-[22px] py-[10px] text-black text-[13px] bg-[#8da7c3] rounded-[5px] border-none">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    )
}