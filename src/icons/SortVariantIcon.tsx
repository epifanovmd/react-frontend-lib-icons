import React, { FC, memo } from 'react';
import SortVariantSvg from '../svg/sort-variant.svg';

export interface ISortVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortVariantIcon: FC<ISortVariantIconProps> = memo(props => {
  return <SortVariantSvg {...props} />;
});
