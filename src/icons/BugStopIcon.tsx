import React, { FC, memo } from 'react';
import BugStopSvg from '../svg/bug-stop.svg';

export interface IBugStopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BugStopIcon: FC<IBugStopIconProps> = memo(props => {
  return <BugStopSvg {...props} />;
});
