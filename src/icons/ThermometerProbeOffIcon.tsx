import React, { FC, memo } from 'react';
import ThermometerProbeOffSvg from '../svg/thermometer-probe-off.svg';

export interface IThermometerProbeOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThermometerProbeOffIcon: FC<IThermometerProbeOffIconProps> = memo(props => {
  return <ThermometerProbeOffSvg {...props} />;
});
