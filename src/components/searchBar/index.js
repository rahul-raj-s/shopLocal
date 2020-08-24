import React from "react";
import { search } from "../../assets";
import style from "./searchBar.module.css";

export default function SearchBar({ value, onChange, onClick }) {
  return (
    <div className={style.search_box}>
      <input vale={value} onChange={(e) => onChange(e)} placeholder="Search" />
      <img src={search} alt="" onClick={onClick} />
    </div>
  );
}
