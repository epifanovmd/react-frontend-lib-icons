import React, { FC, memo } from 'react';
import TableCheckSvg from '../svg/table-check.svg';

export interface ITableCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableCheckIcon: FC<ITableCheckIconProps> = memo(props => {
  return <TableCheckSvg {...props} />;
});
