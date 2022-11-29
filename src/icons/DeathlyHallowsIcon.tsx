import React, { FC, memo } from 'react';
import DeathlyHallowsSvg from '../svg/deathly-hallows.svg';

export interface IDeathlyHallowsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeathlyHallowsIcon: FC<IDeathlyHallowsIconProps> = memo(props => {
  return <DeathlyHallowsSvg {...props} />;
});
