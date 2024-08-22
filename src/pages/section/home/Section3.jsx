import ButtonCollection from "../../../components/elements/ButtonCollection";
import CardProduct from "../../../components/fragments/CardProduct";
export default function Section3() {
    return (
        <div className="w-full flex flex-col items-center px-[50px] font-['Exo_2',_sans-serif] text-[#716255]">
            <div className="w-full flex justify-center">
                <h1 className="text-font-color font-semibold text-[3.5rem]">A Huge Collection Of Furniture</h1>
            </div>
            <ButtonCollection>
                <ButtonCollection.List list={'All Interior'} />
                <ButtonCollection.List list={'Home Officer'} />
                <ButtonCollection.List list={'Bedroom'} />
                <ButtonCollection.List list={'Sofa'} />
                <ButtonCollection.List list={'Chair'} />
                <ButtonCollection.List list={'More'} />
            </ButtonCollection>
            <div className="w-full mt-12 flex flex-col gap-5">
                <CardProduct />
            </div>
        </div>
    )
}