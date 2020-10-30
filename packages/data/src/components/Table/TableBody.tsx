import React from 'react';
import {EmblemUITheme, useTheme} from '@emblem-ui/styles';
import {StyledTableBody} from './Table.styles';

interface TableBody extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const TableBody: React.FC<TableBody> = ({
  children,
  ...otherProps
}) => {
  const theme: EmblemUITheme = useTheme();
  return (
    <StyledTableBody theme={theme} {...otherProps}>
      {children}
    </StyledTableBody>
  );
};

export default TableBody;
