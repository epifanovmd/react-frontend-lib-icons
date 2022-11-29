import React, { FC, memo } from 'react';
import LockPercentOpenVariantSvg from '../svg/lock-percent-open-variant.svg';

export interface ILockPercentOpenVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockPercentOpenVariantIcon: FC<ILockPercentOpenVariantIconProps> = memo(props => {
  return <LockPercentOpenVariantSvg {...props} />;
});
