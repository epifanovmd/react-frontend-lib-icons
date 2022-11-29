import React, { FC, memo } from 'react';
import CarBatterySvg from '../svg/car-battery.svg';

export interface ICarBatteryIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarBatteryIcon: FC<ICarBatteryIconProps> = memo(props => {
  return <CarBatterySvg {...props} />;
});
