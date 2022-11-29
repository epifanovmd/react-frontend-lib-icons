import React, { FC, memo } from 'react';
import SortVariantRemoveSvg from '../svg/sort-variant-remove.svg';

export interface ISortVariantRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortVariantRemoveIcon: FC<ISortVariantRemoveIconProps> = memo(props => {
  return <SortVariantRemoveSvg {...props} />;
});
