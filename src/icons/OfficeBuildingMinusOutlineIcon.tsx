import React, { FC, memo } from 'react';
import OfficeBuildingMinusOutlineSvg from '../svg/office-building-minus-outline.svg';

export interface IOfficeBuildingMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OfficeBuildingMinusOutlineIcon: FC<IOfficeBuildingMinusOutlineIconProps> = memo(props => {
  return <OfficeBuildingMinusOutlineSvg {...props} />;
});
