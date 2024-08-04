import bg1 from "../../../public/assets/images/bg1.png";

export default function Content() {
    return (
        <div>
            <div className="w-full h-screen">
                <div className="w-full relative font-poppins ">
                    <div className="w-[50%] flex flex-col gap-[20px] absolute">
                        <div className="w-[70%]">
                            <h1 className="font-poppins text-[5rem] font-bold text-font-color">Modern Furniture</h1>
                        </div>
                        <div className="w-[60%]">
                            <p className="text-[1.1rem] text-font-color">
                                we combine interior and exterior design service and often
                                provide them as a single solution.
                            </p>
                        </div>
                        <div className="w-full flex gap-[20px]" >
                            <button className="w-[15%] border-2 h-[35px] rounded-[10px] bg-primary-blue text-[0.7rem] flex items-center justify-center"><a href="#">Start Now</a></button>
                            <button className="w-[15%] border-2 h-[35px] rounded-[10px] bg-primary-brown text-[0.7rem] flex items-center justify-center"><a href="#">Read More</a></button>
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <img src={bg1} alt="" className="w-[100%] h-[100vh]"/>
                    </div>
                </div>
            </div>
            <div className="w-full h-screen border-2 border-blue-500 flex items-center justify-center">
                <h1>Screen 2</h1>
            </div>
            <div className="w-full h-screen border-2 border-blue-500 flex items-center justify-center">
                <h1>Screen 3</h1>
            </div>
            <div className="w-full h-screen border-2 border-blue-500 flex items-center justify-center">
                <h1>Screen 4</h1>
            </div>
        </div>
    );
}