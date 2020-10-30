import React from 'react';
import {EmblemUITheme, useTheme} from '@emblem-ui/styles';
import {StyledTableCell} from './Table.styles';

interface TableCell extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  actions?: boolean;
  header?: boolean;
  sticky?: boolean;
}

const TableCell: React.FC<TableCell> = ({
  children,
  actions = false,
  header = false,
  sticky = false,
  ...otherProps
}) => {
  const theme: EmblemUITheme = useTheme();
  return (
    <StyledTableCell
      theme={theme}
      actions={actions}
      header={header}
      sticky={sticky}
      {...otherProps}
    >
      {children}
    </StyledTableCell>
  );
};

export default TableCell;
