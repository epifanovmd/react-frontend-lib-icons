import React, { FC, memo } from 'react';
import LockOpenOutlineSvg from '../svg/lock-open-outline.svg';

export interface ILockOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockOpenOutlineIcon: FC<ILockOpenOutlineIconProps> = memo(props => {
  return <LockOpenOutlineSvg {...props} />;
});
