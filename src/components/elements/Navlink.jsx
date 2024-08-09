/* eslint-disable react/prop-types */
const NavLink = ({ children }) => {
    return (
        <ul className="flex gap-[50px] w-full font-exo2">
            {children}
        </ul>
    )
}

const Link = ({ link }) => {
    return (
        <li className="hover:font-bold text-[18px] text-[#716255] h-[30px] w-[20%] flex justify-center items-center font-['Exo_2',_sans-serif]">{link}</li>
    )
}

NavLink.Link = Link

export default NavLink