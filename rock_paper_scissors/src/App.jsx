import React, { Component } from "react";
import Images from "./components/Images";

const plays = ["rock", "paper", "scissors"];

class App extends Component {
  state = {
    user: plays[0],
    computer: plays[0],
    winner: "",
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
      return "You win!";
    } else {
      return "Computer wins, try again";
    }
  };
  selectPlays = (plays) => {
    this.setState({
      user: plays,
      winner: "",
    });
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
          onClick={() => this.selectPlays("rock")}
        >
          Rock
        </button>
        <button
          className="playsButton"
          onClick={() => this.selectPlays("paper")}
        >
          Paper
        </button>{" "}
        <button
          className="playsButton"
          onClick={() => this.selectPlays("scissor")}
        >
          Scissor
        </button>
        <div className="winner">{winner ? this.determineWinner() : " "}</div>
        <button type="button" onClick={this.playGame}>
          Play
        </button>
      </>
    );
  }
}
export default App;
