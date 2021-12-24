import React from "react";
//import CreateInput from "./components/CreateInput";
//import CreateButton from "./components/CreateButton";

export default function App() {
  let email, password;

  function onChangeInput(event) {
    //event.stopPropagation();
    //event.preventDefault();
    if (event.currentTarget.id === "postName") {
      email = event.target.value;
    } else if (event.currentTarget.id === "password") {
      password = event.target.value;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (email && password) {
      console.log({ email, password });
      event.target.reset();
      email = "";
      password = "";

      //console.log();
    } else {
      alert("Поле ввода Е-mail или Пароль не заполнены!");
    }
  }
  return (
    <form
      className="formRegistration"
      action="#"
      method="post"
      onSubmit={(event) => handleSubmit(event)}
    >
      <input
        type="text"
        name="name"
        onChange={onChangeInput}
        id="postName"
        placeholder="E-Mail"
      />
      <input
        type="password"
        onChange={onChangeInput}
        id="password"
        placeholder="Пароль"
      />
      <button type="submit">Войти</button>
    </form>
  );
}
