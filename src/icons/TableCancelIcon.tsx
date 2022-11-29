import React, { FC, memo } from 'react';
import TableCancelSvg from '../svg/table-cancel.svg';

export interface ITableCancelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableCancelIcon: FC<ITableCancelIconProps> = memo(props => {
  return <TableCancelSvg {...props} />;
});
