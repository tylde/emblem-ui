import React from 'react';
import {mount} from 'enzyme';
import expect from 'expect';

import InputBase from '../InputBase';

describe('<InputBase />', () => {
  it('should render correctly', () => {
    const wrapper = mount(<InputBase />);
    expect(wrapper.find(InputBase)).toHaveLength(1);
  });
});
