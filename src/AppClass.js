import React, { Component } from "react";
import "./App.css";
import BoxClass from "./component/BoxClass"

const choice = {
  rock: {
    name: "Rock",
    img: "https://www.shutterstock.com/image-vector/illustration-stones-text-you-rock-600nw-1460437391.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://static.vecteezy.com/system/resources/previews/004/628/562/original/scissors-kawaii-cartoon-free-vector.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://www.shutterstock.com/image-vector/notebooks-notepads-memo-pads-planners-600nw-1390032596.jpg",
  },
};

export default class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      useSelect: null,
      computerSelect: null,
      result: "",
    };
  }

  play = (userChoice) => {
    let computerChoice = this.computerRandomNum();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };

  play = (userChoice) => {
    let computerChoice = this.computerRandomNum();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };

  computerRandomNum = () => {
    let itemArray = Object.keys(choice);
    let randomNum = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomNum];
    return choice[final];
  };

  judgement = (user, computer) => {
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
  };

  render() {
    return (
      <div className="background">
        <div className="main">
          <BoxClass title="You" item={this.state.userSelect} result={this.state.result} />
          <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result} />
        </div>
        <div className="main">
          <button className="button" onClick={() => this.play("rock")}>
            {" "}
            Rock{" "}
          </button>
          <button className="button" onClick={() => this.play("paper")}>
            {" "}
            Paper{" "}
          </button>
          <button className="button" onClick={() => this.play("scissors")}>
            {" "}
            Scissors{" "}
          </button>
        </div>
      </div>
    );
  }
}
