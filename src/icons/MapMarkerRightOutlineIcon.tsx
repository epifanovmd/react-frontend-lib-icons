import React, { FC, memo } from 'react';
import MapMarkerRightOutlineSvg from '../svg/map-marker-right-outline.svg';

export interface IMapMarkerRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerRightOutlineIcon: FC<IMapMarkerRightOutlineIconProps> = memo(props => {
  return <MapMarkerRightOutlineSvg {...props} />;
});
