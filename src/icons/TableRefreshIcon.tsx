import React, { FC, memo } from 'react';
import TableRefreshSvg from '../svg/table-refresh.svg';

export interface ITableRefreshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableRefreshIcon: FC<ITableRefreshIconProps> = memo(props => {
  return <TableRefreshSvg {...props} />;
});
