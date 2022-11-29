import React, { FC, memo } from 'react';
import RobotOffSvg from '../svg/robot-off.svg';

export interface IRobotOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotOffIcon: FC<IRobotOffIconProps> = memo(props => {
  return <RobotOffSvg {...props} />;
});
