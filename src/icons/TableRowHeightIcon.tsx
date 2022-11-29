import React, { FC, memo } from 'react';
import TableRowHeightSvg from '../svg/table-row-height.svg';

export interface ITableRowHeightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableRowHeightIcon: FC<ITableRowHeightIconProps> = memo(props => {
  return <TableRowHeightSvg {...props} />;
});
