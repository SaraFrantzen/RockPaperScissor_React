import React from "react";
import { Header, Image, Segment } from "semantic-ui-react";
import scissor from "../img/scissor.jpg";
import paper from "../img/paper.jpg";
import rock from "../img/rock.jpg";

const RpsHeader = () => {
  return (
    <>
      <Segment inverted>
        <Header>
          <Image.Group size="tiny">
            <Image bordered circular src={rock} />
            <Image circular src={paper} />
            <Image circular src={scissor} /> <h2> Rock Paper Scissors</h2>
          </Image.Group>
        </Header>
      </Segment>
    </>
  );
};
export default RpsHeader;
