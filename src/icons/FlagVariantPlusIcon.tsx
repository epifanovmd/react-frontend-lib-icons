import React, { FC, memo } from 'react';
import FlagVariantPlusSvg from '../svg/flag-variant-plus.svg';

export interface IFlagVariantPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagVariantPlusIcon: FC<IFlagVariantPlusIconProps> = memo(props => {
  return <FlagVariantPlusSvg {...props} />;
});
