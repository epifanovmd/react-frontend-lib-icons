import React, { FC, memo } from 'react';
import GestureDoubleTapSvg from '../svg/gesture-double-tap.svg';

export interface IGestureDoubleTapIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GestureDoubleTapIcon: FC<IGestureDoubleTapIconProps> = memo(props => {
  return <GestureDoubleTapSvg {...props} />;
});
