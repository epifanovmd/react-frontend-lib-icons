import React, { FC, memo } from 'react';
import PulseSvg from '../svg/pulse.svg';

export interface IPulseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PulseIcon: FC<IPulseIconProps> = memo(props => {
  return <PulseSvg {...props} />;
});
