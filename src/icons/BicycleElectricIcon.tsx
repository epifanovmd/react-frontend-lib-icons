import React, { FC, memo } from 'react';
import BicycleElectricSvg from '../svg/bicycle-electric.svg';

export interface IBicycleElectricIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BicycleElectricIcon: FC<IBicycleElectricIconProps> = memo(props => {
  return <BicycleElectricSvg {...props} />;
});
