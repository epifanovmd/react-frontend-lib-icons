import React, { FC, memo } from 'react';
import CapsLockSvg from '../svg/caps-lock.svg';

export interface ICapsLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CapsLockIcon: FC<ICapsLockIconProps> = memo(props => {
  return <CapsLockSvg {...props} />;
});
