import React, { FC, memo } from 'react';
import WindPowerSvg from '../svg/wind-power.svg';

export interface IWindPowerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WindPowerIcon: FC<IWindPowerIconProps> = memo(props => {
  return <WindPowerSvg {...props} />;
});
