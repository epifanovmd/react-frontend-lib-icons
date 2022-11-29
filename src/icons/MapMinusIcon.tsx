import React, { FC, memo } from 'react';
import MapMinusSvg from '../svg/map-minus.svg';

export interface IMapMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMinusIcon: FC<IMapMinusIconProps> = memo(props => {
  return <MapMinusSvg {...props} />;
});
