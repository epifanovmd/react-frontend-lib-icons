import React, { FC, memo } from 'react';
import SortVariantOffSvg from '../svg/sort-variant-off.svg';

export interface ISortVariantOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortVariantOffIcon: FC<ISortVariantOffIconProps> = memo(props => {
  return <SortVariantOffSvg {...props} />;
});
