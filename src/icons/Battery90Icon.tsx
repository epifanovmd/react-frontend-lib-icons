import React, { FC, memo } from 'react';
import Battery90Svg from '../svg/battery-90.svg';

export interface IBattery90IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Battery90Icon: FC<IBattery90IconProps> = memo(props => {
  return <Battery90Svg {...props} />;
});
