import React from "react";

function ResultSearchForm(props) {
  return (
    <div className="app-user" key={props.results.id}>
      <div className="app-user_info">
        <div className="app-user_image">
          <img src={props.results.avatar_url} alt="logo" />
        </div>
        <div className="app-user_data">
          <h1 className="app-user_name">
            {props.results.name}
            <span>{props.results.login}</span>
          </h1>
          <p className="app-user_about">{props.results.bio}</p>
        </div>
      </div>
      <ul className="app-user_stats">
        <li className="app-user_stats-item">
          Репозитории
          <span>{props.results.public_repos}</span>
        </li>
        <li className="app-user_stats-item">
          Подписчиков
          <br />
          <span>{props.results.followers}</span>
        </li>
        <li className="app-user_stats-item">
          Публичные
          <span>{props.results.public_gists}</span>
        </li>
      </ul>
      <ul className="app-user_location">
        <li className="app-user_location-item">{props.results.location}</li>
        <li className="app-user_location-item">
          <a href={props.results.blog}>{props.results.blog}</a>
        </li>
      </ul>
    </div>
  );
}
export default ResultSearchForm;
