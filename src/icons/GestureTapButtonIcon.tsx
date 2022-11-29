import React, { FC, memo } from 'react';
import GestureTapButtonSvg from '../svg/gesture-tap-button.svg';

export interface IGestureTapButtonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GestureTapButtonIcon: FC<IGestureTapButtonIconProps> = memo(props => {
  return <GestureTapButtonSvg {...props} />;
});
