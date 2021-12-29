import React from "react";

function CreateTab(props) {
  return (
    <div className="app-tabs">
      <div className={props.id === props.activeId ? "tab active" : "tab"}>
        <input id="tab-one" type="checkbox" name="tabs" />
        <label htmlFor="tab-one" onClick={props.onClickLabel}>
          {props.obj.title}
        </label>
        <div className="tab-content">
          <p>{props.obj.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CreateTab;
