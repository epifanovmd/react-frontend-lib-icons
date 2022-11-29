import React, { FC, memo } from 'react';
import BriefcaseArrowUpDownOutlineSvg from '../svg/briefcase-arrow-up-down-outline.svg';

export interface IBriefcaseArrowUpDownOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseArrowUpDownOutlineIcon: FC<IBriefcaseArrowUpDownOutlineIconProps> = memo(props => {
  return <BriefcaseArrowUpDownOutlineSvg {...props} />;
});
