import React, { FC, memo } from 'react';
import MotionSensorOffSvg from '../svg/motion-sensor-off.svg';

export interface IMotionSensorOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MotionSensorOffIcon: FC<IMotionSensorOffIconProps> = memo(props => {
  return <MotionSensorOffSvg {...props} />;
});
