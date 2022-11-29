import React, { FC, memo } from 'react';
import TableSyncSvg from '../svg/table-sync.svg';

export interface ITableSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableSyncIcon: FC<ITableSyncIconProps> = memo(props => {
  return <TableSyncSvg {...props} />;
});
