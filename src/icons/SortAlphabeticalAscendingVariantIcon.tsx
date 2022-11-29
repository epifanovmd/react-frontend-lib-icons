import React, { FC, memo } from 'react';
import SortAlphabeticalAscendingVariantSvg from '../svg/sort-alphabetical-ascending-variant.svg';

export interface ISortAlphabeticalAscendingVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortAlphabeticalAscendingVariantIcon: FC<ISortAlphabeticalAscendingVariantIconProps> = memo(props => {
  return <SortAlphabeticalAscendingVariantSvg {...props} />;
});
