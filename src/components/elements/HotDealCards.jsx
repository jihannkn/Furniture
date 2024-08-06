/* eslint-disable react/prop-types */
// const HotDealCards = ({ children }) => {
//     return (
//         <div className="w-[20%] flex flex-col gap-[10px] text-font-color" >
//             {children}
//         </div>
//     )
// }

// const Icon = ({ icon }) => {
//     return (
//         {icon}
//     )
// }

// const Title = ({ title }) => {
//     return (
//         <h2 className="font-bold text-[1.5rem]">{title}</h2>
//     )
// }

// const Description = ({ desc }) => {
//     return (
//         <h2 className="font-bold text-[1.5rem]">{desc}</h2>
//     )
// }

// HotDealCards.Icon = Icon
// HotDealCards.Title = Title
// HotDealCards.Description = Description

// export default HotDealCards

const HotDealCards = ({ icon: Icon, title, desc }) => {
    return (
      <div className="w-[20%] flex flex-col gap-[10px] text-font-color">
        <Icon className="text-[4rem]" />
        <h2 className="font-bold text-[1.5rem]">{title}</h2>
        <p className="text-[22px]">{desc}</p>
      </div>
    );
  };
  
  export default HotDealCards