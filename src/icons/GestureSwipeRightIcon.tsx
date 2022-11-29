import React, { FC, memo } from 'react';
import GestureSwipeRightSvg from '../svg/gesture-swipe-right.svg';

export interface IGestureSwipeRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GestureSwipeRightIcon: FC<IGestureSwipeRightIconProps> = memo(props => {
  return <GestureSwipeRightSvg {...props} />;
});
