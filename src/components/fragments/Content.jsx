
import Section1 from "../../pages/Section1";
import Section2 from "../../pages/Section2";
import Section3 from "../../pages/Section3";
import Section4 from "../../pages/Section4";


export default function Content() {
    return (
        <div>
            <div className="w-full mb-[40px]">
                <Section1/>
            </div>
            <div className="w-full mb-[90px]">
                <Section2/>
            </div>
            <div className="w-full ">
                <Section3/>
            </div>
            <div className="w-full items-center justify-center">
                <Section4/>
            </div>
        </div>
    );
}