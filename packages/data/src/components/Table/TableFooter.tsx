import React from 'react';
import {ElementSize} from '@emblem-ui/core';
import {EmblemUITheme, useTheme} from '@emblem-ui/styles';
import {StyledTableFooter} from './Table.styles';

interface TableFooter extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  elementSize?: ElementSize;
}

const TableFooter: React.FC<TableFooter> = ({
  children,
  elementSize = 'default',
  ...otherProps
}) => {
  const theme: EmblemUITheme = useTheme();
  return (
    <StyledTableFooter theme={theme} elementSize={elementSize} {...otherProps}>
      {children}
    </StyledTableFooter>
  );
};

export default TableFooter;
