import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export const Login = () => {
  const [fields, setFields] = React.useState({ email: "", password: "" });
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault(); //Предотвратить нативное поведение формы(не делать перезагрузку)
    const resp = await fetch(
      `https://mentor.archakov.im/api/mock/login?email=${fields.email}&password=${fields.password}`
    );
    if (resp.ok) {
      navigate("/profile");
    } else {
      alert("Error, password and email is wrong! ");
    }
  };

  const handlChangeInput = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
    //я ввожу данные и сохраняю их в ...fields
    //email: test@test.ru, password: 123456
  };

  return (
    <Form className="login-form" onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          type="email"
          value={fields.email}
          onChange={handlChangeInput}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          name="password"
          type="password"
          value={fields.password}
          onChange={handlChangeInput}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Войти
      </Button>
    </Form>
  );
};
