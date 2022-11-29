import React, { FC, memo } from 'react';
import TablePivotSvg from '../svg/table-pivot.svg';

export interface ITablePivotIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TablePivotIcon: FC<ITablePivotIconProps> = memo(props => {
  return <TablePivotSvg {...props} />;
});
