import React, { FC, memo } from 'react';
import FanSpeed2Svg from '../svg/fan-speed-2.svg';

export interface IFanSpeed2IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FanSpeed2Icon: FC<IFanSpeed2IconProps> = memo(props => {
  return <FanSpeed2Svg {...props} />;
});
