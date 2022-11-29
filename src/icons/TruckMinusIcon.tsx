import React, { FC, memo } from 'react';
import TruckMinusSvg from '../svg/truck-minus.svg';

export interface ITruckMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TruckMinusIcon: FC<ITruckMinusIconProps> = memo(props => {
  return <TruckMinusSvg {...props} />;
});
