import React, { FC, memo } from 'react';
import TableRowPlusAfterSvg from '../svg/table-row-plus-after.svg';

export interface ITableRowPlusAfterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableRowPlusAfterIcon: FC<ITableRowPlusAfterIconProps> = memo(props => {
  return <TableRowPlusAfterSvg {...props} />;
});
