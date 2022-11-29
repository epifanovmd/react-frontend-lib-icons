import React, { FC, memo } from 'react';
import DeathStarSvg from '../svg/death-star.svg';

export interface IDeathStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeathStarIcon: FC<IDeathStarIconProps> = memo(props => {
  return <DeathStarSvg {...props} />;
});
