import React from "react";
import { shallow } from "enzyme";
import App from "../App";

it("Renders correctly", () => {
  const wrapper = shallow(
    <App
      playGame={() => {}}
      determineResult={() => {}}
      setScore={() => {}}
      userPlays={() => {}}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
