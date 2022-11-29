import React, { FC, memo } from 'react';
import MapboxSvg from '../svg/mapbox.svg';

export interface IMapboxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapboxIcon: FC<IMapboxIconProps> = memo(props => {
  return <MapboxSvg {...props} />;
});
