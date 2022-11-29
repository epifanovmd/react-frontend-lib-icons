import React, { FC, memo } from 'react';
import TableLockSvg from '../svg/table-lock.svg';

export interface ITableLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableLockIcon: FC<ITableLockIconProps> = memo(props => {
  return <TableLockSvg {...props} />;
});
