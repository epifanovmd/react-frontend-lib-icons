import React, { FC, memo } from 'react';
import TableRemoveSvg from '../svg/table-remove.svg';

export interface ITableRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableRemoveIcon: FC<ITableRemoveIconProps> = memo(props => {
  return <TableRemoveSvg {...props} />;
});
