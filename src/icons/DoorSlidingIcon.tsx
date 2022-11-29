import React, { FC, memo } from 'react';
import DoorSlidingSvg from '../svg/door-sliding.svg';

export interface IDoorSlidingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DoorSlidingIcon: FC<IDoorSlidingIconProps> = memo(props => {
  return <DoorSlidingSvg {...props} />;
});
