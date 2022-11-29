import React, { FC, memo } from 'react';
import TablePlusSvg from '../svg/table-plus.svg';

export interface ITablePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TablePlusIcon: FC<ITablePlusIconProps> = memo(props => {
  return <TablePlusSvg {...props} />;
});
