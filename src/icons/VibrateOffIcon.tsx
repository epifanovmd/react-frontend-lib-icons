import React, { FC, memo } from 'react';
import VibrateOffSvg from '../svg/vibrate-off.svg';

export interface IVibrateOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VibrateOffIcon: FC<IVibrateOffIconProps> = memo(props => {
  return <VibrateOffSvg {...props} />;
});
