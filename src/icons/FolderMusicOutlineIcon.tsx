import React, { FC, memo } from 'react';
import FolderMusicOutlineSvg from '../svg/folder-music-outline.svg';

export interface IFolderMusicOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderMusicOutlineIcon: FC<IFolderMusicOutlineIconProps> = memo(props => {
  return <FolderMusicOutlineSvg {...props} />;
});
