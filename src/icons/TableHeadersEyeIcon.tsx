import React, { FC, memo } from 'react';
import TableHeadersEyeSvg from '../svg/table-headers-eye.svg';

export interface ITableHeadersEyeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableHeadersEyeIcon: FC<ITableHeadersEyeIconProps> = memo(props => {
  return <TableHeadersEyeSvg {...props} />;
});
