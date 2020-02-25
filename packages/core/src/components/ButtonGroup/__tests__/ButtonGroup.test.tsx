import React from 'react';
import {mount} from 'enzyme';
import expect from 'expect';

import ButtonGroup from '../ButtonGroup';

describe('<ButtonGroup />', () => {
  it('should render correctly', () => {
    const wrapper = mount(<ButtonGroup>Text</ButtonGroup>);
    expect(wrapper.find(ButtonGroup)).toHaveLength(1);
  });
});
