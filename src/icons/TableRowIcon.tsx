import React, { FC, memo } from 'react';
import TableRowSvg from '../svg/table-row.svg';

export interface ITableRowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableRowIcon: FC<ITableRowIconProps> = memo(props => {
  return <TableRowSvg {...props} />;
});
