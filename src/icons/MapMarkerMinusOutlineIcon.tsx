import React, { FC, memo } from 'react';
import MapMarkerMinusOutlineSvg from '../svg/map-marker-minus-outline.svg';

export interface IMapMarkerMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerMinusOutlineIcon: FC<IMapMarkerMinusOutlineIconProps> = memo(props => {
  return <MapMarkerMinusOutlineSvg {...props} />;
});
