import React, { FC, memo } from 'react';
import DoorSlidingLockSvg from '../svg/door-sliding-lock.svg';

export interface IDoorSlidingLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DoorSlidingLockIcon: FC<IDoorSlidingLockIconProps> = memo(props => {
  return <DoorSlidingLockSvg {...props} />;
});
