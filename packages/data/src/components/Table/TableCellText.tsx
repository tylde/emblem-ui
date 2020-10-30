import React from 'react';
import {EmblemUITheme, useTheme} from '@emblem-ui/styles';
import {StyledTableCellText} from './Table.styles';

interface TableCellText extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  header?: boolean;
}

const TableCellText: React.FC<TableCellText> = ({
  children,
  ...otherProps
}) => {
  const theme: EmblemUITheme = useTheme();
  return (
    <StyledTableCellText theme={theme} {...otherProps}>
      {children}
    </StyledTableCellText>
  );
};

export default TableCellText;
