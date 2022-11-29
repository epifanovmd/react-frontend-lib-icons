import React, { FC, memo } from 'react';
import RobotLoveSvg from '../svg/robot-love.svg';

export interface IRobotLoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotLoveIcon: FC<IRobotLoveIconProps> = memo(props => {
  return <RobotLoveSvg {...props} />;
});
