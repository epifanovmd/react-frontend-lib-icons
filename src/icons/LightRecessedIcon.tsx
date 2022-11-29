import React, { FC, memo } from 'react';
import LightRecessedSvg from '../svg/light-recessed.svg';

export interface ILightRecessedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightRecessedIcon: FC<ILightRecessedIconProps> = memo(props => {
  return <LightRecessedSvg {...props} />;
});
