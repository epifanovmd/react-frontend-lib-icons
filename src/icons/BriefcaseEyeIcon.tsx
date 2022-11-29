import React, { FC, memo } from 'react';
import BriefcaseEyeSvg from '../svg/briefcase-eye.svg';

export interface IBriefcaseEyeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseEyeIcon: FC<IBriefcaseEyeIconProps> = memo(props => {
  return <BriefcaseEyeSvg {...props} />;
});
