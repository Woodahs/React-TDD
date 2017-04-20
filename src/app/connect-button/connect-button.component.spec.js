import React from 'react';
import {shallow} from 'enzyme';
import ConnectButtonComponent from './connect-button.component';
import * as statusTypes from '../redux/socket/status-types.enum';

describe("Connect Button component", () => {
  it("invokes some fancy function", () => {
    const connect = jest.fn();
    const wrapper = shallow(<ConnectButtonComponent connect={connect} />);

    wrapper.find("button").simulate("click");
    expect(connect).toBeCalled();
  });

  it("display component if isVisible set to true", () => {
    const connect = jest.fn();
    const wrapper = shallow(<ConnectButtonComponent connect={connect} />);

    expect(wrapper.find("button").length).toBe(1);
  });

  it("do not display component if isVisible set to false", () => {
    const connect = jest.fn();
    const wrapper = shallow(<ConnectButtonComponent connect={connect} isVisible={false} />);

    expect(wrapper.find("button").length).toBe(0);
  });
});
