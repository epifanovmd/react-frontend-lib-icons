import React, { FC, memo } from 'react';
import OfficeBuildingMinusSvg from '../svg/office-building-minus.svg';

export interface IOfficeBuildingMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OfficeBuildingMinusIcon: FC<IOfficeBuildingMinusIconProps> = memo(props => {
  return <OfficeBuildingMinusSvg {...props} />;
});
