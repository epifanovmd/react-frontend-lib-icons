import React, { FC, memo } from 'react';
import MapMarkerRemoveVariantSvg from '../svg/map-marker-remove-variant.svg';

export interface IMapMarkerRemoveVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerRemoveVariantIcon: FC<IMapMarkerRemoveVariantIconProps> = memo(props => {
  return <MapMarkerRemoveVariantSvg {...props} />;
});
