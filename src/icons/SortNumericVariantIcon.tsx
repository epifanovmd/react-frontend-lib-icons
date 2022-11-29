import React, { FC, memo } from 'react';
import SortNumericVariantSvg from '../svg/sort-numeric-variant.svg';

export interface ISortNumericVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortNumericVariantIcon: FC<ISortNumericVariantIconProps> = memo(props => {
  return <SortNumericVariantSvg {...props} />;
});
