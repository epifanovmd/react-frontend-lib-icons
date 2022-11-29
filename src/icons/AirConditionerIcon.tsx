import React, { FC, memo } from 'react';
import AirConditionerSvg from '../svg/air-conditioner.svg';

export interface IAirConditionerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirConditionerIcon: FC<IAirConditionerIconProps> = memo(props => {
  return <AirConditionerSvg {...props} />;
});
