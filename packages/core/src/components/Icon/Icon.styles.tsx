import styled, {css} from 'styled-components';
import {EmblemUITheme} from '@emblem-ui/styles';

interface IconTheme {
  readonly theme: EmblemUITheme;
}

interface IconBase {
  readonly base: string;
}

interface IconState {
  readonly isDisabled: boolean;
}

interface IconComponent extends IconBase {

}

const iconBaseDimensions = css<IconBase>`
  width: ${(props: IconBase) => props.base};
  height: ${(props: IconBase) => props.base};
`;

const iconAbsolute = css`
  position: absolute;
  top: 0;
  left: 0;
`;

const icon = css<IconState>`
  content: "";
  display: block;
  position: absolute;
  pointer-events: none;
`;

const iconDimensions = (width: number, height: number, top: number, left: number) => `
  width: ${(width / 18) * 100}%;
  height: ${(height / 18) * 100}%;
  top: ${(top / 18) * 100}%;
  left: ${(left / 18) * 100}%;
`;

export const IconComponent = styled.span<IconComponent>`
  ${iconBaseDimensions};
`;

interface IconIcon extends IconTheme, IconState, IconBase {}

export const IconCheck = styled.span<IconIcon>`
  ${iconAbsolute};
  ${iconBaseDimensions};
  pointer-events: none;
    
  &::after {
    ${icon};
    ${iconDimensions(11, 6, 9, 3)};
    background: transparent;
    transform-origin: top left;
    transform: rotate(-45deg);
    border-bottom-color: ${(props: IconIcon) => (props.isDisabled ? props.theme.disabled.border : '#fff')};
    border-bottom-style: solid;
    border-bottom-width: calc((2 * ${(props: IconIcon) => props.theme.checkbox.base}) / 16);
    border-left-color: ${(props: IconIcon) => (props.isDisabled ? props.theme.disabled.border : '#fff')};
    border-left-style: solid;
    border-left-width: calc((2 * ${(props: IconIcon) => props.theme.checkbox.base}) / 16);
  }
`;

export const IconMinus = styled.span<IconIcon>`
  ${iconAbsolute};
  ${iconBaseDimensions};
  pointer-events: none;
    
  &::after {
    ${icon};
    ${iconDimensions(10, 2, 8, 4)};
    background: ${(props: IconIcon) => (props.isDisabled ? props.theme.disabled.border : '#fff')};
    transform-origin: top left;
  }
`;

export const IconPlus = styled.span<IconIcon>`
  ${iconAbsolute};
  ${iconBaseDimensions};
  pointer-events: none;
  
  &::before, &::after {
    ${icon};
    background: ${(props: IconIcon) => (props.isDisabled ? props.theme.disabled.border : '#fff')};
  }
    
  &::before {
    ${iconDimensions(10, 2, 8, 4)};
  }
  
  &::after {
    ${iconDimensions(2, 10, 4, 8)};
  }
`;

export const IconCross = styled.span<IconIcon>`
  ${iconAbsolute};
  ${iconBaseDimensions};
  pointer-events: none;
  
  &::before, &::after {
    ${icon};
    background: ${(props: IconIcon) => (props.isDisabled ? props.theme.disabled.border : '#fff')};
    transform-origin: center;
    transform: rotate(45deg);
  }
    
  &::before {
    ${iconDimensions(12, 2, 8, 3)};
  }
  
  &::after {
    ${iconDimensions(2, 12, 3, 8)};
  }
`;

export const IconSlash = styled.span<IconIcon>`
  ${iconAbsolute};
  ${iconBaseDimensions};
  pointer-events: none;
  
  &::after {
    ${icon};
    ${iconDimensions(2, 12, 3, 8)};
    background: ${(props: IconIcon) => (props.isDisabled ? props.theme.disabled.border : '#fff')};
    transform-origin: center;
    transform: rotate(45deg);
  }
`;

export const IconSquare = styled.span<IconIcon>`
  ${iconAbsolute};
  ${iconBaseDimensions};
  pointer-events: none;
  
  &::after {
    ${icon};
    ${iconDimensions(6, 6, 6, 6)};
    background: ${(props: IconIcon) => (props.isDisabled ? props.theme.disabled.border : '#fff')};
  }
`;

export const IconCircle = styled.span<IconIcon>`
  ${iconAbsolute};
  ${iconBaseDimensions};
  pointer-events: none;
  
  &::after {
    ${icon};
    ${iconDimensions(8, 8, 5, 5)};
    background: ${(props: IconIcon) => (props.isDisabled ? props.theme.disabled.border : '#fff')};
    border-radius: 100%;
  }
`;

export const IconDiamond = styled.span<IconIcon>`
  ${iconAbsolute};
  ${iconBaseDimensions};
  pointer-events: none;x
  
  &::after {
    ${icon};
    ${iconDimensions(6, 6, 6, 6)};
    background: ${(props: IconIcon) => (props.isDisabled ? props.theme.disabled.border : '#fff')};
    transform-origin: center;
    transform: rotate(45deg);
  }
`;
