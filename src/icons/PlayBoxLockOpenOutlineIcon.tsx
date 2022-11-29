import React, { FC, memo } from 'react';
import PlayBoxLockOpenOutlineSvg from '../svg/play-box-lock-open-outline.svg';

export interface IPlayBoxLockOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlayBoxLockOpenOutlineIcon: FC<IPlayBoxLockOpenOutlineIconProps> = memo(props => {
  return <PlayBoxLockOpenOutlineSvg {...props} />;
});
