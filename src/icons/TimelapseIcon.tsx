import React, { FC, memo } from 'react';
import TimelapseSvg from '../svg/timelapse.svg';

export interface ITimelapseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimelapseIcon: FC<ITimelapseIconProps> = memo(props => {
  return <TimelapseSvg {...props} />;
});
