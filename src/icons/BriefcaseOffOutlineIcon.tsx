import React, { FC, memo } from 'react';
import BriefcaseOffOutlineSvg from '../svg/briefcase-off-outline.svg';

export interface IBriefcaseOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseOffOutlineIcon: FC<IBriefcaseOffOutlineIconProps> = memo(props => {
  return <BriefcaseOffOutlineSvg {...props} />;
});
