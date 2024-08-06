import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="w-full py-[50px] px-[80px] bg-[#d7ad82] text-[#716255] flex justify-between items-center">
            <div>
                <h3 className="text-[25px] font-semibold">Other Info</h3>
                <ul className="mt-[5px] flex flex-col gap-[5px]">
                    <li className="text-[18px] list-none">Terms & conditions</li>
                    <li className="text-[18px] list-none">Privacy policy</li>
                    <li className="text-[18px] list-none">License</li>
                </ul>
            </div>
            <div>
                <h3 className="text-[25px] font-semibold">Media</h3>
                <ul className="mt-[5px] flex flex-col gap-[5px]">
                    <li className="text-[18px] list-none">Blogs</li>
                    <li className="text-[18px] list-none">Photo galery</li>
                    <li className="text-[18px] list-none">Latest news</li>
                </ul>
            </div>
            <div>
                <h3 className="text-[25px] font-semibold">Company</h3>
                <ul className="mt-[5px] flex flex-col gap-[5px]">
                    <li className="text-[18px] list-none">About us</li>
                    <li className="text-[18px] list-none">Career</li>
                    <li className="text-[18px] list-none">Services</li>
                </ul>
            </div>
            <div>
                <h3 className="text-[25px] font-semibold">Be social</h3>
                <ul className="mt-[5px] flex flex-col items-start gap-[5px]">
                    <li className="text-[18px] list-none">
                        <a href="#" className="flex justify-center items-center"><FaFacebookF className="mr-[7px]"/> facebook</a>
                    </li>
                    <li className="text-[18px] list-none">
                        <a href="#" className="flex justify-center items-center"><FaTwitter className="mr-[7px]"/>twitter</a>
                    </li>
                    <li className="text-[18px] list-none">
                        <a href="#" className="flex justify-center items-center"><FaLinkedinIn className="mr-[7px]"/>linkedln</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}