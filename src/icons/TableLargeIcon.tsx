import React, { FC, memo } from 'react';
import TableLargeSvg from '../svg/table-large.svg';

export interface ITableLargeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableLargeIcon: FC<ITableLargeIconProps> = memo(props => {
  return <TableLargeSvg {...props} />;
});
