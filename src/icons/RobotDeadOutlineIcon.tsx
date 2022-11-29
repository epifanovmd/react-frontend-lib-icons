import React, { FC, memo } from 'react';
import RobotDeadOutlineSvg from '../svg/robot-dead-outline.svg';

export interface IRobotDeadOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotDeadOutlineIcon: FC<IRobotDeadOutlineIconProps> = memo(props => {
  return <RobotDeadOutlineSvg {...props} />;
});
