import React, { FC, memo } from 'react';
import SortVariantLockOpenSvg from '../svg/sort-variant-lock-open.svg';

export interface ISortVariantLockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortVariantLockOpenIcon: FC<ISortVariantLockOpenIconProps> = memo(props => {
  return <SortVariantLockOpenSvg {...props} />;
});
