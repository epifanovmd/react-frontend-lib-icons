import React, { FC, memo } from 'react';
import OfficeBuildingSvg from '../svg/office-building.svg';

export interface IOfficeBuildingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OfficeBuildingIcon: FC<IOfficeBuildingIconProps> = memo(props => {
  return <OfficeBuildingSvg {...props} />;
});
