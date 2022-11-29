import React, { FC, memo } from 'react';
import SortReverseVariantSvg from '../svg/sort-reverse-variant.svg';

export interface ISortReverseVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortReverseVariantIcon: FC<ISortReverseVariantIconProps> = memo(props => {
  return <SortReverseVariantSvg {...props} />;
});
