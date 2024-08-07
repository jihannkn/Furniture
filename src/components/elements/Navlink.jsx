const Navlink = ({children}) => {
    return(
        <ul className="flex gap-[50px] w-full font-poppins">
                   {children}
        </ul>
    )
}

const link = ({link}) => {
    return(
        <li className="hover:font-bold text-[18px] text-[#716255] h-[30px] w-[20%] flex justify-center items-center ">{link}</li>
    )
}

Navlink.link = link

export default Navlink