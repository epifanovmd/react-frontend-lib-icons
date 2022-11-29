import React, { FC, memo } from 'react';
import LockOpenVariantSvg from '../svg/lock-open-variant.svg';

export interface ILockOpenVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockOpenVariantIcon: FC<ILockOpenVariantIconProps> = memo(props => {
  return <LockOpenVariantSvg {...props} />;
});
