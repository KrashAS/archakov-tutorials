import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export const Header = () => {
  let { pathname } = useLocation();

  return (
    <div className="header">
      <Link to="/">
        <h2>React Blog</h2>
      </Link>
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link to="/" as={Link} active={pathname === "/"}>
            Главная
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/about" as={Link} active={pathname === "/about"}>
            Обо мне
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/login" as={Link} active={pathname === "/login"}>
            Войти
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
