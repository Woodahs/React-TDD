import React from 'react';
import {shallow} from 'enzyme';
import StatusComponent from './status.component';
import * as statusTypes from '../redux/socket/status-types.enum';

describe("Status component", () => {
  it("displays a status passed by props", () => {
    const wrapper = shallow(<StatusComponent />);
    expect(wrapper.find("p").text()).toBe("Not Connected");

    wrapper.setProps({status: statusTypes.CONNECTING});
    expect(wrapper.find("p").text()).toBe("Connecting");

    wrapper.setProps({status: statusTypes.CONNECTED});
    expect(wrapper.find("p").text()).toBe("Connected");
  });
});
