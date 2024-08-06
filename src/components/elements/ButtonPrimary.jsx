/* eslint-disable react/prop-types */
const ButtonPrimary = ({ text, className }) => {
    return (
        <button className={`px-[22px] py-[12px] rounded-[5px] border-none ${className}`}>
            {text}
        </button>
    )
}

export default ButtonPrimary