
/* eslint-disable react/prop-types */
const NavLink = ({ children }) => {
    return (
        <div className="mt-12 flex justify-center items-center gap-4">
            {children}
        </div>
    )
}

const List = ({ list }) => {
    return (
        <button className="px-[45px] py-[10px] border-none rounded-[13px] font-['Exo_2',_sans-serif] text-black bg-[#eacab2] hover:bg-[#ba9a76]">{list}</button>
    )
}

NavLink.List = List

export default NavLink
