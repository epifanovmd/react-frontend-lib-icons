import React, { FC, memo } from 'react';
import OfficeBuildingPlusOutlineSvg from '../svg/office-building-plus-outline.svg';

export interface IOfficeBuildingPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OfficeBuildingPlusOutlineIcon: FC<IOfficeBuildingPlusOutlineIconProps> = memo(props => {
  return <OfficeBuildingPlusOutlineSvg {...props} />;
});
