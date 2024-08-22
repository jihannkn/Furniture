import MainLayout from "../components/layouts/MainLayout";
import Section1 from "./section/home/Section1";
import Section2 from "./section/home/Section2";
import Section3 from "./section/home/Section3";
import Section4 from "./section/home/Section4";


export default function Home() {
    return (
        <MainLayout>
            <div className="min-h-screen w-full">
                <Section1 />
            </div>
            <div className="min-h-screen w-full">
                <Section2 />
            </div>
            <div className="min-h-screen w-full">
                <Section3 />
            </div>
            <div className="min-h-screen w-full">
                <Section4 />
            </div>
        </MainLayout>
    )
}
