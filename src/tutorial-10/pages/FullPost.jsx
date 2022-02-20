import React from "react";

import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { posts } from "./Home";

export const FullPost = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const post = posts.find((obj) => obj.id === Number(id));

  React.useEffect(() => {
    if (!post) {
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 3000);
    }
  });

  if (!post) {
    //return <Navigate to="/" />;
    return <h1>Статья не найдена!</h1>;
  }

  return (
    <div className="full-post">
      <h1>{post.title}</h1>
      <p></p>
      <img src={post.imageUrl} alt="Article" />
      <p>{post.text}</p>
      <Link to="/">
        <Button>Назад</Button>
      </Link>
    </div>
  );
};
