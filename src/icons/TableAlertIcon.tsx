import React, { FC, memo } from 'react';
import TableAlertSvg from '../svg/table-alert.svg';

export interface ITableAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableAlertIcon: FC<ITableAlertIconProps> = memo(props => {
  return <TableAlertSvg {...props} />;
});
