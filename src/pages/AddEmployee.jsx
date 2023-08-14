import React, { useState } from "react";
import "./details.scss";
import FormDataSection from "../UI/FormData";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const AddEmployee = ({ updatedForm,setShowPopup }) => {
  const navigate = useNavigate();

  const [isFormValid, setIsFormValid] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);
  const [inputIsValid, setInputIsValid] = useState(true);
  const [genderIsInvalid,setGenderisInvalid] = useState(false)

  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredLastNameIsTouched,setEnteredLastNameIsTouched] = useState(false)
  const [enteredPhoneIsTouched, setEnteredPhoneIsTouched] = useState(false);
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);
  const [enteredAddressIsTouched, setEnteredAddressIsTouched] = useState(false);
  const [enteredCountryIsTouched, setEnteredCountryIsTouched] = useState(false);
  const [enteredBasicPayIsTouched, setEnteredBasicPayIsTouched] = useState(false);
  const [enteredImageIsTouched, setEnteredImageIsTouched] = useState(false);
  const [enteredDobIsTouched,setEnteredDobIsTouched] = useState(false);
  const [enteredCityIsTouched,setEnteredCityIsTouched] = useState(false);
  const [enteredDesignationIsTouched,setDesignationIsTouched] = useState(false)
  const [enteredUsernameIsTouched,setEnteredUsernameIsTouched] = useState(false);
  const [enteredPasswordIsTouched,setEnteredPasswordIsTouched] = useState(false)

  // const [formIsValid,setFormIsValid] = useState(false);

  const [editedUser, setEditedUser] = useState({
    firstName: "",
    lastName:"",
    phone: "",
    email: "",
    address: "",
    dateOfBirth:"",
    username:"",
    password:"",
    designation:"",
    country: "",
    city:"",
    basicPay: "",
    gender: "",
    notes: "",
  });
  console.log(editedUser,"ed");

  const enteredNameIsValid = editedUser.firstName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const enteredLastNameIsValid= editedUser.lastName.trim() !== "";
  const LastnameInputIsInvalid = !enteredLastNameIsValid && enteredLastNameIsTouched

  const enteredPhoneIsValid = editedUser.phone.trim() !== "";
  const phoneInputIsInvalid = !enteredPhoneIsValid && enteredPhoneIsTouched;

  const enteredEmailIsvalid = editedUser.email.trim() !== "" && editedUser.email.includes("@")
  const emailInputIsInvalid = !enteredEmailIsvalid && enteredEmailIsTouched;

  const enteredAddressIsValid = editedUser.address.trim() !== "";
  const addressInputIsInvalid =
    !enteredAddressIsValid && enteredAddressIsTouched;

  const enteredCountryIsValid = editedUser.country.trim() !== "";
  const countryInputIsInvalid =
    !enteredCountryIsValid && enteredCountryIsTouched;

  const enteredDobIsValid = editedUser.dateOfBirth.trim() !== "";
  const dobInputIsInvalid = !enteredDobIsValid && enteredDobIsTouched;

  const enteredCityIsValid = editedUser.city.trim() !== "";
  const cityInputIsInvalid = !enteredCityIsValid && enteredCityIsTouched;

  const enteredUsernameIsValid = editedUser.username.trim() !== "";
  const usernameInputIsInvalid = !enteredUsernameIsValid && enteredUsernameIsTouched

  const enteredPasswordIsValid = editedUser.password.trim() !== "";
  const passwordInputIsInvalid = !enteredPasswordIsValid && enteredPasswordIsTouched

  const enteredDesignationIsValid = editedUser.designation !== "";
  const designationInputIsInvalid = !enteredDesignationIsValid && enteredDesignationIsTouched

  // const enteredBasicPayIsValid = editedUser.basicPay.trim() !== "";
  const enteredBasicPayIsValid = editedUser.basicPay > 0;
  const basicPayInputIsInvalid =
    !enteredBasicPayIsValid && enteredBasicPayIsTouched;

  const enteredImageIsValid = editedUser.notes.trim() !== "";
  const imageInputIsInvalid = !enteredImageIsValid && enteredImageIsTouched;

  let formIsValid;

  if (
    enteredNameIsValid &&
    enteredLastNameIsValid &&
    enteredPhoneIsValid &&
    enteredEmailIsvalid &&
    enteredAddressIsValid &&
    enteredCountryIsValid &&
    enteredBasicPayIsValid &&
    enteredCityIsValid &&
    enteredDobIsValid &&
    enteredUsernameIsValid &&
    enteredPasswordIsValid &&
    enteredDesignationIsValid &&
    enteredImageIsValid
  ) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameIsTouched(true);
  };
  const LastnameInputBlurHandler = (event) =>{
    setEnteredLastNameIsTouched(true)
  }
  const phoneInputBlurHandler = (event) => {
    setEnteredPhoneIsTouched(true);
  };
  const emailInputBlurHandler = (event) => {
    setEnteredEmailIsTouched(true);
  };
  const addressInputBlurHandler = (event) => {
    setEnteredAddressIsTouched(true);
  };
  const countryInputBlurHandler = (event) => {
    setEnteredCountryIsTouched(true);
  };
  const basePayInputBlurHandler = (event) => {
    setEnteredBasicPayIsTouched(true);
  };
  const imageInputBlurHandler = (event) => {
    setEnteredImageIsTouched(true);
  };
  const dobInputBlurHandler = (event) => {
    setEnteredDobIsTouched(true)
  }
  const cityInputBlurHandler = (event) => {
    setEnteredCityIsTouched(true)
  }
  const usernameInputBlurHandler = (event) => {
    setEnteredUsernameIsTouched(true)
  }
  const passwordInputBlurHandler = (event) => {
    setEnteredPasswordIsTouched(true)
  }
  const designationInputBlurHandler = (event) => {
    setDesignationIsTouched(true)
  }

  const handleInputChange = (identifier, value) => {
    if (identifier === "notes" && value) {
      setShowAvatar(true);
    }
    if (identifier === "fname") {
      setEditedUser((prevUser) => ({
        ...prevUser,
        firstName: value,
      }));
    } else if(identifier === "lname"){
      setEditedUser((prevUser) => ({
        ...prevUser,
        lastName: value,
      }))
    }
    else if (identifier === "phone") {
      setEditedUser((prevUser) => ({
        ...prevUser,
        phone: value,
      }));
    } else if (identifier === "email") {
      setEditedUser((prevUser) => ({
        ...prevUser,
        email: value,
      }));
    }else if(identifier === "dob"){
      setEditedUser((prevUSer) => ({
        ...prevUSer,
        dateOfBirth: value,
      }))
    } 
    else if (identifier === "address") {
      setEditedUser((prevUser) => ({
        ...prevUser,
        address: value,
      }));
    } else if (identifier === "country") {
      setEditedUser((prevUser) => ({
        ...prevUser,
        country: value,
      }));
    }else if (identifier === "city") {
      setEditedUser((prevUser) => ({
        ...prevUser,
        city: value,
      }));
    } 
    else if (identifier === "basePay") {
      setEditedUser((prevUser) => ({
        ...prevUser,
        basicPay:value,
      }));
    }else if(identifier === "designation"){
      setEditedUser((prevUSer) => ({
        ...prevUSer,
        designation: value
      }))
    }else if(identifier === "username"){
      setEditedUser((prevUser) => ({
        ...prevUser,
        username: value
      }))
    }else if(identifier === "password"){
      setEditedUser((prevUser) => ({
        ...prevUser,
        password: value
      }))
    }
    else if(identifier === "gender-male"){
      setEditedUser((prevUser) => ({
        ...prevUser,
        gender:value,
      }))
    }else if(identifier === "gender-female"){
      setEditedUser((prevUser) => ({
        ...prevUser,
        gender:value,
      }))
    }
    else {
      setEditedUser((prevUser) => ({
        ...prevUser,
        notes: value,
      }));
    }
    setIsFormValid(true);
    setGenderisInvalid(false)
  };

  // const employeeData = {...editedUser,employeeID:Date.now()}

  const {sendRequest} = useFetch()   

  const handleEditSubmit = async(event) => {
    event.preventDefault();
    if (
      editedUser.firstName.trim() === "" ||
      editedUser.lastName.trim() === "" ||
      editedUser.email.trim() === "" ||
      editedUser.country.trim() === "" ||
      editedUser.basicPay < 0 ||
      editedUser.phone.trim() === "" ||
      editedUser.notes.trim() === "" ||
      !editedUser.gender
    ) {
      setInputIsValid(false);
      setGenderisInvalid(true)
      return;
    }

    const DataTask = (data) =>{
      console.log(("url",data));
      updatedForm(data)
    }
    
    sendRequest({url:`http://trainingsite.zerone-consulting.net/api.publish/api/employee`,
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body:editedUser,
    },DataTask)
    setShowPopup(true)
    navigate("/")
  };

  return (
    <>
      <FormDataSection
        showAvatar={showAvatar}
        handleEditSubmit={handleEditSubmit}
        title="Add employee"
        isFormValid={isFormValid}
        inputIsValid={inputIsValid}
        delTitle="Add User"
        handleInputChange={handleInputChange}
        editedUser={editedUser}
        nameInputIsInvalid={nameInputIsInvalid}
        LastnameInputIsInvalid={LastnameInputIsInvalid}
        phoneInputIsInvalid={phoneInputIsInvalid}
        emailInputIsInvalid={emailInputIsInvalid}
        genderInputIsInvalid={genderIsInvalid}
        addressInputIsInvalid={addressInputIsInvalid}
        countryInputIsInvalid={countryInputIsInvalid}
        cityInputIsInvalid={cityInputIsInvalid}
        dobInputIsInvalid={dobInputIsInvalid}
        usernameInputIsInvalid={usernameInputIsInvalid}
        passwordInputIsInvalid={passwordInputIsInvalid}
        designationInputIsInvalid={designationInputIsInvalid}
        basicPayInputIsInvalid={basicPayInputIsInvalid}
        imageInputIsInvalid={imageInputIsInvalid}
        formIsValid={formIsValid}
        nameInputBlurHandler={nameInputBlurHandler}
        LastnameInputBlurHandler={LastnameInputBlurHandler}
        phoneInputBlurHandler={phoneInputBlurHandler}
        emailInputBlurHandler={emailInputBlurHandler}
        addressInputBlurHandler={addressInputBlurHandler}
        countryInputBlurHandler={countryInputBlurHandler}
        dobInputBlurHandler={dobInputBlurHandler}
        cityInputBlurHandler={cityInputBlurHandler}
        usernameInputBlurHandler={usernameInputBlurHandler}
        passwordInputBlurHandler={passwordInputBlurHandler}
        designationInputBlurHandler={designationInputBlurHandler}
        basePayInputBlurHandler={basePayInputBlurHandler}
        imageInputBlurHandler={imageInputBlurHandler}
      />
    </>
  );
};

export default AddEmployee;
