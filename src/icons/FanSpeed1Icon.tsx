import React, { FC, memo } from 'react';
import FanSpeed1Svg from '../svg/fan-speed-1.svg';

export interface IFanSpeed1IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FanSpeed1Icon: FC<IFanSpeed1IconProps> = memo(props => {
  return <FanSpeed1Svg {...props} />;
});
