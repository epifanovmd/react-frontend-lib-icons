import React, { FC, memo } from 'react';
import Battery20Svg from '../svg/battery-20.svg';

export interface IBattery20IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Battery20Icon: FC<IBattery20IconProps> = memo(props => {
  return <Battery20Svg {...props} />;
});
