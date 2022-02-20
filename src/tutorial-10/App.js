import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import { FullPost } from "./pages/FullPost";
import { ErrorPageNotFound } from "./pages/ErrorPageNotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<h2>Логин</h2>} />
        <Route path="/post/:id" element={<FullPost />} />
        <Route path="*" element={<ErrorPageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

//{pathname === "/" && <Home />}
//{pathname === "/about" && <About />}
//{pathname === "/login" && <h2>Логин</h2>}
//{postId && <FullPost id={postId} />}

//function Route({ path, element, exact }) {
//  const { pathname } = window.location;
//
//  if (exact) {
//    if (path === pathname) {
//      return element;
//    }
//  } else {
//    if (pathname.includes(path)) {
//      return element;
//    }
//  }
//  return null;
//}

// const postId = window.location.pathname.split("/post/")[1];
