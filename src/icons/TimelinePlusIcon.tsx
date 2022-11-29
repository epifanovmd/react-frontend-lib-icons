import React, { FC, memo } from 'react';
import TimelinePlusSvg from '../svg/timeline-plus.svg';

export interface ITimelinePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimelinePlusIcon: FC<ITimelinePlusIconProps> = memo(props => {
  return <TimelinePlusSvg {...props} />;
});
