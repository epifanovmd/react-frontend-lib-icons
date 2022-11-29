import React, { FC, memo } from 'react';
import TableKeySvg from '../svg/table-key.svg';

export interface ITableKeyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableKeyIcon: FC<ITableKeyIconProps> = memo(props => {
  return <TableKeySvg {...props} />;
});
