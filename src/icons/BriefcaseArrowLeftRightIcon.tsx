import React, { FC, memo } from 'react';
import BriefcaseArrowLeftRightSvg from '../svg/briefcase-arrow-left-right.svg';

export interface IBriefcaseArrowLeftRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseArrowLeftRightIcon: FC<IBriefcaseArrowLeftRightIconProps> = memo(props => {
  return <BriefcaseArrowLeftRightSvg {...props} />;
});
