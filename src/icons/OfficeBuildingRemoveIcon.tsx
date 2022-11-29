import React, { FC, memo } from 'react';
import OfficeBuildingRemoveSvg from '../svg/office-building-remove.svg';

export interface IOfficeBuildingRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OfficeBuildingRemoveIcon: FC<IOfficeBuildingRemoveIconProps> = memo(props => {
  return <OfficeBuildingRemoveSvg {...props} />;
});
