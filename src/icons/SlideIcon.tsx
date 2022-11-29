import React, { FC, memo } from 'react';
import SlideSvg from '../svg/slide.svg';

export interface ISlideIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SlideIcon: FC<ISlideIconProps> = memo(props => {
  return <SlideSvg {...props} />;
});
