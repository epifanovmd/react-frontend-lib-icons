import React, { FC, memo } from 'react';
import BriefcaseVariantOffSvg from '../svg/briefcase-variant-off.svg';

export interface IBriefcaseVariantOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseVariantOffIcon: FC<IBriefcaseVariantOffIconProps> = memo(props => {
  return <BriefcaseVariantOffSvg {...props} />;
});
