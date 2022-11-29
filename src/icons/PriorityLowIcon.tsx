import React, { FC, memo } from 'react';
import PriorityLowSvg from '../svg/priority-low.svg';

export interface IPriorityLowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PriorityLowIcon: FC<IPriorityLowIconProps> = memo(props => {
  return <PriorityLowSvg {...props} />;
});
