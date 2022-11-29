import React, { FC, memo } from 'react';
import BugPauseSvg from '../svg/bug-pause.svg';

export interface IBugPauseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BugPauseIcon: FC<IBugPauseIconProps> = memo(props => {
  return <BugPauseSvg {...props} />;
});
