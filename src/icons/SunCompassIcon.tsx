import React, { FC, memo } from 'react';
import SunCompassSvg from '../svg/sun-compass.svg';

export interface ISunCompassIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SunCompassIcon: FC<ISunCompassIconProps> = memo(props => {
  return <SunCompassSvg {...props} />;
});
