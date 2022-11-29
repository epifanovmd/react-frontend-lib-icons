import React, { FC, memo } from 'react';
import BugStopOutlineSvg from '../svg/bug-stop-outline.svg';

export interface IBugStopOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BugStopOutlineIcon: FC<IBugStopOutlineIconProps> = memo(props => {
  return <BugStopOutlineSvg {...props} />;
});
