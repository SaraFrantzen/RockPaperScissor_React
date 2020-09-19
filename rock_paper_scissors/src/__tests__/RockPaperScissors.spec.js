import React from "react";
import { shallow } from "enzyme";
import Images from "../components/Images";

describe("Image for user play", () => {
  beforeAll(() => {
    let wrapper = shallow(<Images plays={} />);
  })
it('Shows image', () => {
 expect(wrapper).find(".player-img").src().toEqual("rock")
})
  


});
