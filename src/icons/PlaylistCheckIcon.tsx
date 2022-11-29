import React, { FC, memo } from 'react';
import PlaylistCheckSvg from '../svg/playlist-check.svg';

export interface IPlaylistCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlaylistCheckIcon: FC<IPlaylistCheckIconProps> = memo(props => {
  return <PlaylistCheckSvg {...props} />;
});
