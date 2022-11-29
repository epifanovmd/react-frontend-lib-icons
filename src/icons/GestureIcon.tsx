import React, { FC, memo } from 'react';
import GestureSvg from '../svg/gesture.svg';

export interface IGestureIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GestureIcon: FC<IGestureIconProps> = memo(props => {
  return <GestureSvg {...props} />;
});
