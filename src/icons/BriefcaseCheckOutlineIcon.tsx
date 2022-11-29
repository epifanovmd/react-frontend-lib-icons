import React, { FC, memo } from 'react';
import BriefcaseCheckOutlineSvg from '../svg/briefcase-check-outline.svg';

export interface IBriefcaseCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseCheckOutlineIcon: FC<IBriefcaseCheckOutlineIconProps> = memo(props => {
  return <BriefcaseCheckOutlineSvg {...props} />;
});
