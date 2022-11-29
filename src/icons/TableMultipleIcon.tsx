import React, { FC, memo } from 'react';
import TableMultipleSvg from '../svg/table-multiple.svg';

export interface ITableMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableMultipleIcon: FC<ITableMultipleIconProps> = memo(props => {
  return <TableMultipleSvg {...props} />;
});
