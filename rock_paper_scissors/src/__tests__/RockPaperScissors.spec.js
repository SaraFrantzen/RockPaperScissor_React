import React from "react";
import { shallow } from "enzyme";
import RockPaperScissors from "../components/RockPaperScissors";

describe("RockPaperScissor", () => {
  const handleClick = jest.fn();
  const wrapper = shallow(<RockPaperScissors onClickHandler={handleClick} />);

  it("on click the onClickHandler is being called", () => {
    wrapper.find("button").simulate("click");
    expect(handleClick).toHaveBeenCalled();
  });
});
