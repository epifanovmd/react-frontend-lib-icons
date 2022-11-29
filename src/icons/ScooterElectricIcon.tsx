import React, { FC, memo } from 'react';
import ScooterElectricSvg from '../svg/scooter-electric.svg';

export interface IScooterElectricIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScooterElectricIcon: FC<IScooterElectricIconProps> = memo(props => {
  return <ScooterElectricSvg {...props} />;
});
