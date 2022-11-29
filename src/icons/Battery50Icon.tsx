import React, { FC, memo } from 'react';
import Battery50Svg from '../svg/battery-50.svg';

export interface IBattery50IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Battery50Icon: FC<IBattery50IconProps> = memo(props => {
  return <Battery50Svg {...props} />;
});
