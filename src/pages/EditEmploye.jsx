import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./details.scss";
import FormDataSection from "../UI/FormData";
import useFetch from "../hooks/useFetch";

const EditEmploye = ({ updatedSection }) => {
  
  const { id } = useParams();

  const navigate = useNavigate();
  const [formIsValid,setFormIsValid] = useState(false)
  const [editedUser, setEditedUser] = useState({
    // employeeID:id,
    firstName: "",
    lastName: "",
    phone: "",
    email:"",
    address:"",
    dateOfBirth:"",
    username:"",
    password:"",
    designation:"",
    country:"",
    city:"",
    basicPay:"",
    gender:"",
    notes: "",
  });
  console.log("e",editedUser);

  useEffect(() => {
    fetch(`http://trainingsite.zerone-consulting.net/api.publish/api/employee/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEditedUser(data);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, [id]);

  const handleInputChange = (identifier, value) => {
    if (identifier === "fname") {
      setEditedUser((prevUser) => ({
        ...prevUser,
        firstName: value,
      }));
    }else if(identifier === "lname"){
      setEditedUser((prevUSer) => ({
        ...prevUSer,
        lastName: value,
      }))
    } 
    else if(identifier === "phone") {
      setEditedUser((prevUser) => ({
        ...prevUser,
        phone: value,
      }));
    }else if(identifier === "email"){
      setEditedUser((prevUser) => ({
        ...prevUser,
        email:value
      }))
    }else if(identifier === "address"){
      setEditedUser((prevUser) => ({
        ...prevUser,
        address:value
      }))
    }else if(identifier === "dob"){
      setEditedUser((prevUSer) => ({
        ...prevUSer,
        dateOfBirth: value,
      }))
    }
    else if(identifier === "country"){
      setEditedUser((prevUser) => ({
        ...prevUser,
        country:value
      }))
    }else if (identifier === "city") {
      setEditedUser((prevUser) => ({
        ...prevUser,
        city: value,
      }));
    } 
    else if(identifier === "basePay"){
      setEditedUser((prevUser) => ({
        ...prevUser,
        basicPay:value
      }))
    }else if(identifier === "designation"){
      setEditedUser((prevUSer) => ({
        ...prevUSer,
        designation: value
      }))
    }else if(identifier === "username"){
      setEditedUser((prevUSer) => ({
        ...prevUSer,
        username: value
      }))
    }else if(identifier === "password"){
      setEditedUser((prevUSer) => ({
        ...prevUSer,
        password: value
      }))
    }else if(identifier === "gender-male"){
      setEditedUser((prevUser) => ({
        ...prevUser,
        gender:value
      }))
    }else if(identifier === "gender-female"){
      setEditedUser((prevUser) => ({
        ...prevUser,
        gender:value
      }))
    }
    else{
      setEditedUser((prevUser) => ({
        ...prevUser,
        notes:value
      }))
    }
    setFormIsValid(true)
  };

  const {sendRequest} = useFetch()

  const handleEditSubmit = (event) => {
    event.preventDefault();
    if(!formIsValid){
      return
    }
    
    const DataTask = (data) =>{
      updatedSection(data)
    }

    sendRequest({url:`http://trainingsite.zerone-consulting.net/api.publish/api/employee/${id}`,
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body:editedUser,
    },DataTask)
      navigate("/")
  };

  return (
    <>
      <FormDataSection
        handleEditSubmit={handleEditSubmit}
        id={id}
        delTitle="Update"
        title="edit employee"
        handleInputChange={handleInputChange}
        editedUser={editedUser}
        formIsValid={formIsValid}
      />
    </>
  );
};

export default EditEmploye;
