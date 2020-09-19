import React, { Component } from "react";
import Images from "./components/Images";
/* import Footer from "./Footer"; */
/* import RockPaperScissors from "./components/RockPaperScissors"; */
/* import Message from "./components/Message"; */
/* import { playGame, determineWinner, selectPlays } from "./helpers/rockPaperScissorHelper"; */

const plays = ["rock", "paper", "scissors"];

class App extends Component {
  state = {
    user: plays[0],
    computer: plays[0],
    winner: "",
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
