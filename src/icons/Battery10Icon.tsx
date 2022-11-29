import React, { FC, memo } from 'react';
import Battery10Svg from '../svg/battery-10.svg';

export interface IBattery10IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Battery10Icon: FC<IBattery10IconProps> = memo(props => {
  return <Battery10Svg {...props} />;
});
