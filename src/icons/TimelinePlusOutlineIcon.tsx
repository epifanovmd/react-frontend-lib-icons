import React, { FC, memo } from 'react';
import TimelinePlusOutlineSvg from '../svg/timeline-plus-outline.svg';

export interface ITimelinePlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimelinePlusOutlineIcon: FC<ITimelinePlusOutlineIconProps> = memo(props => {
  return <TimelinePlusOutlineSvg {...props} />;
});
