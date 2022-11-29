import React, { FC, memo } from 'react';
import WindTurbineSvg from '../svg/wind-turbine.svg';

export interface IWindTurbineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WindTurbineIcon: FC<IWindTurbineIconProps> = memo(props => {
  return <WindTurbineSvg {...props} />;
});
