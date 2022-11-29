import React, { FC, memo } from 'react';
import SortBoolDescendingVariantSvg from '../svg/sort-bool-descending-variant.svg';

export interface ISortBoolDescendingVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortBoolDescendingVariantIcon: FC<ISortBoolDescendingVariantIconProps> = memo(props => {
  return <SortBoolDescendingVariantSvg {...props} />;
});
