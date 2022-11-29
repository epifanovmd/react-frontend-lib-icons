import React, { FC, memo } from 'react';
import RobotHappyOutlineSvg from '../svg/robot-happy-outline.svg';

export interface IRobotHappyOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotHappyOutlineIcon: FC<IRobotHappyOutlineIconProps> = memo(props => {
  return <RobotHappyOutlineSvg {...props} />;
});
