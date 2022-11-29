import React, { FC, memo } from 'react';
import TableArrowLeftSvg from '../svg/table-arrow-left.svg';

export interface ITableArrowLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableArrowLeftIcon: FC<ITableArrowLeftIconProps> = memo(props => {
  return <TableArrowLeftSvg {...props} />;
});
