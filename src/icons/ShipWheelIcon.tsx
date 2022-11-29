import React, { FC, memo } from 'react';
import ShipWheelSvg from '../svg/ship-wheel.svg';

export interface IShipWheelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShipWheelIcon: FC<IShipWheelIconProps> = memo(props => {
  return <ShipWheelSvg {...props} />;
});
