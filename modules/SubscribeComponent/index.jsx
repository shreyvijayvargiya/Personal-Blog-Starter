import React from "react";


const SubscribeComponent = ({ flex }) => {
  return (
    <div className={`${flex === true ? "grid grid-cols-2 items-center gap-1":"flex flex-col justify-center" }`}>
      <input className="p-2 focus:none outline-none border hover:bg-gray-50 cursor-pointer border-gray-900 rounded-md m-2 dark:bg-gray-800 dark:border-gray-900" placeholder="Enter email" />
      <button className="bg-gray-900 text-white m-2 hover:bg-black rounded-md p-2 focus:outline-none outline-none dark:bg-indigo-900">Subscribe</button>
    </div>
  )
}
export default SubscribeComponent;
