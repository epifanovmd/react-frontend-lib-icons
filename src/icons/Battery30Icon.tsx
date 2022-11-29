import React, { FC, memo } from 'react';
import Battery30Svg from '../svg/battery-30.svg';

export interface IBattery30IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Battery30Icon: FC<IBattery30IconProps> = memo(props => {
  return <Battery30Svg {...props} />;
});
