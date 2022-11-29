import React, { FC, memo } from 'react';
import LockOpenVariantOutlineSvg from '../svg/lock-open-variant-outline.svg';

export interface ILockOpenVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockOpenVariantOutlineIcon: FC<ILockOpenVariantOutlineIconProps> = memo(props => {
  return <LockOpenVariantOutlineSvg {...props} />;
});
