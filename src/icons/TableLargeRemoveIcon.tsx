import React, { FC, memo } from 'react';
import TableLargeRemoveSvg from '../svg/table-large-remove.svg';

export interface ITableLargeRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableLargeRemoveIcon: FC<ITableLargeRemoveIconProps> = memo(props => {
  return <TableLargeRemoveSvg {...props} />;
});
