import {EmblemUITheme} from './theme.interface';

import button from './element/button';
import input from './element/input';
import loader from './element/loader';
import palette from './palette/palette';

const defaultTheme: EmblemUITheme = {
  boxShadow: {
    radius: '2px',
    width: '2px'
  },
  checkbox: {
    base: '18px'
  },
  globalStyle: `
    *, &, &::before, &::after {
    box-sizing: border-box;
  }
  `,
  border: {
    color: '#bdc3c7',
    hover: '#777',
    radius: '2px',
    width: '1px'
  },
  button,
  loader,
  input,
  palette,
  disabled: {
    color: '#484848',
    background: '#e6e6e6',
    border: '#b4b4b4'
  },
  switch: {
    base: '18px'
  },
  transitionTime: '150ms'
};

export default defaultTheme;
