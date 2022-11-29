import React, { FC, memo } from 'react';
import WindTurbineCheckSvg from '../svg/wind-turbine-check.svg';

export interface IWindTurbineCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WindTurbineCheckIcon: FC<IWindTurbineCheckIconProps> = memo(props => {
  return <WindTurbineCheckSvg {...props} />;
});
