import React, { FC, memo } from 'react';
import ArrowVerticalLockSvg from '../svg/arrow-vertical-lock.svg';

export interface IArrowVerticalLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowVerticalLockIcon: FC<IArrowVerticalLockIconProps> = memo(props => {
  return <ArrowVerticalLockSvg {...props} />;
});
