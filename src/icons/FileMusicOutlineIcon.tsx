import React, { FC, memo } from 'react';
import FileMusicOutlineSvg from '../svg/file-music-outline.svg';

export interface IFileMusicOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileMusicOutlineIcon: FC<IFileMusicOutlineIconProps> = memo(props => {
  return <FileMusicOutlineSvg {...props} />;
});
