import React, { FC, memo } from 'react';
import TableHeadersEyeOffSvg from '../svg/table-headers-eye-off.svg';

export interface ITableHeadersEyeOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableHeadersEyeOffIcon: FC<ITableHeadersEyeOffIconProps> = memo(props => {
  return <TableHeadersEyeOffSvg {...props} />;
});
