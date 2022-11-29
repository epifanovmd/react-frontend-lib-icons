import React, { FC, memo } from 'react';
import ThermometerProbeSvg from '../svg/thermometer-probe.svg';

export interface IThermometerProbeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThermometerProbeIcon: FC<IThermometerProbeIconProps> = memo(props => {
  return <ThermometerProbeSvg {...props} />;
});
