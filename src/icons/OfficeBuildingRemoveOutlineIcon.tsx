import React, { FC, memo } from 'react';
import OfficeBuildingRemoveOutlineSvg from '../svg/office-building-remove-outline.svg';

export interface IOfficeBuildingRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OfficeBuildingRemoveOutlineIcon: FC<IOfficeBuildingRemoveOutlineIconProps> = memo(props => {
  return <OfficeBuildingRemoveOutlineSvg {...props} />;
});
