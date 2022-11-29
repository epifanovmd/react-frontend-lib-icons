import React, { FC, memo } from 'react';
import GestureSwipeLeftSvg from '../svg/gesture-swipe-left.svg';

export interface IGestureSwipeLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GestureSwipeLeftIcon: FC<IGestureSwipeLeftIconProps> = memo(props => {
  return <GestureSwipeLeftSvg {...props} />;
});
