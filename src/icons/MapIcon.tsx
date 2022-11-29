import React, { FC, memo } from 'react';
import MapSvg from '../svg/map.svg';

export interface IMapIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapIcon: FC<IMapIconProps> = memo(props => {
  return <MapSvg {...props} />;
});
