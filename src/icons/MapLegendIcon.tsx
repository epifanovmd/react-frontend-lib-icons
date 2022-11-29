import React, { FC, memo } from 'react';
import MapLegendSvg from '../svg/map-legend.svg';

export interface IMapLegendIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapLegendIcon: FC<IMapLegendIconProps> = memo(props => {
  return <MapLegendSvg {...props} />;
});
