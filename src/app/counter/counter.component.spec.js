import React from 'react';
import {shallow} from 'enzyme';
import CounterComponent from './counter.component';

describe("Counter component", () => {
  it("displays a number passed to a prop", () => {
    const wrapper = shallow(<CounterComponent count={9}/>);
    expect(wrapper.find("span").text()).toBe("9");
  });

  it("displays 0 if props hasn't been passed", () => {
    const wrapper = shallow(<CounterComponent />);
    expect(wrapper.find("span").text()).toBe("0");
  });
});
