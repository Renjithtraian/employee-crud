import React from 'react'
import "./PopupMsg.scss";
import { BsCheck2 } from "react-icons/bs";

const PopupMsg = ({title}) => {
  return (
    <div className='popup'>
        <div className="popup-msg">
            <h1>{title}</h1>
            {title === "Loading..." ? "" :
            <BsCheck2 className='tick-icon'/>}
        </div>
    </div>
  )
}

export default PopupMsg