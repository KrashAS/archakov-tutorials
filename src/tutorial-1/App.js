import React from "react";
import Profile from "./components/Profile";
import ClassProfile from "./components/ClassProfile";

export default function App() {
  return (
    <div className="App">
      <Profile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
      <ClassProfile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
    </div>
  );
}

//<p>Дата регистрации: {props.registredAt}</p>;
//<Profile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />;
//function montoToStr(num) {
//  return num > 12 || num < 1
//    ? null
//    : "январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь".split(
//        ","
//      )[num - 1];
//}
//<Profile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
