import React, { FC, memo } from 'react';
import CarEmergencySvg from '../svg/car-emergency.svg';

export interface ICarEmergencyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarEmergencyIcon: FC<ICarEmergencyIconProps> = memo(props => {
  return <CarEmergencySvg {...props} />;
});
