import React, { FC, memo } from 'react';
import RadiusSvg from '../svg/radius.svg';

export interface IRadiusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RadiusIcon: FC<IRadiusIconProps> = memo(props => {
  return <RadiusSvg {...props} />;
});
