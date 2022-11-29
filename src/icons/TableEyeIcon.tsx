import React, { FC, memo } from 'react';
import TableEyeSvg from '../svg/table-eye.svg';

export interface ITableEyeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableEyeIcon: FC<ITableEyeIconProps> = memo(props => {
  return <TableEyeSvg {...props} />;
});
