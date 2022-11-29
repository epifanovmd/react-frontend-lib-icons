import React, { FC, memo } from 'react';
import SortVariantLockSvg from '../svg/sort-variant-lock.svg';

export interface ISortVariantLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SortVariantLockIcon: FC<ISortVariantLockIconProps> = memo(props => {
  return <SortVariantLockSvg {...props} />;
});
