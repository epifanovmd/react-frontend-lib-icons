import React, { FC, memo } from 'react';
import Battery80Svg from '../svg/battery-80.svg';

export interface IBattery80IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Battery80Icon: FC<IBattery80IconProps> = memo(props => {
  return <Battery80Svg {...props} />;
});
