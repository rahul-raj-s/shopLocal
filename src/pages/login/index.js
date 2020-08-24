import React, { useState, useEffect } from "react";
import { Input, Button } from "../../components";
import style from "./login.module.css";

export default function Login(props) {
  const [state, setState] = useState({
    email: "",
    eError: "",
    pError: "",
    password: "",
    isClicked: false,
  });

  useEffect(() => {
    if (state.isClicked) {
      validation();
    }
  }, [state.email, state.password]);

  const validation = () => {
    const valid = { email: false, password: false };
    if (state.email.length > 5) {
      valid.email = true;
    }
    if (state.password.length > 5) {
      valid.password = true;
    }
    setState((prevState) => ({
      ...prevState,
      eError: !valid.email && "Invalid Email",
      pError: !valid.password && "Invalid Password",
    }));
    return valid.email && valid.password;
  };

  const login = (event) => {
    event.preventDefault();
    if (validation()) {
      console.log("Login");
    } else if (!state.isClicked) {
      setState((prevState) => ({ ...prevState, isClicked: true }));
    }
  };

  return (
    <div className={style.login_page}>
      <div className={style.login_form_container}>
        <div className={style.login_logo_container}>
          <h1>Shop ELocal</h1>
        </div>
        <form>
          <Input
            placeholder="E-mail"
            onChange={(e) => {
              e.persist();
              setState((prvState) => ({ ...prvState, email: e.target.value }));
            }}
            value={state.email}
            error={state.eError}
          />
          <Input
            placeholder="Password"
            onChange={(e) => {
              e.persist();
              setState((prvState) => ({
                ...prvState,
                password: e.target.value,
              }));
            }}
            value={state.password}
            error={state.pError}
          />
          <Button type="button" onClick={(event) => login(event)}>
            Login
          </Button>

          <span className={style.login_footer}>
            <a href="#top">Forgot Password</a>
            <p>
              New to ShopElocal ? <a href="/sign-up">sign up</a>
            </p>
          </span>
        </form>
      </div>
    </div>
  );
}
