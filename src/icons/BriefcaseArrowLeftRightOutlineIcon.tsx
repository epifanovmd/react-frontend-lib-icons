import React, { FC, memo } from 'react';
import BriefcaseArrowLeftRightOutlineSvg from '../svg/briefcase-arrow-left-right-outline.svg';

export interface IBriefcaseArrowLeftRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseArrowLeftRightOutlineIcon: FC<IBriefcaseArrowLeftRightOutlineIconProps> = memo(props => {
  return <BriefcaseArrowLeftRightOutlineSvg {...props} />;
});
