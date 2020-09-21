import React from "react";

 const Score = ( {userScore, computerScore} ) => {
  return (
    <>
      <div className="user">Your Score: {userScore}</div>
      <div className="computer">Computer Score: {computerScore}</div>
    </>
  );
};
export default Score;