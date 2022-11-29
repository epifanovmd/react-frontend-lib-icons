import React, { FC, memo } from 'react';
import TableArrowRightSvg from '../svg/table-arrow-right.svg';

export interface ITableArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableArrowRightIcon: FC<ITableArrowRightIconProps> = memo(props => {
  return <TableArrowRightSvg {...props} />;
});
