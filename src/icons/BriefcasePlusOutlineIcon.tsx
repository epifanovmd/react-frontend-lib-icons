import React, { FC, memo } from 'react';
import BriefcasePlusOutlineSvg from '../svg/briefcase-plus-outline.svg';

export interface IBriefcasePlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcasePlusOutlineIcon: FC<IBriefcasePlusOutlineIconProps> = memo(props => {
  return <BriefcasePlusOutlineSvg {...props} />;
});
