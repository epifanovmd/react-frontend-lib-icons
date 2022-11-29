import React, { FC, memo } from 'react';
import RadiologyBoxSvg from '../svg/radiology-box.svg';

export interface IRadiologyBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RadiologyBoxIcon: FC<IRadiologyBoxIconProps> = memo(props => {
  return <RadiologyBoxSvg {...props} />;
});
