import React from 'react';
import {mount} from 'enzyme';
import expect from 'expect';

import Button from '../Button';
import Loader from '../../Loader/Loader';

describe('<Button />', () => {
  it('should render correctly', () => {
    const wrapper = mount(<Button>Text</Button>);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('should not render Loader when isLoading is false', () => {
    const wrapper = mount(<Button>Text</Button>);
    expect(wrapper.find(Loader)).toHaveLength(0);
  });

  it('should render Loader when isLoading is true', () => {
    const wrapper = mount(<Button isLoading>Text</Button>);
    expect(wrapper.find(Loader)).toHaveLength(1);
  });
});
