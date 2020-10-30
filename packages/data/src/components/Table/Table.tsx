import React from 'react';
import {EmblemUITheme, useTheme} from '@emblem-ui/styles';
import {StyledTable} from './Table.styles';

interface Table extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Table: React.FC<Table> = ({
  children,
  ...otherProps
}) => {
  const theme: EmblemUITheme = useTheme();
  return (
    <StyledTable theme={theme} {...otherProps}>
      {children}
    </StyledTable>
  );
};

export default Table;
