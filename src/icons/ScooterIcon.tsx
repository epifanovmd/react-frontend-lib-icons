import React, { FC, memo } from 'react';
import ScooterSvg from '../svg/scooter.svg';

export interface IScooterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScooterIcon: FC<IScooterIconProps> = memo(props => {
  return <ScooterSvg {...props} />;
});
