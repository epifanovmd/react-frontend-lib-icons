import React, { FC, memo } from 'react';
import GestureSwipeDownSvg from '../svg/gesture-swipe-down.svg';

export interface IGestureSwipeDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GestureSwipeDownIcon: FC<IGestureSwipeDownIconProps> = memo(props => {
  return <GestureSwipeDownSvg {...props} />;
});
