import image5 from "../../public/assets/images/5.png";
import ButtonPrimary from "../components/elements/ButtonPrimary";
export default function Section4() {
    return (
        <div className="w-full flex items-center justify-center p-[50px] py-[50px] pt-[95px] pb-[100px] font-['Exo_2',_sans-serif] text-[#716255]">
            <div className="w-[36%] h-[70vh] bg-[#d5b598] rounded-full flex justify-center items-center">
                <img src={image5} className="w-full" />
            </div>
            <div className="w-3/5 p-[60px] pl-[90px] pr-[60px] pt-[60px] pb-[30px]">
                <div className="w-[72%] text-[3.5rem] font-semibold">
                    <h1>We Are The Bigest Furniture Brands</h1>
                </div>
                <div className="w-[84%] mt-[27px] text-[25px]">
                    <p>
                        over the years we have always been athe the too of the furniture
                        industries around the world, that why everyone believes in the
                        quality of our products
                    </p>
                </div>
                <div className="mt-[27px]">
                    <ButtonPrimary
                        text="Read More"
                        className="text-black bg-primary-blue"
                    />
                </div>
            </div>
        </div>
    )
}