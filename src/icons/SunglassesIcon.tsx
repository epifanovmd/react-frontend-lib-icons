import React, { FC, memo } from 'react';
import SunglassesSvg from '../svg/sunglasses.svg';

export interface ISunglassesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SunglassesIcon: FC<ISunglassesIconProps> = memo(props => {
  return <SunglassesSvg {...props} />;
});
