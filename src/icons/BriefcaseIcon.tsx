import React, { FC, memo } from 'react';
import BriefcaseSvg from '../svg/briefcase.svg';

export interface IBriefcaseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseIcon: FC<IBriefcaseIconProps> = memo(props => {
  return <BriefcaseSvg {...props} />;
});
