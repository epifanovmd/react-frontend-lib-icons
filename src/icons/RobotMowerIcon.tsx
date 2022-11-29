import React, { FC, memo } from 'react';
import RobotMowerSvg from '../svg/robot-mower.svg';

export interface IRobotMowerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotMowerIcon: FC<IRobotMowerIconProps> = memo(props => {
  return <RobotMowerSvg {...props} />;
});
