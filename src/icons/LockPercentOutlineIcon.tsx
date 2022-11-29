import React, { FC, memo } from 'react';
import LockPercentOutlineSvg from '../svg/lock-percent-outline.svg';

export interface ILockPercentOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockPercentOutlineIcon: FC<ILockPercentOutlineIconProps> = memo(props => {
  return <LockPercentOutlineSvg {...props} />;
});
