import React from "react";

function App() {
  const [users, setUsers] = React.useState([]);

  //const getUsers = () => {
  //  fetch("https://6207742b92dd6600171c0dc5.mockapi.io/list1").then((res) => {
  //    res.json().then((result) => {
  //      setUsers(result);
  //    });
  //  });
  //};

  async function getUsers() {
    try {
      let response = await fetch(
        "https://6207742b92dd6600171c0dc5.mockapi.io/list1"
      );
      let result = await response.json();
      setUsers(result);
    } catch (err) {
      // перехватит любую ошибку в блоке try: и в fetch, и в response.json
      alert(err);
    }
  }

  return (
    <div>
      <ul>
        {users.map((obj) => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
      <button onClick={getUsers}>Получить список пользователей</button>
    </div>
  );
}
export default App;
