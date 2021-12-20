import React from "react";

function Profile(props) {
  //console.log(props.registredAt);
  return (
    <div className="profile">
      Функциональный компонент
      <p>
        Привет, <b>{props.name.split(" ")[0]}</b>!
      </p>
      <p>
        Дата регистрации:{" "}
        {props.registredAt
          .toLocaleDateString("ru-RU", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
          .slice(0, -3)}
      </p>
    </div>
  );
}

export default Profile;
