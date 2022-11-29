import React, { FC, memo } from 'react';
import AirplaneMinusSvg from '../svg/airplane-minus.svg';

export interface IAirplaneMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirplaneMinusIcon: FC<IAirplaneMinusIconProps> = memo(props => {
  return <AirplaneMinusSvg {...props} />;
});
