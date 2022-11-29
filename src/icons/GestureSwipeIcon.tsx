import React, { FC, memo } from 'react';
import GestureSwipeSvg from '../svg/gesture-swipe.svg';

export interface IGestureSwipeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GestureSwipeIcon: FC<IGestureSwipeIconProps> = memo(props => {
  return <GestureSwipeSvg {...props} />;
});
