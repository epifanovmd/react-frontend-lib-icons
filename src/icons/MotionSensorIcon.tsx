import React, { FC, memo } from 'react';
import MotionSensorSvg from '../svg/motion-sensor.svg';

export interface IMotionSensorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MotionSensorIcon: FC<IMotionSensorIconProps> = memo(props => {
  return <MotionSensorSvg {...props} />;
});
