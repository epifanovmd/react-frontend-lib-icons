import React, { FC, memo } from 'react';
import TablePicnicSvg from '../svg/table-picnic.svg';

export interface ITablePicnicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TablePicnicIcon: FC<ITablePicnicIconProps> = memo(props => {
  return <TablePicnicSvg {...props} />;
});
