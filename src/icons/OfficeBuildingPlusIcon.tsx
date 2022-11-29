import React, { FC, memo } from 'react';
import OfficeBuildingPlusSvg from '../svg/office-building-plus.svg';

export interface IOfficeBuildingPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OfficeBuildingPlusIcon: FC<IOfficeBuildingPlusIconProps> = memo(props => {
  return <OfficeBuildingPlusSvg {...props} />;
});
