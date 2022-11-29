import React, { FC, memo } from 'react';
import PlayPauseSvg from '../svg/play-pause.svg';

export interface IPlayPauseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlayPauseIcon: FC<IPlayPauseIconProps> = memo(props => {
  return <PlayPauseSvg {...props} />;
});
