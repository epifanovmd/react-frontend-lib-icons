import React, { FC, memo } from 'react';
import PenLockSvg from '../svg/pen-lock.svg';

export interface IPenLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PenLockIcon: FC<IPenLockIconProps> = memo(props => {
  return <PenLockSvg {...props} />;
});
