import React, { FC, memo } from 'react';
import TableSplitCellSvg from '../svg/table-split-cell.svg';

export interface ITableSplitCellIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableSplitCellIcon: FC<ITableSplitCellIconProps> = memo(props => {
  return <TableSplitCellSvg {...props} />;
});
