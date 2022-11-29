import React, { FC, memo } from 'react';
import FlagVariantRemoveOutlineSvg from '../svg/flag-variant-remove-outline.svg';

export interface IFlagVariantRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagVariantRemoveOutlineIcon: FC<IFlagVariantRemoveOutlineIconProps> = memo(props => {
  return <FlagVariantRemoveOutlineSvg {...props} />;
});
