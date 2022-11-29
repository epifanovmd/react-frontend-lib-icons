import React, { FC, memo } from 'react';
import BriefcaseOutlineSvg from '../svg/briefcase-outline.svg';

export interface IBriefcaseOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseOutlineIcon: FC<IBriefcaseOutlineIconProps> = memo(props => {
  return <BriefcaseOutlineSvg {...props} />;
});
