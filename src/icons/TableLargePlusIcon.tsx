import React, { FC, memo } from 'react';
import TableLargePlusSvg from '../svg/table-large-plus.svg';

export interface ITableLargePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableLargePlusIcon: FC<ITableLargePlusIconProps> = memo(props => {
  return <TableLargePlusSvg {...props} />;
});
