import React, { FC, memo } from 'react';
import TableEyeOffSvg from '../svg/table-eye-off.svg';

export interface ITableEyeOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableEyeOffIcon: FC<ITableEyeOffIconProps> = memo(props => {
  return <TableEyeOffSvg {...props} />;
});
