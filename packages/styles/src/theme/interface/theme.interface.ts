import {
  EmblemUIThemeButtonStyles,
  EmblemUIThemeCheckboxStyles,
  EmblemUIThemeInputStyles,
  EmblemUIThemeLoaderStyles
} from '../element/element.interface';
import {EmblemUIThemePalette} from './palette.interface';

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
  input: EmblemUIThemeInputStyles;
  loader: EmblemUIThemeLoaderStyles;
  palette: EmblemUIThemePalette;
  switch: EmblemUIThemeCheckboxStyles;
  transitionTime: string;
}
