import React from "react";

class ClassProfile extends React.Component {
  render() {
    return (
      <div className="profile">
        Классовый компонет
        <p>
          Привет, <b>{this.props.name.split(" ")[0]}</b>!
        </p>
        <p>
          Дата регистрации:{" "}
          {this.props.registredAt
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
}
export default ClassProfile;
