import React, { FC, memo } from 'react';
import SortBoolAscendingVariantSvg from '../svg/sort-bool-ascending-variant.svg';

export interface ISortBoolAscendingVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortBoolAscendingVariantIcon: FC<ISortBoolAscendingVariantIconProps> = memo(props => {
  return <SortBoolAscendingVariantSvg {...props} />;
});
