import React from "react";
import { Icon, Grid, GridColumn } from "semantic-ui-react";
import play from "../img/play.jpg";
const Instructions = () => {
  return (
    <>
      <Grid>
        <Grid.Row columns={2}>
          <GridColumn>
            <img className="index-img" src={play} alt="lets play!"></img>
          </GridColumn>
          <GridColumn>
            {" "}
            <p id="lets-play">Lets Play Rock Paper Scissors!</p>
          </GridColumn>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row>
          <GridColumn width={1}></GridColumn>
          <Grid.Column width={3} id="rulesGrid">
            <p id="simple-rules">Rules Are Simple</p>
          </Grid.Column>
          <Grid.Column width={6} id="rulesGrid">
            <p className="rules">
              <Icon name="circle" size="small" /> Rock Crushes Scissors{" "}
              <br></br>
              <Icon name="circle" size="small" /> Paper Covers Rock
              <br></br> <Icon name="circle" size="small" /> Scissors Cuts Paper
            </p>
          </Grid.Column>
          <Grid.Column width={5} id="rulesGrid">
            <p id="choose-weapon">Choose your Weapon and Start the Game!</p>
          </Grid.Column>
          <GridColumn width={1}></GridColumn>
        </Grid.Row>
      </Grid>
    </>
  );
};
export default Instructions;
