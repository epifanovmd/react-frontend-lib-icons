import React, { FC, memo } from 'react';
import TableColumnSvg from '../svg/table-column.svg';

export interface ITableColumnIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableColumnIcon: FC<ITableColumnIconProps> = memo(props => {
  return <TableColumnSvg {...props} />;
});
