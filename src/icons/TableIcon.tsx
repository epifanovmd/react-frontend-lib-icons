import React, { FC, memo } from 'react';
import TableSvg from '../svg/table.svg';

export interface ITableIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableIcon: FC<ITableIconProps> = memo(props => {
  return <TableSvg {...props} />;
});
