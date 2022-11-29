import React, { FC, memo } from 'react';
import OfficeBuildingMarkerSvg from '../svg/office-building-marker.svg';

export interface IOfficeBuildingMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OfficeBuildingMarkerIcon: FC<IOfficeBuildingMarkerIconProps> = memo(props => {
  return <OfficeBuildingMarkerSvg {...props} />;
});
