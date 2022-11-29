import React, { FC, memo } from 'react';
import SortNumericDescendingVariantSvg from '../svg/sort-numeric-descending-variant.svg';

export interface ISortNumericDescendingVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortNumericDescendingVariantIcon: FC<ISortNumericDescendingVariantIconProps> = memo(props => {
  return <SortNumericDescendingVariantSvg {...props} />;
});
