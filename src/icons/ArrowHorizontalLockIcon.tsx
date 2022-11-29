import React, { FC, memo } from 'react';
import ArrowHorizontalLockSvg from '../svg/arrow-horizontal-lock.svg';

export interface IArrowHorizontalLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowHorizontalLockIcon: FC<IArrowHorizontalLockIconProps> = memo(props => {
  return <ArrowHorizontalLockSvg {...props} />;
});
