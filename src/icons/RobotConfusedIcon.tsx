import React, { FC, memo } from 'react';
import RobotConfusedSvg from '../svg/robot-confused.svg';

export interface IRobotConfusedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotConfusedIcon: FC<IRobotConfusedIconProps> = memo(props => {
  return <RobotConfusedSvg {...props} />;
});
