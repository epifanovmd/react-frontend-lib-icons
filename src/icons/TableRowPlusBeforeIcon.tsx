import React, { FC, memo } from 'react';
import TableRowPlusBeforeSvg from '../svg/table-row-plus-before.svg';

export interface ITableRowPlusBeforeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableRowPlusBeforeIcon: FC<ITableRowPlusBeforeIconProps> = memo(props => {
  return <TableRowPlusBeforeSvg {...props} />;
});
