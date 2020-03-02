import {
  EmblemUIThemeButtonStyles,
  EmblemUIThemeCheckboxStyles,
  EmblemUIThemeInputStyles,
  EmblemUIThemeLoaderStyles
} from './element/element.interface';
import {EmblemUIThemePalette} from './palette/palette.interface';

export interface EmblemUIThemeBoxShadow {
  radius: string;
  width: string;
}

export interface EmblemUIThemeBorder {
  color: string;
  hover: string;
  radius: string;
  width: string;
}

export interface EmblemUIThemeBackground {
  primary: string;
  secondary: string;
}

export interface EmblemUIThemeApp {
  background: EmblemUIThemeBackground;
}

export interface EmblemUITheme {
  border: EmblemUIThemeBorder,
  boxShadow: EmblemUIThemeBoxShadow;
  button: EmblemUIThemeButtonStyles;
  checkbox: EmblemUIThemeCheckboxStyles;
  disabled: {color: string, background: string, border: string};
  input: EmblemUIThemeInputStyles;
  loader: EmblemUIThemeLoaderStyles;
  palette: EmblemUIThemePalette;
  switch: EmblemUIThemeCheckboxStyles;
  transitionTime: string;
  app: EmblemUIThemeApp;
}
