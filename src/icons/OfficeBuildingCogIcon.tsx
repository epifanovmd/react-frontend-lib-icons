import React, { FC, memo } from 'react';
import OfficeBuildingCogSvg from '../svg/office-building-cog.svg';

export interface IOfficeBuildingCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OfficeBuildingCogIcon: FC<IOfficeBuildingCogIconProps> = memo(props => {
  return <OfficeBuildingCogSvg {...props} />;
});
