import React, { Component } from "react";
import Images from "./components/Images";
import Score from "./components/Score";
import RpsHeader from "./components/RpsHeader";
import Instructions from "./components/Instructions";
import RpsFooter from "./components/RpsFooter";
import { Grid, Container, Button } from "semantic-ui-react";

const plays = ["rock", "paper", "scissor"];

class App extends Component {
  state = {
    user: [],
    computer: [],
    result: "",
    userScore: 0,
    computerScore: 0,
    ishidden: true,
  };

  determineResult = (user, computer) => {
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

  playGame = () => {
    let computerPlay = plays[Math.floor(Math.random() * plays.length)];
    this.setState({ computer: computerPlay });
    let userPlay = this.state.user;
    let result = this.determineResult(userPlay, computerPlay);
    if (result !== "Tie") {
      this.setScore(result);
    } else {
      this.setState({ result: result });
    }

    this.toggleHidden();
  };

  setScore = (result) => {
    if (result === "You win!") {
      this.setState({ userScore: this.state.userScore + 1, result: result });
    } else if (result === "Computer wins, try again") {
      this.setState({
        computerScore: this.state.computerScore + 1,
        result: result,
      });
    }
  };

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  userPlays = (e) => {
    this.setState({
      user: e.target.name,
    });
    this.toggleHidden();
  };

  render() {
    const { user, computer, result } = this.state;
    return (
      <>
        <RpsHeader />
        <Instructions />
        <Container>
          <Grid className="playGrid">
            <Grid.Row columns={2}>
              <Grid.Column>
                <Images id="userPlayImg" plays={user} />
              </Grid.Column>
              <Grid.Column>
                {!this.state.isHidden && (
                  <Images plays={computer} id="computerPlayImg" />
                )}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Button
                  circular
                  size="massive"
                  color="black"
                  className="playsButton"
                  id="button-rock"
                  name="rock"
                  onClick={this.userPlays}
                >
                  Rock
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button
                  circular
                  size="massive"
                  color="black"
                  className="playsButton"
                  id="button-paper"
                  name="paper"
                  onClick={this.userPlays}
                >
                  Paper
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button
                  circular
                  size="massive"
                  color="black"
                  className="playsButton"
                  id="button-scissor"
                  name="scissor"
                  onClick={this.userPlays}
                >
                  Scissor
                </Button>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={2}>
              <Grid.Column>
                <p id="your-choice">You'r Choice: {user}</p>
              </Grid.Column>
              <Grid.Column>
                {!this.state.isHidden && (
                  <div className="result" id="result">
                    {result}
                  </div>
                )}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={2}>
              <Grid.Column>
                <Button
                  circular
                  size="huge"
                  color="black"
                  className="playGame"
                  id="button-play"
                  onClick={this.playGame}
                >
                  Start Game
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Score
            userScore={this.state.userScore}
            computerScore={this.state.computerScore}
          />
          <p id="score-board">.</p>
        </Container>
        <RpsFooter />
      </>
    );
  }
}

export default App;
