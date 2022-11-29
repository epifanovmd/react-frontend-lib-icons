import React, { FC, memo } from 'react';
import BriefcaseMinusSvg from '../svg/briefcase-minus.svg';

export interface IBriefcaseMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseMinusIcon: FC<IBriefcaseMinusIconProps> = memo(props => {
  return <BriefcaseMinusSvg {...props} />;
});
