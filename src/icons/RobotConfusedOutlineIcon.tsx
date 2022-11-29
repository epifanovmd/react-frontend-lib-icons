import React, { FC, memo } from 'react';
import RobotConfusedOutlineSvg from '../svg/robot-confused-outline.svg';

export interface IRobotConfusedOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotConfusedOutlineIcon: FC<IRobotConfusedOutlineIconProps> = memo(props => {
  return <RobotConfusedOutlineSvg {...props} />;
});
