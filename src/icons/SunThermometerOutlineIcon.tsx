import React, { FC, memo } from 'react';
import SunThermometerOutlineSvg from '../svg/sun-thermometer-outline.svg';

export interface ISunThermometerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SunThermometerOutlineIcon: FC<ISunThermometerOutlineIconProps> = memo(props => {
  return <SunThermometerOutlineSvg {...props} />;
});
