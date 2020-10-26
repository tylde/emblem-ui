import React from 'react';
import {mount} from 'enzyme';
import expect from 'expect';

import ThemeContext from '../ThemeContext';
import useTheme from '../useTheme';
import {EmblemUITheme} from '../..';
import defaultTheme from '../../theme/lightTheme/defaultTheme';

const primaryBase: string = defaultTheme.palette.primary.base;

const TestComponent = () => {
  const theme: EmblemUITheme = useTheme();
  const testPrimaryBase = theme.palette.primary.base;
  return (
    <div style={{background: testPrimaryBase}} />
  );
};

describe('<ThemeContext />', () => {
  it('should provides context correctly', () => {
    const wrapper = mount(
      <ThemeContext.Provider value={defaultTheme}>
        <TestComponent />
      </ThemeContext.Provider>
    );
    expect(wrapper.find('div').props().style).toEqual({background: primaryBase});
  });
});
