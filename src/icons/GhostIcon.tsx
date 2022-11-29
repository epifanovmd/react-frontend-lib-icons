import React, { FC, memo } from 'react';
import GhostSvg from '../svg/ghost.svg';

export interface IGhostIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GhostIcon: FC<IGhostIconProps> = memo(props => {
  return <GhostSvg {...props} />;
});
