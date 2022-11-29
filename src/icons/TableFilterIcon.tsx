import React, { FC, memo } from 'react';
import TableFilterSvg from '../svg/table-filter.svg';

export interface ITableFilterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableFilterIcon: FC<ITableFilterIconProps> = memo(props => {
  return <TableFilterSvg {...props} />;
});
