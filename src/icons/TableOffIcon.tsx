import React, { FC, memo } from 'react';
import TableOffSvg from '../svg/table-off.svg';

export interface ITableOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableOffIcon: FC<ITableOffIconProps> = memo(props => {
  return <TableOffSvg {...props} />;
});
