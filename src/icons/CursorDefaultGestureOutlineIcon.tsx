import React, { FC, memo } from 'react';
import CursorDefaultGestureOutlineSvg from '../svg/cursor-default-gesture-outline.svg';

export interface ICursorDefaultGestureOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CursorDefaultGestureOutlineIcon: FC<ICursorDefaultGestureOutlineIconProps> = memo(props => {
  return <CursorDefaultGestureOutlineSvg {...props} />;
});
