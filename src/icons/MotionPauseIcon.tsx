import React, { FC, memo } from 'react';
import MotionPauseSvg from '../svg/motion-pause.svg';

export interface IMotionPauseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MotionPauseIcon: FC<IMotionPauseIconProps> = memo(props => {
  return <MotionPauseSvg {...props} />;
});
