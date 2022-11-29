import React, { FC, memo } from 'react';
import GestureTapHoldSvg from '../svg/gesture-tap-hold.svg';

export interface IGestureTapHoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GestureTapHoldIcon: FC<IGestureTapHoldIconProps> = memo(props => {
  return <GestureTapHoldSvg {...props} />;
});
