import React, { FC, memo } from 'react';
import TableArrowDownSvg from '../svg/table-arrow-down.svg';

export interface ITableArrowDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableArrowDownIcon: FC<ITableArrowDownIconProps> = memo(props => {
  return <TableArrowDownSvg {...props} />;
});
