import React, { FC, memo } from 'react';
import OfficeBuildingOutlineSvg from '../svg/office-building-outline.svg';

export interface IOfficeBuildingOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OfficeBuildingOutlineIcon: FC<IOfficeBuildingOutlineIconProps> = memo(props => {
  return <OfficeBuildingOutlineSvg {...props} />;
});
