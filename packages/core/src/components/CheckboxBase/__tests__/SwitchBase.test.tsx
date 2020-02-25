import React from 'react';
import {mount} from 'enzyme';
import expect from 'expect';

import SwitchBase from '../SwitchBase';

describe('<SwitchBase />', () => {
  it('should render correctly', () => {
    const wrapper = mount(<SwitchBase />);
    expect(wrapper.find(SwitchBase)).toHaveLength(1);
  });
});
