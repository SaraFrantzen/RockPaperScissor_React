import React from "react";

 const Score = ( props ) => {
  return (
    <>
      <div className="user">Your Score: {props.userScore}</div>
      <div className="computer">Computer Score: {props.computerScore}</div>
    </>
  );
};
export default Score;