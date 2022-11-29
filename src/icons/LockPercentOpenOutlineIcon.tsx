import React, { FC, memo } from 'react';
import LockPercentOpenOutlineSvg from '../svg/lock-percent-open-outline.svg';

export interface ILockPercentOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockPercentOpenOutlineIcon: FC<ILockPercentOpenOutlineIconProps> = memo(props => {
  return <LockPercentOpenOutlineSvg {...props} />;
});
