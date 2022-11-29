import React, { FC, memo } from 'react';
import BriefcaseCheckSvg from '../svg/briefcase-check.svg';

export interface IBriefcaseCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseCheckIcon: FC<IBriefcaseCheckIconProps> = memo(props => {
  return <BriefcaseCheckSvg {...props} />;
});
