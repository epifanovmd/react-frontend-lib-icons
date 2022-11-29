import React, { FC, memo } from 'react';
import BriefcaseVariantOutlineSvg from '../svg/briefcase-variant-outline.svg';

export interface IBriefcaseVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseVariantOutlineIcon: FC<IBriefcaseVariantOutlineIconProps> = memo(props => {
  return <BriefcaseVariantOutlineSvg {...props} />;
});
