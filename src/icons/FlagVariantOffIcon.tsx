import React, { FC, memo } from 'react';
import FlagVariantOffSvg from '../svg/flag-variant-off.svg';

export interface IFlagVariantOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagVariantOffIcon: FC<IFlagVariantOffIconProps> = memo(props => {
  return <FlagVariantOffSvg {...props} />;
});
