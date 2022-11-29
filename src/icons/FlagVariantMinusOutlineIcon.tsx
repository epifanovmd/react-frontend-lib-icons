import React, { FC, memo } from 'react';
import FlagVariantMinusOutlineSvg from '../svg/flag-variant-minus-outline.svg';

export interface IFlagVariantMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagVariantMinusOutlineIcon: FC<IFlagVariantMinusOutlineIconProps> = memo(props => {
  return <FlagVariantMinusOutlineSvg {...props} />;
});
