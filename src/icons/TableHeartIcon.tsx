import React, { FC, memo } from 'react';
import TableHeartSvg from '../svg/table-heart.svg';

export interface ITableHeartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableHeartIcon: FC<ITableHeartIconProps> = memo(props => {
  return <TableHeartSvg {...props} />;
});
