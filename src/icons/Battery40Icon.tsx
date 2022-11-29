import React, { FC, memo } from 'react';
import Battery40Svg from '../svg/battery-40.svg';

export interface IBattery40IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Battery40Icon: FC<IBattery40IconProps> = memo(props => {
  return <Battery40Svg {...props} />;
});
