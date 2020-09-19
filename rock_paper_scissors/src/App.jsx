import React, { Component } from "react";
import Images from "./components/Images";
/* import Score from "./components/Score"; */

const plays = ["rock", "paper", "scissors"];

class App extends Component {
  state = {
    user: plays[0],
    computer: plays[0],
    winner: "",
    userScore: 0,
    computerScore: 0,
  };

 

  playGame = () => {
    this.setState({
      computer: plays[Math.floor(Math.random() * plays.length)],
      winner: this.determineWinner(),
    });
  };

  determineWinner = () => {
    const { user, computer } = this.state;
    if (user === computer) {
      return "Tie";
    } else if (
      (user === "rock" && computer === "scissor") ||
      (user === "scissor" && computer === "paper") ||
      (user === "paper" && computer === "rock")
    ) {
   /*    this.setState({ userScore: this.state.userScore + 1 }); */
      return "You win!";
    } else {
/*       this.setState({ computerScore: this.state.computerScore + 1 }); */
      return "Computer wins, try again";
    }
  };

 

  render() {
    const { user, computer, winner } = this.state;
    return (
      <>
        <h1>Rock Paper Scissors</h1>
        <div>
          <Images plays={user} />
          <Images plays={computer} />
        </div>
        
        <button
          className="playsButton"
          id="button-rock"
          onClick={() => this.setState ({user: "rock"})}
        >
          Rock
        </button>
       
        <button
          className="playsButton"
          id="button-paper"
          onClick={() => this.setState ({user: "paper"}) }
        >
          Paper
        </button>{" "}
        
        <button
          className="playsButton"
          id="button-scissor"
          onClick={() => this.setState ({user: "scissor"}) }
        >
          Scissor
        </button>

        <button className="playGame" id="button-play" onClick={this.playGame}>
          Play
        </button>


        <div className="winner" id="winner">
          {winner ? this.determineWinner() : " "}
        </div>

             
      
       {/*  <Score userScore={this.state.userScore} computerScore={this.state.computerScore} /> */}
      
      </>
    );
  }
}
export default App;
