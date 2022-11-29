import React, { FC, memo } from 'react';
import GestureTapBoxSvg from '../svg/gesture-tap-box.svg';

export interface IGestureTapBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GestureTapBoxIcon: FC<IGestureTapBoxIconProps> = memo(props => {
  return <GestureTapBoxSvg {...props} />;
});
