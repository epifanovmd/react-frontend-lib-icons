import React, { FC, memo } from 'react';
import BriefcasePlusSvg from '../svg/briefcase-plus.svg';

export interface IBriefcasePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcasePlusIcon: FC<IBriefcasePlusIconProps> = memo(props => {
  return <BriefcasePlusSvg {...props} />;
});
