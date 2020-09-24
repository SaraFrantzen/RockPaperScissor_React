import React from "react";
import { saveData } from "../modules/scoreData";
import { Button } from "semantic-ui-react";

const Score = ({
  userScore,
  computerScore,
  authenticated,
  entrySaved,
  entryHandler,
}) => {
  return (
    <>
      <div className="user" id="userScore">
        Your Score: {userScore}
      </div>
      <br />
      <div className="computer" id="computerScore">
        Computer Score: {computerScore}
      </div>
     
      {authenticated && !entrySaved ? (
            <Button
              basic
              color="green"
              id="save-result"
              onClick={() => saveData(userScore, computerScore, entryHandler)}
            >
              Save entry
            </Button>
      ) : (
        <p id="response-message">Your entry was saved</p>
      )}
    </>
  );
};
export default Score;
