import React, { FC, memo } from 'react';
import WarehouseSvg from '../svg/warehouse.svg';

export interface IWarehouseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WarehouseIcon: FC<IWarehouseIconProps> = memo(props => {
  return <WarehouseSvg {...props} />;
});
