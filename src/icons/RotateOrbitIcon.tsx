import React, { FC, memo } from 'react';
import RotateOrbitSvg from '../svg/rotate-orbit.svg';

export interface IRotateOrbitIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RotateOrbitIcon: FC<IRotateOrbitIconProps> = memo(props => {
  return <RotateOrbitSvg {...props} />;
});
