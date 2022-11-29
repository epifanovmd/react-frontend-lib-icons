import React, { FC, memo } from 'react';
import SortNumericAscendingVariantSvg from '../svg/sort-numeric-ascending-variant.svg';

export interface ISortNumericAscendingVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortNumericAscendingVariantIcon: FC<ISortNumericAscendingVariantIconProps> = memo(props => {
  return <SortNumericAscendingVariantSvg {...props} />;
});
