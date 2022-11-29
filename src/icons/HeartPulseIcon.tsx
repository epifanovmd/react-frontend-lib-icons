import React, { FC, memo } from 'react';
import HeartPulseSvg from '../svg/heart-pulse.svg';

export interface IHeartPulseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartPulseIcon: FC<IHeartPulseIconProps> = memo(props => {
  return <HeartPulseSvg {...props} />;
});
