import ProductCard from "../elements/ProductCard";
import chair41 from "../../../public/assets/images/41.png";
import chair42 from "../../../public/assets/images/42.png";
import chair43 from "../../../public/assets/images/43.png";
import chair44 from "../../../public/assets/images/44.png";
import chair45 from "../../../public/assets/images/45.png";
import chair46 from "../../../public/assets/images/46.png";
import chair47 from "../../../public/assets/images/47.png";
import chair48 from "../../../public/assets/images/48.png";

export default function CardProduct() {
    return (
        <>
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
        </>
    )
}