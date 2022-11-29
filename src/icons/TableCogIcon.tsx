import React, { FC, memo } from 'react';
import TableCogSvg from '../svg/table-cog.svg';

export interface ITableCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableCogIcon: FC<ITableCogIconProps> = memo(props => {
  return <TableCogSvg {...props} />;
});
