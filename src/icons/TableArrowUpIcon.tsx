import React, { FC, memo } from 'react';
import TableArrowUpSvg from '../svg/table-arrow-up.svg';

export interface ITableArrowUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableArrowUpIcon: FC<ITableArrowUpIconProps> = memo(props => {
  return <TableArrowUpSvg {...props} />;
});
