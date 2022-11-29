import React, { FC, memo } from 'react';
import CarWirelessSvg from '../svg/car-wireless.svg';

export interface ICarWirelessIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarWirelessIcon: FC<ICarWirelessIconProps> = memo(props => {
  return <CarWirelessSvg {...props} />;
});
