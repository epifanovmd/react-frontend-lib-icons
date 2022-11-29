import React, { FC, memo } from 'react';
import RobotSvg from '../svg/robot.svg';

export interface IRobotIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotIcon: FC<IRobotIconProps> = memo(props => {
  return <RobotSvg {...props} />;
});
