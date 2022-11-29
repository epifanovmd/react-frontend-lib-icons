import React, { FC, memo } from 'react';
import RobotDeadSvg from '../svg/robot-dead.svg';

export interface IRobotDeadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotDeadIcon: FC<IRobotDeadIconProps> = memo(props => {
  return <RobotDeadSvg {...props} />;
});
