import React, { FC, memo } from 'react';
import BriefcaseAccountSvg from '../svg/briefcase-account.svg';

export interface IBriefcaseAccountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseAccountIcon: FC<IBriefcaseAccountIconProps> = memo(props => {
  return <BriefcaseAccountSvg {...props} />;
});
