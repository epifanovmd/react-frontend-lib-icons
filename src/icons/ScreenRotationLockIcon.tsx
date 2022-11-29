import React, { FC, memo } from 'react';
import ScreenRotationLockSvg from '../svg/screen-rotation-lock.svg';

export interface IScreenRotationLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScreenRotationLockIcon: FC<IScreenRotationLockIconProps> = memo(props => {
  return <ScreenRotationLockSvg {...props} />;
});
