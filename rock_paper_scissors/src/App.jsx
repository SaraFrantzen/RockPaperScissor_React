import React, { Component } from "react";
import Images from "./components/Images";
import Score from "./components/Score";
import RpsHeader from "./components/RpsHeader"
import Instructions from "./components/Instructions";
import { Grid, Container } from "semantic-ui-react";

const plays = ["rock", "paper", "scissors"];

class App extends Component {
  state = {
    user: plays[0],
    computer: plays[0],
    winner: "",
    userScore: 0,
    computerScore: 0,
    ishidden: true,
  };

  playGame = () => {
    this.setState({
      computer: plays[Math.floor(Math.random() * plays.length)],
      winner: this.determineWinner(),
      userScore: this.setScore(),
      computerScore: this.setScore(),
    });
    this.toggleHidden();
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

  setScore = () => {
    const { winner } = this.state;
    if (winner === "You win!") {
      this.setState.userScore = +1;
    } else if (winner === "Computer wins, try again") {
      this.setState({ computerScore: this.statecomputerScore + 1 });
    }
  };

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  userPlaysRock = () => {
    this.setState({
      user: "rock",
    });
    this.toggleHidden();
  };
  userPlaysPaper = () => {
    this.setState({
      user: "paper",
    });
    this.toggleHidden();
  };
  userPlaysScissors = () => {
    this.setState({
      user: "scissor",
    });
    this.toggleHidden();
  };

  render() {
    const { user, computer, winner } = this.state;
    return (
      <>
       <RpsHeader />

       <Instructions />
       
        <Container>
          <Grid divided="vertically">
            <Grid.Row columns={2}>
              <Grid.Column>
                <Images plays={user} />
              </Grid.Column>
              <Grid.Column>
                {!this.state.isHidden && (
                  <Images plays={computer} id="computerPlayImg" />
                )}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column>
                <button
                  className="playsButton"
                  id="button-rock"
                  onClick={this.userPlaysRock}
                >
                  Rock
                </button>
              </Grid.Column>
              <Grid.Column>
                <button
                  className="playsButton"
                  id="button-paper"
                  onClick={this.userPlaysPaper}
                >
                  Paper
                </button>
              </Grid.Column>
              <Grid.Column>
                <button
                  className="playsButton"
                  id="button-scissor"
                  onClick={this.userPlaysScissors}
                >
                  Scissor
                </button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <p>You'r Choice: {user}</p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <button
                  className="playGame"
                  id="button-play"
                  onClick={this.playGame}
                >
                  Start Game
                </button>
              </Grid.Column>
              <Grid.Column>
                {!this.state.isHidden && (
                  <div className="winner" id="winner">
                    {winner ? this.determineWinner() : " "}
                  </div>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Score
            userScore={this.state.userScore}
            computerScore={this.state.computerScore}
          />
        </Container>
      </>
    );
  }
}
export default App;
