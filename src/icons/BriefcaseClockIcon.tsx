import React, { FC, memo } from 'react';
import BriefcaseClockSvg from '../svg/briefcase-clock.svg';

export interface IBriefcaseClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseClockIcon: FC<IBriefcaseClockIconProps> = memo(props => {
  return <BriefcaseClockSvg {...props} />;
});
