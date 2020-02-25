import React from 'react';

import {Button, CheckboxBase, SwitchBase} from '@emblem-ui/core';

import {defaultTheme, ThemeContext} from '@emblem-ui/styles';

const Home = () => {
  const theme = {
    ...defaultTheme,
    palette: {
      ...defaultTheme.palette,
      primary: {
        shadow: 'rgba(237,20,61,0.51)',
        lightest: '#edbbb3',
        light: '#ed7e84',
        base: '#ed143d',
        medium: '#b7143a',
        dark: '#9c132a',
        fontColor: '#fff'
      }
    },
    checkbox: {
      base: '32px'
    }
  };

  const theme2 = {
    ...defaultTheme,
    palette: {
      ...defaultTheme.palette,
      primary: {
        shadow: 'rgba(40, 140, 100, 0.5)',
        lightest: 'rgb(121,189, 170)',
        light: 'rgb(120, 191, 148)',
        base: 'rgb(40, 140, 100)',
        medium: 'rgb(23, 115, 78)',
        dark: 'rgb(23, 97, 60)',
        fontColor: '#fff'
      }
    },
    checkbox: {
      base: '32px'
    },
    switch: {
      base: '32px'
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{
        width: '100%',
        height: '100%'
      }}
      >
        <p>Home Page</p>

        <p>
          <Button elementSize='large'>Crimson Button</Button>
        </p>
        <ThemeContext.Provider value={theme2}>
          <p>
            <CheckboxBase />
          </p>
          <p>
            <CheckboxBase checked checkedIcon='check' />
          </p>
          <p>
            <SwitchBase />
          </p>
          <p>
            <SwitchBase checked checkedIcon='check' />
          </p>
        </ThemeContext.Provider>
      </div>
    </ThemeContext.Provider>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
