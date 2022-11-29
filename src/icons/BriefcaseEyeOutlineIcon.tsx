import React, { FC, memo } from 'react';
import BriefcaseEyeOutlineSvg from '../svg/briefcase-eye-outline.svg';

export interface IBriefcaseEyeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseEyeOutlineIcon: FC<IBriefcaseEyeOutlineIconProps> = memo(props => {
  return <BriefcaseEyeOutlineSvg {...props} />;
});
