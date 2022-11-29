import React, { FC, memo } from 'react';
import TableBorderSvg from '../svg/table-border.svg';

export interface ITableBorderIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableBorderIcon: FC<ITableBorderIconProps> = memo(props => {
  return <TableBorderSvg {...props} />;
});
