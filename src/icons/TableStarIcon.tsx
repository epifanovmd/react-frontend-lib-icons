import React, { FC, memo } from 'react';
import TableStarSvg from '../svg/table-star.svg';

export interface ITableStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableStarIcon: FC<ITableStarIconProps> = memo(props => {
  return <TableStarSvg {...props} />;
});
