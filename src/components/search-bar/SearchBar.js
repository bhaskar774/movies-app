import React, { useState } from "react";
import s from "./styles.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");
  const submit = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={submit}
        value={value}
        onChange={handleSubmit}
        type="text"
        className={s.input}
        placeholder={"search a movie you like"}
      />
    </>
  );
}

export default SearchBar;
