import React, { FC, memo } from 'react';
import RadiusOutlineSvg from '../svg/radius-outline.svg';

export interface IRadiusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RadiusOutlineIcon: FC<IRadiusOutlineIconProps> = memo(props => {
  return <RadiusOutlineSvg {...props} />;
});
