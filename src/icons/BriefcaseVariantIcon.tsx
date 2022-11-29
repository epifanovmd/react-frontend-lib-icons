import React, { FC, memo } from 'react';
import BriefcaseVariantSvg from '../svg/briefcase-variant.svg';

export interface IBriefcaseVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseVariantIcon: FC<IBriefcaseVariantIconProps> = memo(props => {
  return <BriefcaseVariantSvg {...props} />;
});
