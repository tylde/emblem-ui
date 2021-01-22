import styled, {css} from 'styled-components';
import {EmblemUITheme} from '@emblem-ui/styles';

const elementBoxSizing = css`
  &, &::before, &::after {
    box-sizing: border-box;
  }
`;

interface StyledTable {
  readonly theme: EmblemUITheme;
}

export const StyledTable = styled.div<StyledTable>`
  ${elementBoxSizing};
  
  display: flex;
  flex-direction: column;
  max-height: 100%;
  border: 1px solid ${(props: StyledTable) => props.theme.palette.border.color};
  border-radius: ${(props: StyledTable) => props.theme.border.radius};
`;

interface StyledTableScroll {
  readonly theme: EmblemUITheme;
}
export const StyledTableScroll = styled.div<StyledTableScroll>`
  ${elementBoxSizing};
  overflow: auto;
`;

interface StyledTableScrollContent {
  readonly theme: EmblemUITheme;
}
export const StyledTableScrollContent = styled.div<StyledTableScrollContent>`
  ${elementBoxSizing};
  min-width: fit-content;
`;

interface StyledTableBody {
  readonly theme: EmblemUITheme;
}

export const StyledTableBody = styled.div<StyledTableBody>`
  ${elementBoxSizing};
  
  display: flex;
  min-width: fit-content;
  flex-grow: 1;
  flex-direction: column;
`;

interface StyledTableHeader {
  readonly theme: EmblemUITheme;
}

export const StyledTableHeader = styled.div<StyledTableHeader>`
  ${elementBoxSizing};
  
  position: sticky;
  top: 0;
  z-index: 2;
`;

interface StyledTableFooter {
  readonly theme: EmblemUITheme;
  readonly elementSize: string;
}

export const StyledTableFooter = styled.div<StyledTableFooter>`
  ${elementBoxSizing};
  
  display: flex;
  width: 100%;
  align-items: center;
  height: ${(props: StyledTableFooter) => props.elementSize === 'small' && props.theme.table.height.small};
  height: ${(props: StyledTableFooter) => props.elementSize === 'default' && props.theme.table.height.default};
  height: ${(props: StyledTableFooter) => props.elementSize === 'large' && props.theme.table.height.large};
  background: #fff;
  border-top: 1px solid ${(props: StyledTableFooter) => props.theme.palette.border.color};
`;

interface StyledTableRow {
  readonly theme: EmblemUITheme;
  readonly header: boolean;
  readonly elementSize: string;
}

export const StyledTableRow = styled.div<StyledTableRow>`
  ${elementBoxSizing};

  display: flex;
  min-width: 100%;
  height: ${(props: StyledTableRow) => props.elementSize === 'small' && props.theme.table.height.small};
  height: ${(props: StyledTableRow) => props.elementSize === 'default' && props.theme.table.height.default};
  height: ${(props: StyledTableRow) => props.elementSize === 'large' && props.theme.table.height.large};

  &:hover {
    background: ${(props: StyledTableRow) => !props.header && props.theme.palette.border.lightest};
  }
  &:not(:last-child), &:only-child {
    border-bottom: 1px solid;
    border-bottom-color: ${(props: StyledTableRow) => props.theme.palette.border.light};
    border-bottom-color: ${(props: StyledTableRow) => props.header && props.theme.palette.border.color};
  }
`;

interface StyledTableCell {
  readonly theme: EmblemUITheme;
  readonly actions: boolean;
  readonly header: boolean;
  readonly sticky: boolean;
}

export const StyledTableCell = styled.div<StyledTableCell>`
  ${elementBoxSizing};

  display: flex;
  padding: 0 ${(props: StyledTableCell) => (props.actions ? '16px' : '12px')};
  align-items: center;
  
  width: 100%;
  width: ${(props: StyledTableCell) => (props.actions && 'auto')};
  min-width: 51px;

  background: #fff;
  background: ${(props: StyledTableCell) => props.header && props.theme.palette.border.light};

  color: ${(props: StyledTableCell) => props.header && props.theme.palette.secondary.base};
  font-family: ${(props: StyledTableCell) => props.header && "'Montserrat', sans-serif"};
  font-size: ${(props: StyledTableCell) => props.header && '14px'};
  font-weight: ${(props: StyledTableCell) => props.header && 500};
  
  position: ${(props: StyledTableCell) => props.sticky && 'sticky'};
  left: ${(props: StyledTableCell) => props.sticky && 0};
  right: ${(props: StyledTableCell) => props.sticky && 0};
  
  &:not(:first-child) {
    border-left: ${(props: StyledTableCell) => props.actions && '1px solid'};
    border-left-color: ${(props: StyledTableCell) => props.actions && props.theme.palette.border.light};
    border-left-color: ${(props: StyledTableCell) => props.actions && props.header && props.theme.palette.border.color};
  }
    &:not(:last-child) {
    border-right: ${(props: StyledTableCell) => props.actions && '1px solid'};
    border-right-color: ${(props: StyledTableCell) => props.actions && props.theme.palette.border.light};
    // eslint-disable-next-line max-len
    border-right-color: ${(props: StyledTableCell) => props.actions && props.header && props.theme.palette.border.color};
  }
`;

interface StyledTableCellText {
  readonly theme: EmblemUITheme;
}

export const StyledTableCellText = styled.span<StyledTableCellText>`
  margin-top: 1px;
  font-family: ${(props: StyledTableCellText) => props.theme.font.default};
  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
`;
