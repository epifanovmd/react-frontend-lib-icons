import React, { FC, memo } from 'react';
import VibrateSvg from '../svg/vibrate.svg';

export interface IVibrateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VibrateIcon: FC<IVibrateIconProps> = memo(props => {
  return <VibrateSvg {...props} />;
});
