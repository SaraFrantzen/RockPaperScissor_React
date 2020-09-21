import React from "react";
import { Container, Grid } from "semantic-ui-react";
const Instructions = () => {
  return (
    <>
      <Container>
        <h1 className="title">Rules Are Simple</h1>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
          
              <p className="rules">
                -- Rock Crushes Scissors --<br></br>
                -- Paper Covers Rock --
                <br></br>-- Scissors Cuts Paper --
              </p>
            </Grid.Column>
            <Grid.Column>Choose your Weapon and Start the Game!</Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};
export default Instructions;
