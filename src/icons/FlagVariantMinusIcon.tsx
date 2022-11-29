import React, { FC, memo } from 'react';
import FlagVariantMinusSvg from '../svg/flag-variant-minus.svg';

export interface IFlagVariantMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagVariantMinusIcon: FC<IFlagVariantMinusIconProps> = memo(props => {
  return <FlagVariantMinusSvg {...props} />;
});
