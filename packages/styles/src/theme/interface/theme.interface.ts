import {
  EmblemUIThemeButtonStyles,
  EmblemUIThemeCheckboxStyles,
  EmblemUIThemeInputStyles,
  EmblemUIThemeLoaderStyles, EmblemUIThemeTableStyles
} from '../element/element.interface';
import {EmblemUIThemePalette} from './palette.interface';
import {EmblemUIThemeFont} from '../font/font.interface';

export interface EmblemUIThemeBoxShadow {
  radius: string;
  width: string;
}

export interface EmblemUIThemeBorder {
  radius: string;
  width: string;
}

export interface EmblemUITheme {
  border: EmblemUIThemeBorder,
  boxShadow: EmblemUIThemeBoxShadow;
  button: EmblemUIThemeButtonStyles;
  checkbox: EmblemUIThemeCheckboxStyles;
  font: EmblemUIThemeFont;
  input: EmblemUIThemeInputStyles;
  loader: EmblemUIThemeLoaderStyles;
  palette: EmblemUIThemePalette;
  switch: EmblemUIThemeCheckboxStyles;
  table: EmblemUIThemeTableStyles;
  transitionTime: string;
}
