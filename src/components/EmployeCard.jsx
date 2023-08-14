import React from 'react'
import "./Employe.scss"
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { FaRegPaperPlane,FaMobileRetro } from "react-icons/fa6";

const EmployeCard = ({list,deleteItem}) => {

    const navigate = useNavigate()
    console.log("listss",list);

    const handleNavigate = () => {
        navigate(`${list.employeeID}`)
    }

    const dateObject = new Date(list.dateOfBirth);
    const formattedDate = dateObject.toLocaleDateString();
  
    return (
    <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={list.notes} alt='cover'/>
            <h1>Name : {list.firstName} {list.lastName}</h1> 
            <div className="details">
            <p><FaMobileRetro className='r-icon'/> PHONE : <span>{list.phone}</span></p>
            <p><FaRegPaperPlane className='r-icon'/> EMAIL : <span>{list.email}</span></p>
            <div className="gender">
            <FaUserAlt className='icon'/><p>GENDER : <span>{list.gender === 1 ? "Male" : "Female"}</span></p> 
            </div>
            </div>
          </div> 
          <div class="flip-card-back">
            <p className='det'><span>ADDRESS : {list.address}</span></p>
            <p className='det'><span>COUNTRY : {list.country}</span></p>
            <p className='det'><span>CITY : {list.city}</span></p>
            <p className='det'><span>BASIC PAY : {list.basicPay}</span></p>
            <p className='det'><span>DOB : {formattedDate}</span></p>
            <p className='det'><span>DESIGNATION : {list.designation === 2 ? "Software Engineer" : "Business Analyst"}</span></p>
            <p className='det'><span>USERNAME : {list.username}</span></p>
            <p className='det'><span>PASSWORD : {list.password}</span></p>
            <div className="btn">
                <button onClick={() => deleteItem(list.employeeID)}>Delete</button>
                <button onClick={handleNavigate}>Edit</button>
            </div>    
          </div>
        </div>
      </div>
    );
  }

export default EmployeCard