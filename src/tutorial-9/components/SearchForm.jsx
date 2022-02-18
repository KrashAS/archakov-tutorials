import React from "react";

function SearchForm(props) {
  console.log(props);
  const iconClearBtn = (
    <svg
      data-name="Layer 1"
      height="25"
      id="Layer_1"
      viewBox="0 0 200 200"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
    </svg>
  );
  return (
    <form className="app-form">
      <input
        type="text"
        className="app-input"
        placeholder="Укажите GitHub-аккаунт"
        value={props.value}
        onChange={props.onChange}
        title="Разрешено использовать только латинские буквы"
        pattern="^[a-zA-Z0-9]+$"
      />

      <button className="app-form_btn" onClick={props.onClick}>
        {iconClearBtn}
      </button>
    </form>
  );
}
export default SearchForm;
