import React, { FC, memo } from 'react';
import CloudClockSvg from '../svg/cloud-clock.svg';

export interface ICloudClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudClockIcon: FC<ICloudClockIconProps> = memo(props => {
  return <CloudClockSvg {...props} />;
});
