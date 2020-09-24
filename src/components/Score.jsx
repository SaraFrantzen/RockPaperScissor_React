import React from "react";

const Score = ({ userScore, computerScore }) => {
  return (
    <>
      <div className="user" id="userScore">
        Your Score: {userScore}
      </div>
      <br />
      <div className="computer" id="computerScore">
        Computer Score: {computerScore}
      </div>
    </>
  );
};
export default Score;
