import React, { FC, memo } from 'react';
import BriefcaseOffSvg from '../svg/briefcase-off.svg';

export interface IBriefcaseOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseOffIcon: FC<IBriefcaseOffIconProps> = memo(props => {
  return <BriefcaseOffSvg {...props} />;
});
