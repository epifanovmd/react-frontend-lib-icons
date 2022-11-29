import React, { FC, memo } from 'react';
import RobotExcitedOutlineSvg from '../svg/robot-excited-outline.svg';

export interface IRobotExcitedOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotExcitedOutlineIcon: FC<IRobotExcitedOutlineIconProps> = memo(props => {
  return <RobotExcitedOutlineSvg {...props} />;
});
