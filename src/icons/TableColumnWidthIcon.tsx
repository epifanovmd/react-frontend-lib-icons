import React, { FC, memo } from 'react';
import TableColumnWidthSvg from '../svg/table-column-width.svg';

export interface ITableColumnWidthIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableColumnWidthIcon: FC<ITableColumnWidthIconProps> = memo(props => {
  return <TableColumnWidthSvg {...props} />;
});
