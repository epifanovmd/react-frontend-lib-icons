import React, { FC, memo } from 'react';
import MusicClefBassSvg from '../svg/music-clef-bass.svg';

export interface IMusicClefBassIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicClefBassIcon: FC<IMusicClefBassIconProps> = memo(props => {
  return <MusicClefBassSvg {...props} />;
});
