import React, { FC, memo } from 'react';
import TableMergeCellsSvg from '../svg/table-merge-cells.svg';

export interface ITableMergeCellsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableMergeCellsIcon: FC<ITableMergeCellsIconProps> = memo(props => {
  return <TableMergeCellsSvg {...props} />;
});
