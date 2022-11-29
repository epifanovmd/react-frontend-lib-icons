import React, { FC, memo } from 'react';
import TableClockSvg from '../svg/table-clock.svg';

export interface ITableClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableClockIcon: FC<ITableClockIconProps> = memo(props => {
  return <TableClockSvg {...props} />;
});
