import React, { FC, memo } from 'react';
import GaugeSvg from '../svg/gauge.svg';

export interface IGaugeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GaugeIcon: FC<IGaugeIconProps> = memo(props => {
  return <GaugeSvg {...props} />;
});
