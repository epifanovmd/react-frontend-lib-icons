import React, { FC, memo } from 'react';
import MotionPlaySvg from '../svg/motion-play.svg';

export interface IMotionPlayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MotionPlayIcon: FC<IMotionPlayIconProps> = memo(props => {
  return <MotionPlaySvg {...props} />;
});
