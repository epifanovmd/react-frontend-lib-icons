import React, { FC, memo } from 'react';
import TableColumnPlusAfterSvg from '../svg/table-column-plus-after.svg';

export interface ITableColumnPlusAfterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableColumnPlusAfterIcon: FC<ITableColumnPlusAfterIconProps> = memo(props => {
  return <TableColumnPlusAfterSvg {...props} />;
});
