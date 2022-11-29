import React, { FC, memo } from 'react';
import TableChairSvg from '../svg/table-chair.svg';

export interface ITableChairIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableChairIcon: FC<ITableChairIconProps> = memo(props => {
  return <TableChairSvg {...props} />;
});
