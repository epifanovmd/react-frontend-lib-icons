import React, { FC, memo } from 'react';
import SortAlphabeticalDescendingVariantSvg from '../svg/sort-alphabetical-descending-variant.svg';

export interface ISortAlphabeticalDescendingVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortAlphabeticalDescendingVariantIcon: FC<ISortAlphabeticalDescendingVariantIconProps> = memo(props => {
  return <SortAlphabeticalDescendingVariantSvg {...props} />;
});
