import React, { FC, memo } from 'react';
import GestureTwoDoubleTapSvg from '../svg/gesture-two-double-tap.svg';

export interface IGestureTwoDoubleTapIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GestureTwoDoubleTapIcon: FC<IGestureTwoDoubleTapIconProps> = memo(props => {
  return <GestureTwoDoubleTapSvg {...props} />;
});
