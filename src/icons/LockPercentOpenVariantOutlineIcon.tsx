import React, { FC, memo } from 'react';
import LockPercentOpenVariantOutlineSvg from '../svg/lock-percent-open-variant-outline.svg';

export interface ILockPercentOpenVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockPercentOpenVariantOutlineIcon: FC<ILockPercentOpenVariantOutlineIconProps> = memo(props => {
  return <LockPercentOpenVariantOutlineSvg {...props} />;
});
