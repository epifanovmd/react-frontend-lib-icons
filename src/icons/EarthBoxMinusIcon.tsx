import React, { FC, memo } from 'react';
import EarthBoxMinusSvg from '../svg/earth-box-minus.svg';

export interface IEarthBoxMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EarthBoxMinusIcon: FC<IEarthBoxMinusIconProps> = memo(props => {
  return <EarthBoxMinusSvg {...props} />;
});
