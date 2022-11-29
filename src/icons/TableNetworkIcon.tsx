import React, { FC, memo } from 'react';
import TableNetworkSvg from '../svg/table-network.svg';

export interface ITableNetworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableNetworkIcon: FC<ITableNetworkIconProps> = memo(props => {
  return <TableNetworkSvg {...props} />;
});
