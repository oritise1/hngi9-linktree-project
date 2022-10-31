import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <div>
          <button type="button"className="ButtonWrapper">
            <a href={props.link} target={"_blank"} rel="noreferrer">
              <p>{props.title}</p>
            </a>
          </button>
    </div>
  );
};

export default Button;
