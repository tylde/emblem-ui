import React from 'react';
import {mount} from 'enzyme';
import expect from 'expect';

import CheckboxBase from '../CheckboxBase';

describe('<CheckboxBase />', () => {
  it('should render correctly', () => {
    const wrapper = mount(<CheckboxBase />);
    expect(wrapper.find(CheckboxBase)).toHaveLength(1);
  });
});
