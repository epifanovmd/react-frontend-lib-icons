import React, { FC, memo } from 'react';
import MotionPauseOutlineSvg from '../svg/motion-pause-outline.svg';

export interface IMotionPauseOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MotionPauseOutlineIcon: FC<IMotionPauseOutlineIconProps> = memo(props => {
  return <MotionPauseOutlineSvg {...props} />;
});
