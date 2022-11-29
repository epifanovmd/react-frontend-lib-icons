import React, { FC, memo } from 'react';
import PlaylistEditSvg from '../svg/playlist-edit.svg';

export interface IPlaylistEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlaylistEditIcon: FC<IPlaylistEditIconProps> = memo(props => {
  return <PlaylistEditSvg {...props} />;
});
