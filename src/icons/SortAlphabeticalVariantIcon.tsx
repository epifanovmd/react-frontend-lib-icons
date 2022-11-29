import React, { FC, memo } from 'react';
import SortAlphabeticalVariantSvg from '../svg/sort-alphabetical-variant.svg';

export interface ISortAlphabeticalVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortAlphabeticalVariantIcon: FC<ISortAlphabeticalVariantIconProps> = memo(props => {
  return <SortAlphabeticalVariantSvg {...props} />;
});
