import React, { FC, memo } from 'react';
import PlayBoxLockOutlineSvg from '../svg/play-box-lock-outline.svg';

export interface IPlayBoxLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlayBoxLockOutlineIcon: FC<IPlayBoxLockOutlineIconProps> = memo(props => {
  return <PlayBoxLockOutlineSvg {...props} />;
});
