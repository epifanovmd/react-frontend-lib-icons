import React, { FC, memo } from 'react';
import RobberSvg from '../svg/robber.svg';

export interface IRobberIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobberIcon: FC<IRobberIconProps> = memo(props => {
  return <RobberSvg {...props} />;
});
