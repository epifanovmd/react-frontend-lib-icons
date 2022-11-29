import React, { FC, memo } from 'react';
import GestureTapSvg from '../svg/gesture-tap.svg';

export interface IGestureTapIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GestureTapIcon: FC<IGestureTapIconProps> = memo(props => {
  return <GestureTapSvg {...props} />;
});
