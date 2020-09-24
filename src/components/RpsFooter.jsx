import React from "react";
import { Header, Segment } from "semantic-ui-react";

const RpsFooter = () => {
  return (
    <>
      <Segment inverted>
        <Header size="huge" id="footer">
          <p id="made-by">Made by Sara Lundkvist 2020 </p> #CraftAcademy
        </Header>
      </Segment>
    </>
  );
};
export default RpsFooter;
