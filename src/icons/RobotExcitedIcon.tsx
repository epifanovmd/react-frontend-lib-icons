import React, { FC, memo } from 'react';
import RobotExcitedSvg from '../svg/robot-excited.svg';

export interface IRobotExcitedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotExcitedIcon: FC<IRobotExcitedIconProps> = memo(props => {
  return <RobotExcitedSvg {...props} />;
});
