import { useState } from "react";
import Box from "./component/Box";
import "./App.css";

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

function App() {
   const[userSelect, setUserSelect] = useState(null);
   const[computerSelect, setComputerSelect] = useState(null);
   const[result, setResult] = useState("");

   const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    
    let computerChoice = computerRandomNum(); 
    setComputerSelect(computerChoice)

    setResult(judgement(choice[userChoice], computerChoice))
   }

   const judgement = (user,computer) => {
    if(user.name == computer.name){
      return "tie"
    }else if(user.name=="Rock")return computer.name =="Scissors"?"win":"lose"
    else if(user.name=="Scissors")return computer.name == "Paper"?"win":"lose"
    else if(user.name=="Paper")return computer.name == "Rock"?"win":"lose"
   }

   const computerRandomNum = () => {
    let itemArray = Object.keys(choice);

    let randomNum = Math.floor(Math.random()*itemArray.length);
    console.log(randomNum)

    let final = itemArray[randomNum];
    return choice[final];
   }
   

  return (
    <div className="background">
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className="main">
        <button className="button" onClick={()=>play("rock")}> Rock </button> 
        <button className="button" onClick={()=>play("paper")}> Paper </button>
        <button className="button" onClick={()=>play("scissors")}> Scissors </button>
      </div>
    </div>
  );
}

export default App;
