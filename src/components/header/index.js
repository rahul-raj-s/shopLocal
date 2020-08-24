import React from "react";
import { userPic, logout, rajPic, shoppingCart, orders } from "../../assets";
import style from "./header.module.css";
import SearchBar from "../searchBar";
import { useHistory } from "react-router-dom";

export default function Header(props) {
  let history = useHistory();
  const logoutHandler = () => {
    history.push("/login");
  };
  return (
    <header className={style.header}>
      <div className={style.header_left_container}>
        <h1>Shop ELocal</h1>
        <SearchBar />
      </div>
      <div className={style.drop_down}>
        <img src={rajPic} alt="" />
        <div className={style.drop_down_content}>
          <span onClick={() => history.push("/profile")}>
            <img src={userPic} alt="" />
            My Profile
          </span>
          <span>
            <img src={shoppingCart} alt="" />
            My Cart
          </span>
          <span>
            <img src={orders} alt="" />
            My Orders
          </span>
          <span onClick={logoutHandler}>
            <img src={logout} alt="" />
            Log out
          </span>
        </div>
      </div>
    </header>
  );
}
