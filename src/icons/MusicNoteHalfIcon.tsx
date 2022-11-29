import React, { FC, memo } from 'react';
import MusicNoteHalfSvg from '../svg/music-note-half.svg';

export interface IMusicNoteHalfIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicNoteHalfIcon: FC<IMusicNoteHalfIconProps> = memo(props => {
  return <MusicNoteHalfSvg {...props} />;
});
