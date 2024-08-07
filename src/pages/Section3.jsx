import chair41 from "../../public/assets/images/41.png";
import chair42 from "../../public/assets/images/42.png";
import chair43 from "../../public/assets/images/43.png";
import chair44 from "../../public/assets/images/44.png";
import chair45 from "../../public/assets/images/45.png";
import chair46 from "../../public/assets/images/46.png";
import chair47 from "../../public/assets/images/47.png";
import chair48 from "../../public/assets/images/48.png";
import NavLinksection3 from "../components/elements/Navlinksection3";
import ProductCard from "../components/elements/ProductCard";
export default function Section3() {
    return (
        <div className="w-full flex flex-col items-center px-[50px] font-['Exo_2',_sans-serif] text-[#716255]">
            <div className="w-full flex justify-center">
                <h1 className="text-font-color font-bold text-[3rem]">A Huge Collection Of Furniture</h1>
            </div>
            <NavLinksection3>
                <NavLinksection3.List list={'All Interior'}/>
                <NavLinksection3.List list={'Home Officer'}/>
                <NavLinksection3.List list={'Bedroom'}/>
                <NavLinksection3.List list={'Sofa'}/>
                <NavLinksection3.List list={'Chair'}/>
                <NavLinksection3.List list={'More'}/>
            </NavLinksection3>
            <div className="w-full mt-12 flex flex-col gap-5">
                <ProductCard>
                    <ProductCard.Card
                        img={chair41}
                        title={'Circle Chair'}
                        price={'$85.00'}
                    />
                    <ProductCard.Card
                        img={chair42}
                        title={'Circle Chair'}
                        price={'$85.00'}
                    />
                    <ProductCard.Card
                        img={chair43}
                        title={'Circle Chair'}
                        price={'$85.00'}
                    />
                    <ProductCard.Card
                        img={chair44}
                        title={'Circle Chair'}
                        price={'$85.00'}
                    />
                </ProductCard>
                <ProductCard>
                    <ProductCard.Card
                        img={chair45}
                        title={'Circle Chair'}
                        price={'$85.00'}
                    />
                    <ProductCard.Card
                        img={chair46}
                        title={'Circle Chair'}
                        price={'$85.00'}
                    />
                    <ProductCard.Card
                        img={chair47}
                        title={'Circle Chair'}
                        price={'$85.00'}
                    />
                    <ProductCard.Card
                        img={chair48}
                        title={'Circle Chair'}
                        price={'$85.00'}
                    />
                </ProductCard>
            </div>
        </div>
    )
}