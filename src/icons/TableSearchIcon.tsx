import React, { FC, memo } from 'react';
import TableSearchSvg from '../svg/table-search.svg';

export interface ITableSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableSearchIcon: FC<ITableSearchIconProps> = memo(props => {
  return <TableSearchSvg {...props} />;
});
