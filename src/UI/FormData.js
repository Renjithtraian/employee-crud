import React from "react";
import "../pages/details.scss";
import { useNavigate } from "react-router-dom";

const FormDataSection = ({
  handleInputChange,
  showAvatar,
  editedUser,
  handleEditSubmit,
  title,
  delTitle,
  nameInputIsInvalid,
  LastnameInputIsInvalid,
  phoneInputIsInvalid,
  genderInputIsInvalid,
  emailInputIsInvalid,
  addressInputIsInvalid,
  countryInputIsInvalid,
  cityInputIsInvalid,
  dobInputIsInvalid,
  usernameInputIsInvalid,
  passwordInputIsInvalid,
  designationInputIsInvalid,
  basicPayInputIsInvalid,
  imageInputIsInvalid,
  nameInputBlurHandler,
  LastnameInputBlurHandler,
  phoneInputBlurHandler,
  dobInputBlurHandler,
  cityInputBlurHandler,
  usernameInputBlurHandler,
  passwordInputBlurHandler,
  designationInputBlurHandler,
  emailInputBlurHandler,
  addressInputBlurHandler,
  countryInputBlurHandler,
  basePayInputBlurHandler,
  imageInputBlurHandler,
  formIsValid
}) => {
  const navigate = useNavigate();

  const cancelHandler = () => {
    navigate("/");
  };

  const nameFieldClasses = nameInputIsInvalid ? "edit-user-form edit-user-form-error" : "edit-user-form";
  const LastnameFieldClasses = LastnameInputIsInvalid ? "edit-user-form edit-user-form-error" : "edit-user-form"
  const phoneFieldClasses = phoneInputIsInvalid ? "edit-user-form edit-user-form-error" : "edit-user-form";
  const emailFieldClasses = emailInputIsInvalid ? "edit-user-form edit-user-form-error" : "edit-user-form";
  const addressFieldClasses = addressInputIsInvalid ? "edit-user-form edit-user-form-error" : "edit-user-form";
  const countryFieldClasses = countryInputIsInvalid ? "edit-user-form edit-user-form-error" : "edit-user-form";
  const cityFieldClasses = cityInputIsInvalid ? "edit-user-form edit-user-form-error" : "edit-user-form";
  const dobFieldClasses = dobInputIsInvalid ? "edit-user-form edit-user-form-error" : "edit-user-form";
  const usernameFieldClasses = usernameInputIsInvalid ? "edit-user-form edit-user-form-error" : "edit-user-form";
  const passwordFieldClasses = passwordInputIsInvalid ? "edit-user-form edit-user-form-error" : "edit-user-form";
  const designationFieldClasses = designationInputIsInvalid ? "edit-user-form edit-user-form-error" : "edit-user-form"
  const basePayFieldClasses = basicPayInputIsInvalid ? "edit-user-form edit-user-form-error" : "edit-user-form";
  const imageFieldClasses = imageInputIsInvalid ? "edit-user-form edit-user-form-error" : "edit-user-form";

  return (
    <form className="form" onSubmit={handleEditSubmit}>
      {showAvatar === false ? "" :
      <div className="image-section">
           <img src={editedUser.notes} alt="cover"/>
      </div>
       }
      <div className={showAvatar === false ? "edit-user-data" : "edit-user"} >
        <h1>{title}</h1>
        <br />
        <div className={nameFieldClasses}>
          <label>First Name</label>
          <input
            type="text"
            name="fname"
            value={editedUser.firstName}
            onChange={(event) => handleInputChange("fname", event.target.value)}
            onBlur={nameInputBlurHandler}
          />
          {nameInputIsInvalid && (
            <p className="err-text">Name must not be empty</p>
          )}
        </div>
        <div className={LastnameFieldClasses}>
          <label>Last Name</label>
          <input
            type="text"
            name="lname"
            value={editedUser.lastName}
            onChange={(event) => handleInputChange("lname", event.target.value)}
            onBlur={LastnameInputBlurHandler}
          />
          {LastnameInputIsInvalid && (
            <p className="err-text">Name must not be empty</p>
          )}
        </div>
        <div className="gender-field">
          <div className="gender-field-sec">
          <label>Male</label>
          <input
            type="radio"
            name="gender-male"
            value={1}
            checked={editedUser.gender === 1}
            onChange={(event) => handleInputChange("gender-male", 1)}
            onBlur={nameInputBlurHandler}
          />
          </div>
          <div className="gender-field-sec">
          <label>Female</label>
          <input
            type="radio"
            name="gender-female"
            value={2}
            checked={editedUser.gender === 2}
            onChange={(event) => handleInputChange("gender-female", 2)}
            onBlur={nameInputBlurHandler}
          />
          </div>
          {genderInputIsInvalid && <p className="err-text">Gender field must not be empty</p>}
        </div>
        <div className={phoneFieldClasses}>
          <label>phone</label>
          <input
            type="text"
            name="phone"
            value={editedUser.phone}
            onChange={(event) => handleInputChange("phone", event.target.value)}
            onBlur={phoneInputBlurHandler}
          />
          {phoneInputIsInvalid && (
            <p className="err-text">Phone must not be empty</p>
          )}
        </div>
        <div className={emailFieldClasses}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={editedUser.email}
            onChange={(event) => handleInputChange("email", event.target.value)}
            onBlur={emailInputBlurHandler}
          />
          {emailInputIsInvalid && (
            <p className="err-text">Email a valid email</p>
          )}
        </div>
        <div className={addressFieldClasses}>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={editedUser.address}
            onChange={(event) =>
              handleInputChange("address", event.target.value)
            }
            onBlur={addressInputBlurHandler}
          />
          {addressInputIsInvalid && (
            <p className="err-text">Address must not be empty</p>
          )}
        </div>
        <div className={dobFieldClasses}>
          <label>Date of Birth</label>
          <input
            type="datetime-local"
            name="dob"
            value={editedUser.dateOfBirth}
            onChange={(event) =>
              handleInputChange("dob", event.target.value)
            }
            onBlur={dobInputBlurHandler}
          />
          {dobInputIsInvalid && (
            <p className="err-text">Address must not be empty</p>
          )}
        </div>
        <div className={countryFieldClasses}>
          <label>country</label>
          <input
            type="text"
            name="country"
            value={editedUser.country}
            onChange={(event) =>
              handleInputChange("country", event.target.value)
            }
            onBlur={countryInputBlurHandler}
          />
          {countryInputIsInvalid && (
            <p className="err-text">Country must not be empty</p>
          )}
        </div>
        <div className={cityFieldClasses}>
          <label>City</label>
          <input
            type="text"
            name="city"
            value={editedUser.city}
            onChange={(event) =>
              handleInputChange("city", event.target.value)
            }
            onBlur={cityInputBlurHandler}
          />
          {cityInputIsInvalid && (
            <p className="err-text">City must not be empty</p>
          )}
        </div>
        <div className={basePayFieldClasses}>
          <label>basicPay</label>
          <input
            type="number"
            name="basePay"
            value={editedUser.basicPay}
            onChange={(event) =>
              handleInputChange("basePay", event.target.value)
            }
            onBlur={basePayInputBlurHandler}
          />
          {basicPayInputIsInvalid && (
            <p className="err-text">Basic pay must not be empty</p>
          )}
        </div>
        <div className={designationFieldClasses}>
          <label>Designation</label>
          <input
            type="number"
            name="designation"
            value={editedUser.designation}
            onChange={(event) =>
              handleInputChange("designation", event.target.value)
            }
            onBlur={designationInputBlurHandler}
          />
          {designationInputIsInvalid && (
            <p className="err-text">Designation must not be empty</p>
          )}
        </div>
        <div className={usernameFieldClasses}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={editedUser.username}
            onChange={(event) =>
              handleInputChange("username", event.target.value)
            }
            onBlur={usernameInputBlurHandler}
          />
          {usernameInputIsInvalid && (
            <p className="err-text">Username must not be empty</p>
          )}
        </div>
        <div className={passwordFieldClasses}>
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={editedUser.password}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            onBlur={passwordInputBlurHandler}
          />
          {passwordInputIsInvalid && (
            <p className="err-text">Password must not be empty</p>
          )}
        </div>
        <div className={imageFieldClasses}>
          <label>Image</label>
          <input
            type="text"
            name="notes"
            value={editedUser.notes}
            onChange={(event) => handleInputChange("notes", event.target.value)}
            onBlur={imageInputBlurHandler}
          />
          {imageInputIsInvalid && (
            <p className="err-text">Image must not be empty</p>
          )}
        </div>
        <div className="btn">
          <button disabled={!formIsValid}>{delTitle}</button>
          <button onClick={cancelHandler}>cancel</button>
        </div>
      </div>
    </form>
  );
};

export default FormDataSection;
