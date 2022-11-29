import React, { FC, memo } from 'react';
import AnimationOutlineSvg from '../svg/animation-outline.svg';

export interface IAnimationOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AnimationOutlineIcon: FC<IAnimationOutlineIconProps> = memo(props => {
  return <AnimationOutlineSvg {...props} />;
});
