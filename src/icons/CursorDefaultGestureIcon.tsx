import React, { FC, memo } from 'react';
import CursorDefaultGestureSvg from '../svg/cursor-default-gesture.svg';

export interface ICursorDefaultGestureIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CursorDefaultGestureIcon: FC<ICursorDefaultGestureIconProps> = memo(props => {
  return <CursorDefaultGestureSvg {...props} />;
});
