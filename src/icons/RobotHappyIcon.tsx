import React, { FC, memo } from 'react';
import RobotHappySvg from '../svg/robot-happy.svg';

export interface IRobotHappyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotHappyIcon: FC<IRobotHappyIconProps> = memo(props => {
  return <RobotHappySvg {...props} />;
});
