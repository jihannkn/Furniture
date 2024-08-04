import Content from "../fragments/Content";
import Footer from "../fragments/Footer";
import Navbar from "../fragments/Nafbar";

export default function MainLayout(){
    return(
        <div className="w-full px-[40px] bg-primary-bg">
            <div className="w-full">
                <Navbar/>
            </div>
            <div className="w-full">
                <Content/>
            </div>
            <div className="w-full">
                <Footer/>
            </div>

        </div>
    )
}