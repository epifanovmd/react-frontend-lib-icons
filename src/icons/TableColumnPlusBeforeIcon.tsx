import React, { FC, memo } from 'react';
import TableColumnPlusBeforeSvg from '../svg/table-column-plus-before.svg';

export interface ITableColumnPlusBeforeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableColumnPlusBeforeIcon: FC<ITableColumnPlusBeforeIconProps> = memo(props => {
  return <TableColumnPlusBeforeSvg {...props} />;
});
