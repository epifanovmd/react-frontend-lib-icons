import React, { FC, memo } from 'react';
import GhostOffSvg from '../svg/ghost-off.svg';

export interface IGhostOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GhostOffIcon: FC<IGhostOffIconProps> = memo(props => {
  return <GhostOffSvg {...props} />;
});
