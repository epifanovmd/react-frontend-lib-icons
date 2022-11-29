import React, { FC, memo } from 'react';
import TableAccountSvg from '../svg/table-account.svg';

export interface ITableAccountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableAccountIcon: FC<ITableAccountIconProps> = memo(props => {
  return <TableAccountSvg {...props} />;
});
