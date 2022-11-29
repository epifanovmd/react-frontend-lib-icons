import React, { FC, memo } from 'react';
import DoorSlidingOpenSvg from '../svg/door-sliding-open.svg';

export interface IDoorSlidingOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DoorSlidingOpenIcon: FC<IDoorSlidingOpenIconProps> = memo(props => {
  return <DoorSlidingOpenSvg {...props} />;
});
