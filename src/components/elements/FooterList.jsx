


const FooterList = ({children}) => {
    return(
        <div className="flex flex-col items-start">
               {children}
            </div>
    )
}

const Title = ({title }) =>{
    return(
        <>
            <h3 className="text-[29px] font-semibold">{title}</h3>
        </>
    )
}

const ListContent =({content,icon})=>{
    return(
        <ul className="mt-[5px] flex flex-col gap-[5px]">
                    <li className="text-[23px] list-none">
                    <a href="#" className="flex justify-center items-center">
                        <i className="mr-[7px]">{icon}</i>
                    {content}</a>
                    </li>
                </ul>
    )
}



FooterList.ListContent = ListContent
FooterList.Title = Title
export default FooterList