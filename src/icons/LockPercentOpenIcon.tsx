import React, { FC, memo } from 'react';
import LockPercentOpenSvg from '../svg/lock-percent-open.svg';

export interface ILockPercentOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockPercentOpenIcon: FC<ILockPercentOpenIconProps> = memo(props => {
  return <LockPercentOpenSvg {...props} />;
});
