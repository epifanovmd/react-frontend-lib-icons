import React, { FC, memo } from 'react';
import FlagVariantRemoveSvg from '../svg/flag-variant-remove.svg';

export interface IFlagVariantRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagVariantRemoveIcon: FC<IFlagVariantRemoveIconProps> = memo(props => {
  return <FlagVariantRemoveSvg {...props} />;
});
