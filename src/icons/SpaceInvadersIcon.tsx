import React, { FC, memo } from 'react';
import SpaceInvadersSvg from '../svg/space-invaders.svg';

export interface ISpaceInvadersIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpaceInvadersIcon: FC<ISpaceInvadersIconProps> = memo(props => {
  return <SpaceInvadersSvg {...props} />;
});
