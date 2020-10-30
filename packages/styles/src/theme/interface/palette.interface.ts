export interface EmblemUIThemePaletteColor {
  shadow: string,
  lightest: string;
  light: string;
  base: string;
  medium: string;
  dark: string;
  fontColor: string;
  outlineFontColor: string;
}

export interface EmblemUIThemePaletteBackground {
  primary: string,
  secondary: string;
}

export interface EmblemUIThemePaletteBorder {
  lightest: string;
  light: string;
  color: string,
  hover: string;
}

export interface EmblemUIThemePaletteDisabled {
  color: string,
  background: string;
  border: string;
}

export interface EmblemUIThemePalette {
  background: EmblemUIThemePaletteBackground;
  border: EmblemUIThemePaletteBorder;
  danger: EmblemUIThemePaletteColor;
  dark: EmblemUIThemePaletteColor;
  disabled: EmblemUIThemePaletteDisabled;
  info: EmblemUIThemePaletteColor;
  primary: EmblemUIThemePaletteColor;
  secondary: EmblemUIThemePaletteColor;
  success: EmblemUIThemePaletteColor;
  warning: EmblemUIThemePaletteColor;
}
