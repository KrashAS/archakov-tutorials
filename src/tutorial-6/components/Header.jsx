import React from "react";
import { Nav } from "react-bootstrap";

function Header() {
  return (
    <header>
      <h2>
        <a href="/">React Blog</a>
      </h2>
      <Nav variant="pills" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/home">Главная</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">Обо мне</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/profile">Профиль</Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
}
export default Header;
