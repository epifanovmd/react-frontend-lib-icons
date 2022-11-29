import React, { FC, memo } from 'react';
import DoorClosedLockSvg from '../svg/door-closed-lock.svg';

export interface IDoorClosedLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DoorClosedLockIcon: FC<IDoorClosedLockIconProps> = memo(props => {
  return <DoorClosedLockSvg {...props} />;
});
