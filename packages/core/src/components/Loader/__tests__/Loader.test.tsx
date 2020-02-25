import React from 'react';
import {mount} from 'enzyme';
import expect from 'expect';

import Loader from '../Loader';

describe('<Loader />', () => {
  it('should render correctly', () => {
    const wrapper = mount(<Loader />);
    expect(wrapper.find(Loader)).toHaveLength(1);
  });
});
