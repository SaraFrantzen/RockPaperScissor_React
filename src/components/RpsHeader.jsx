import React from "react";
import { Grid, Header, Image, Segment } from "semantic-ui-react";
import scissor from "../img/scissor.jpg";
import paper from "../img/paper.jpg";
import rock from "../img/rock.jpg";

const RpsHeader = () => {
  return (
    <>
      <Segment inverted>
        <Header size="huge" id="header">
          <Grid>
            <h2 id="header-txt"> Rock Paper Scissors</h2>
            <Image.Group size="tiny">
              <Image bordered circular src={rock} />
              <Image circular src={paper} />
              <Image circular src={scissor} />
            </Image.Group>
          </Grid>
        </Header>
      </Segment>
    </>
  );
};
export default RpsHeader;
