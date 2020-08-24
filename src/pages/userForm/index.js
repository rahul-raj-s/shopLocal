import React, { useState, useRef } from "react";
import { Input, Button } from "../../components";
import style from "./userForm.module.css";
import { userPic } from "../../assets";
import { useLocation } from "react-router-dom";

export default function UserFrom(props) {
  const location = useLocation();
  const formType = location.pathname === "/sign-up" ? "sign-up" : "profile";
  const [user, setUser] = useState({
    image: userPic,
    first_name: "",
    last_name: "",
    pin_code: "",
    phone: "",
    email: "",
    password: "",
  });
  const [isEdit, setIsEdit] = useState(formType === "sign-up");
  const userImgRef = useRef(null);

  const handleChange = (field, value) => {
    const newState = { ...user };
    newState[field] = value;
    setUser(newState);
  };
  const handleProfile = (e) => {
    e.preventDefault();
    if (!isEdit) {
      setIsEdit(true);
    } else {
      // Update call
      setIsEdit(false);
    }
  };
  return (
    <div className={style.userform_container}>
      <form>
        <div className={style.userfrom_top}>
          {formType === "sign-up" && <h2>Sign Up</h2>}
          {formType === "profile" && <h2>Hello</h2>}
          <img
            src={user.image}
            alt=""
            onClick={() => isEdit && userImgRef.current.click()}
          />
          <input
            ref={userImgRef}
            type="file"
            onChange={(e) => {
              handleChange("image", URL.createObjectURL(e.target.files[0]));
            }}
            readOnly={!isEdit}
          />
        </div>
        <div className={style.name_container}>
          <Input
            placeholder="First Name"
            value={user.first_name}
            onChange={(e) => handleChange("first_name", e.target.value)}
            readOnly={!isEdit}
          />
          <Input
            placeholder="Last Name"
            value={user.last_name}
            onChange={(e) => handleChange("last_name", e.target.value)}
            readOnly={!isEdit}
          />
        </div>
        <Input
          placeholder="Phone"
          value={user.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          readOnly={!isEdit}
        />
        <Input
          placeholder="E-mail"
          value={user.email}
          onChange={(e) => handleChange("email", e.target.value)}
          readOnly={!isEdit}
        />
        <address className={style.name_container}>
          <Input
            placeholder="Address"
            value={user.locality}
            onChange={(e) => handleChange("locality", e.target.value)}
            readOnly={!isEdit}
          />
          <Input
            placeholder="Pin code"
            value={user.pin_code}
            onChange={(e) => handleChange("pin_code", e.target.value)}
            readOnly={!isEdit}
          />
        </address>
        {formType === "singUp" && (
          <Input
            placeholder="Password"
            value={user.password}
            onChange={(e) => handleChange("password", e.target.value)}
            readOnly={!isEdit}
          />
        )}
        {formType === "sign-up" && <Button>Sign Up </Button>}
        {formType === "profile" && (
          <Button onClick={handleProfile}>{isEdit ? "Save" : "Edit"} </Button>
        )}
        {formType === "sign-up" && (
          <p>
            Already have a account? <a href="/login">Login</a>
          </p>
        )}
      </form>
    </div>
  );
}
