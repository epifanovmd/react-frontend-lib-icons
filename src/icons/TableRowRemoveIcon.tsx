import React, { FC, memo } from 'react';
import TableRowRemoveSvg from '../svg/table-row-remove.svg';

export interface ITableRowRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableRowRemoveIcon: FC<ITableRowRemoveIconProps> = memo(props => {
  return <TableRowRemoveSvg {...props} />;
});
