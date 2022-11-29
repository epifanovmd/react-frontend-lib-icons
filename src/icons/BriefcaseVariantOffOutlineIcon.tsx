import React, { FC, memo } from 'react';
import BriefcaseVariantOffOutlineSvg from '../svg/briefcase-variant-off-outline.svg';

export interface IBriefcaseVariantOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseVariantOffOutlineIcon: FC<IBriefcaseVariantOffOutlineIconProps> = memo(props => {
  return <BriefcaseVariantOffOutlineSvg {...props} />;
});
