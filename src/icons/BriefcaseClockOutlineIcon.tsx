import React, { FC, memo } from 'react';
import BriefcaseClockOutlineSvg from '../svg/briefcase-clock-outline.svg';

export interface IBriefcaseClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseClockOutlineIcon: FC<IBriefcaseClockOutlineIconProps> = memo(props => {
  return <BriefcaseClockOutlineSvg {...props} />;
});
