import React, { FC, memo } from 'react';
import PlayBoxLockSvg from '../svg/play-box-lock.svg';

export interface IPlayBoxLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlayBoxLockIcon: FC<IPlayBoxLockIconProps> = memo(props => {
  return <PlayBoxLockSvg {...props} />;
});
