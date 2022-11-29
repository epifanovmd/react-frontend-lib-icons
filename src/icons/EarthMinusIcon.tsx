import React, { FC, memo } from 'react';
import EarthMinusSvg from '../svg/earth-minus.svg';

export interface IEarthMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EarthMinusIcon: FC<IEarthMinusIconProps> = memo(props => {
  return <EarthMinusSvg {...props} />;
});
