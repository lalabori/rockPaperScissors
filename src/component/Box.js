import React from "react";

const Box = (props) => {
  let result;

  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  } 
  return (
    <div>
      <div className={`box ${result}`}>
        <h1 className="title"> {props.title}</h1>
        <img className="img" src={props.item && props.item.img} />
        <h2 className="title"> {result} </h2>
      </div>
    </div>
  );
};

export default Box;
