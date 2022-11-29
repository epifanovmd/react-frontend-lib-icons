import React, { FC, memo } from 'react';
import MotionOutlineSvg from '../svg/motion-outline.svg';

export interface IMotionOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MotionOutlineIcon: FC<IMotionOutlineIconProps> = memo(props => {
  return <MotionOutlineSvg {...props} />;
});
