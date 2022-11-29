import React, { FC, memo } from 'react';
import PlayBoxLockOpenSvg from '../svg/play-box-lock-open.svg';

export interface IPlayBoxLockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlayBoxLockOpenIcon: FC<IPlayBoxLockOpenIconProps> = memo(props => {
  return <PlayBoxLockOpenSvg {...props} />;
});
