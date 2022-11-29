import React, { FC, memo } from 'react';
import GesturePinchSvg from '../svg/gesture-pinch.svg';

export interface IGesturePinchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GesturePinchIcon: FC<IGesturePinchIconProps> = memo(props => {
  return <GesturePinchSvg {...props} />;
});
