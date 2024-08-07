import chair41 from "../../../public/assets/images/41.png";
import chair42 from "../../../public/assets/images/42.png";
import chair43 from "../../../public/assets/images/43.png";
import chair44 from "../../../public/assets/images/44.png";
import { FaPlus } from "react-icons/fa6";



const ProductCard = ({children}) =>{
    return(
        <div className="flex justify-between gap-5">
                    {children}
                </div>
    )
}

const Card = ({img, title, price}) =>{
    return(
        <div className="w-[25%]">
                        <div className="flex justify-center items-center h-[34vh] bg-[#ead8c8] rounded-t-[15px]">
                            <img src={img} alt="" className="w-2/5" />
                        </div>
                        <div className="p-[12px] flex justify-between items-center bg-[#e0bf9d] rounded-b-[15px]">
                            <div className="font-bold text-[17px]">
                                <h4>{title}</h4>
                                <h4>{price}</h4>
                            </div>
                            <div className="w-6 h-6 flex justify-center items-center bg-[#716255] text-[#eacab2] rounded-full">
                                <FaPlus className="fa-solid fa-plus"/>
                            </div>
                        </div>
                    </div>
    )
}

ProductCard.Card = Card
export default ProductCard