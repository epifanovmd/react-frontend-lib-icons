import React, { FC, memo } from 'react';
import FlagVariantOffOutlineSvg from '../svg/flag-variant-off-outline.svg';

export interface IFlagVariantOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagVariantOffOutlineIcon: FC<IFlagVariantOffOutlineIconProps> = memo(props => {
  return <FlagVariantOffOutlineSvg {...props} />;
});
