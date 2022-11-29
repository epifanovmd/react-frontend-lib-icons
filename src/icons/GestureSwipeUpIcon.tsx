import React, { FC, memo } from 'react';
import GestureSwipeUpSvg from '../svg/gesture-swipe-up.svg';

export interface IGestureSwipeUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GestureSwipeUpIcon: FC<IGestureSwipeUpIconProps> = memo(props => {
  return <GestureSwipeUpSvg {...props} />;
});
