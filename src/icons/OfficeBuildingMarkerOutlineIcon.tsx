import React, { FC, memo } from 'react';
import OfficeBuildingMarkerOutlineSvg from '../svg/office-building-marker-outline.svg';

export interface IOfficeBuildingMarkerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OfficeBuildingMarkerOutlineIcon: FC<IOfficeBuildingMarkerOutlineIconProps> = memo(props => {
  return <OfficeBuildingMarkerOutlineSvg {...props} />;
});
