import React, { FC, memo } from 'react';
import TurbineSvg from '../svg/turbine.svg';

export interface ITurbineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TurbineIcon: FC<ITurbineIconProps> = memo(props => {
  return <TurbineSvg {...props} />;
});
