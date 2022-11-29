import React, { FC, memo } from 'react';
import PlaylistRemoveSvg from '../svg/playlist-remove.svg';

export interface IPlaylistRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlaylistRemoveIcon: FC<IPlaylistRemoveIconProps> = memo(props => {
  return <PlaylistRemoveSvg {...props} />;
});
