import React, { FC, memo } from 'react';
import TankSvg from '../svg/tank.svg';

export interface ITankIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TankIcon: FC<ITankIconProps> = memo(props => {
  return <TankSvg {...props} />;
});
