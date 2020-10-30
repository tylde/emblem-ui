import {EmblemUITheme} from '../interface/theme.interface';

import button from '../element/button';
import input from '../element/input';
import checkbox from '../element/checkbox';
import boxShadow from '../element/boxShadow';
import font from '../font/font';
import switchElement from '../element/switchElement';
import loader from '../element/loader';
import border from '../element/border';
import table from '../element/table';
import palette from './palette/palette';

const defaultLightTheme: EmblemUITheme = {
  border,
  boxShadow,
  button,
  checkbox,
  font,
  input,
  loader,
  palette,
  switch: switchElement,
  table,
  transitionTime: '150ms'
};

export default defaultLightTheme;
