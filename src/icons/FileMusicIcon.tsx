import React, { FC, memo } from 'react';
import FileMusicSvg from '../svg/file-music.svg';

export interface IFileMusicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileMusicIcon: FC<IFileMusicIconProps> = memo(props => {
  return <FileMusicSvg {...props} />;
});
