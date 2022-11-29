import React, { FC, memo } from 'react';
import TableMinusSvg from '../svg/table-minus.svg';

export interface ITableMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableMinusIcon: FC<ITableMinusIconProps> = memo(props => {
  return <TableMinusSvg {...props} />;
});
