import React, { FC, memo } from 'react';
import FlagVariantPlusOutlineSvg from '../svg/flag-variant-plus-outline.svg';

export interface IFlagVariantPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagVariantPlusOutlineIcon: FC<IFlagVariantPlusOutlineIconProps> = memo(props => {
  return <FlagVariantPlusOutlineSvg {...props} />;
});
