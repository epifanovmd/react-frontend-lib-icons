import React, { FC, memo } from 'react';
import BriefcaseArrowUpDownSvg from '../svg/briefcase-arrow-up-down.svg';

export interface IBriefcaseArrowUpDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseArrowUpDownIcon: FC<IBriefcaseArrowUpDownIconProps> = memo(props => {
  return <BriefcaseArrowUpDownSvg {...props} />;
});
