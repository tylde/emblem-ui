import React from 'react';
import {EmblemUITheme, useTheme} from '@emblem-ui/styles';
import {StyledTableScroll, StyledTableScrollContent} from './Table.styles';

interface TableScroll extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const TableScroll: React.FC<TableScroll> = ({
  children,
  ...otherProps
}) => {
  const theme: EmblemUITheme = useTheme();
  return (
    <StyledTableScroll theme={theme} {...otherProps}>
      <StyledTableScrollContent theme={theme}>
        {children}
      </StyledTableScrollContent>
    </StyledTableScroll>
  );
};

export default TableScroll;
