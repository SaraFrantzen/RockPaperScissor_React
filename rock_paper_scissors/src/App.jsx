import React, { Component } from "react";
import Footer from "./Footer";
import RockPaperScissors from "./components/RockPaperScissors";

class App extends Component {
  render() {
    return (
      <div>
        <title>Rock Paper Scissor</title>
        <link rel="icon" href="/favicon.ico" />

        <main>
          <h1 className="title">Lets play Rock Scissors Paper</h1>

          <p className="description">description</p>
          <p className="rules">
            If you play rock, you will beat the computer chosen scissors -- rock
            crushes scissors <br></br>
            But you would lose if the computer plays paper -- paper covers rock
            <br></br>A play of paper will lose to a play of scissors -- scissors
            cuts paper
          </p>
          <RockPaperScissors />
          <br></br>
          <button id="rock">ROCK</button>
          <br></br>
          <button id="paper">PAPER</button>
          <br></br>
          <button id="scissors">SCISSORS</button>
          <br></br>
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
