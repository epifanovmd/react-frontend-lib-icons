import React, { FC, memo } from 'react';
import BriefcaseAccountOutlineSvg from '../svg/briefcase-account-outline.svg';

export interface IBriefcaseAccountOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseAccountOutlineIcon: FC<IBriefcaseAccountOutlineIconProps> = memo(props => {
  return <BriefcaseAccountOutlineSvg {...props} />;
});
