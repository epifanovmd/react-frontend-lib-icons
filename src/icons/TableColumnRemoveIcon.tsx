import React, { FC, memo } from 'react';
import TableColumnRemoveSvg from '../svg/table-column-remove.svg';

export interface ITableColumnRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableColumnRemoveIcon: FC<ITableColumnRemoveIconProps> = memo(props => {
  return <TableColumnRemoveSvg {...props} />;
});
