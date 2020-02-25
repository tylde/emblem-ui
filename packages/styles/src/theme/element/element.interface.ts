export interface EmblemUIThemeHeight {
  small: string;
  default: string;
  large: string;
}

export interface EmblemUIThemeElementHeight {
  height: EmblemUIThemeHeight
}

export interface EmblemUIThemeElementPadding {
  horizontalPadding: string;
  verticalPadding: string;
}

export interface EmblemUIThemeInputStyles extends EmblemUIThemeElementHeight, EmblemUIThemeElementPadding {}

export interface EmblemUIThemeButtonStyles extends EmblemUIThemeElementHeight, EmblemUIThemeElementPadding {}

export interface EmblemUIThemeLoaderStyles extends EmblemUIThemeElementHeight {}

export interface EmblemUIThemeCheckboxStyles {
  base: string;
}

export interface EmblemUIThemeSwitchStyles {
  base: string;
}
