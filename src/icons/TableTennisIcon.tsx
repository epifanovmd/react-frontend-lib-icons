import React, { FC, memo } from 'react';
import TableTennisSvg from '../svg/table-tennis.svg';

export interface ITableTennisIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableTennisIcon: FC<ITableTennisIconProps> = memo(props => {
  return <TableTennisSvg {...props} />;
});
