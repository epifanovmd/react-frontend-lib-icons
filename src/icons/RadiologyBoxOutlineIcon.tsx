import React, { FC, memo } from 'react';
import RadiologyBoxOutlineSvg from '../svg/radiology-box-outline.svg';

export interface IRadiologyBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RadiologyBoxOutlineIcon: FC<IRadiologyBoxOutlineIconProps> = memo(props => {
  return <RadiologyBoxOutlineSvg {...props} />;
});
