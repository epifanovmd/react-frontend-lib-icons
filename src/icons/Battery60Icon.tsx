import React, { FC, memo } from 'react';
import Battery60Svg from '../svg/battery-60.svg';

export interface IBattery60IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Battery60Icon: FC<IBattery60IconProps> = memo(props => {
  return <Battery60Svg {...props} />;
});
