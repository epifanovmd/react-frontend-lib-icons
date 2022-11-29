import React, { FC, memo } from 'react';
import GestureSwipeVerticalSvg from '../svg/gesture-swipe-vertical.svg';

export interface IGestureSwipeVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GestureSwipeVerticalIcon: FC<IGestureSwipeVerticalIconProps> = memo(props => {
  return <GestureSwipeVerticalSvg {...props} />;
});
