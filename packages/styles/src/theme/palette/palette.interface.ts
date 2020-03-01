export interface EmblemUIThemeColor {
  shadow: string,
  lightest: string;
  light: string;
  base: string;
  medium: string;
  dark: string;
  fontColor: string;
  outlineFontColor: string;
}

export interface EmblemUIThemePalette {
  primary: EmblemUIThemeColor;
  secondary: EmblemUIThemeColor;
  success: EmblemUIThemeColor;
  warning: EmblemUIThemeColor;
  danger: EmblemUIThemeColor;
  dark: EmblemUIThemeColor;
  info: EmblemUIThemeColor;
}
