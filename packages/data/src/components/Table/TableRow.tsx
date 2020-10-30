import React from 'react';
import {EmblemUITheme, useTheme} from '@emblem-ui/styles';
import {ElementSize} from '@emblem-ui/core';

import {StyledTableRow} from './Table.styles';

interface TableRow extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  header?: boolean;
  elementSize?: ElementSize;
}

const TableRow: React.FC<TableRow> = ({
  children,
  header = false,
  elementSize = 'default',
  ...otherProps
}) => {
  const theme: EmblemUITheme = useTheme();
  return (
    <StyledTableRow theme={theme} header={header} elementSize={elementSize} {...otherProps}>
      {children}
    </StyledTableRow>
  );
};

export default TableRow;
