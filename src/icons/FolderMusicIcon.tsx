import React, { FC, memo } from 'react';
import FolderMusicSvg from '../svg/folder-music.svg';

export interface IFolderMusicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderMusicIcon: FC<IFolderMusicIconProps> = memo(props => {
  return <FolderMusicSvg {...props} />;
});
