import React from 'react';
import {EmblemUITheme, useTheme} from '@emblem-ui/styles';
import {StyledTableHeader} from './Table.styles';

interface TableHeader extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const TableHeader: React.FC<TableHeader> = ({
  children,
  ...otherProps
}) => {
  const theme: EmblemUITheme = useTheme();
  return (
    <StyledTableHeader theme={theme} {...otherProps}>
      {children}
    </StyledTableHeader>
  );
};

export default TableHeader;
