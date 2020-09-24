import React from "react";
import scissor from "../img/scissor.jpg";
import paper from "../img/paper.jpg";
import rock from "../img/rock.jpg";

const Images = ({ plays }) => {
  return (
    <div className="player">
      <img
        className="player-img"
        id="player-img"
        src={plays === "rock" ? rock : plays === "scissor" ? scissor : paper}
        alt="rock, paper, scissor"
      />
    </div>
  );
};
export default Images;
