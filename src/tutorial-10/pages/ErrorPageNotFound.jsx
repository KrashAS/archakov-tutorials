import React from "react";

export const ErrorPageNotFound = () => {
  return (
    <div className="error">
      <h3>404 - Not found</h3>
      <p>{`Страница с адрессом: ${window.location} отсутствует`}</p>
    </div>
  );
};
