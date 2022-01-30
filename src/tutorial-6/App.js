import React from "react";
import Article from "./components/Article";
import Header from "./components/Header";
import CardTitle from "./components/CardTitle";
import PageHome from "./components/PageHome";
import PageAbout from "./components/PageAbout";
import PageProfile from "./components/PageProfile";
import Footer from "./components/Footer";

export default function App() {
  const { pathname } = window.location;
  const isPost = pathname.includes("/post/");
  const id = pathname.split("/")[2];

  return (
    <div className="App">
      <Header />
      {pathname === "/" && <CardTitle />}
      {isPost && <Article id={id} />}
      {pathname.includes("/home") && <PageHome />}
      {pathname.includes("/about") && <PageAbout />}
      {pathname.includes("/profile") && <PageProfile />}
      <br />
      <Footer />
    </div>
  );
}
