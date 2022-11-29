import React, { FC, memo } from 'react';
import GestureSwipeHorizontalSvg from '../svg/gesture-swipe-horizontal.svg';

export interface IGestureSwipeHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GestureSwipeHorizontalIcon: FC<IGestureSwipeHorizontalIconProps> = memo(props => {
  return <GestureSwipeHorizontalSvg {...props} />;
});
