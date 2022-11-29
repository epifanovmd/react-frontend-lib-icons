import React, { FC, memo } from 'react';
import OfficeBuildingCogOutlineSvg from '../svg/office-building-cog-outline.svg';

export interface IOfficeBuildingCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OfficeBuildingCogOutlineIcon: FC<IOfficeBuildingCogOutlineIconProps> = memo(props => {
  return <OfficeBuildingCogOutlineSvg {...props} />;
});
