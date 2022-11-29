import React, { FC, memo } from 'react';
import FlagVariantOutlineSvg from '../svg/flag-variant-outline.svg';

export interface IFlagVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagVariantOutlineIcon: FC<IFlagVariantOutlineIconProps> = memo(props => {
  return <FlagVariantOutlineSvg {...props} />;
});
