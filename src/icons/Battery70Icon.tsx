import React, { FC, memo } from 'react';
import Battery70Svg from '../svg/battery-70.svg';

export interface IBattery70IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Battery70Icon: FC<IBattery70IconProps> = memo(props => {
  return <Battery70Svg {...props} />;
});
