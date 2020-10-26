import {EmblemUITheme} from '../interface/theme.interface';

import button from '../element/button';
import input from '../element/input';
import checkbox from '../element/checkbox';
import boxShadow from '../element/boxShadow';
import switchElement from '../element/switchElement';
import loader from '../element/loader';
import border from '../element/border';
import palette from './palette/palette';

const defaultLightTheme: EmblemUITheme = {
  border,
  boxShadow,
  button,
  checkbox,
  input,
  loader,
  palette,
  switch: switchElement,
  transitionTime: '150ms'
};

export default defaultLightTheme;
