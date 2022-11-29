import React, { FC, memo } from 'react';
import TableEditSvg from '../svg/table-edit.svg';

export interface ITableEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableEditIcon: FC<ITableEditIconProps> = memo(props => {
  return <TableEditSvg {...props} />;
});
