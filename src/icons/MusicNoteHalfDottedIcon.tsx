import React, { FC, memo } from 'react';
import MusicNoteHalfDottedSvg from '../svg/music-note-half-dotted.svg';

export interface IMusicNoteHalfDottedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicNoteHalfDottedIcon: FC<IMusicNoteHalfDottedIconProps> = memo(props => {
  return <MusicNoteHalfDottedSvg {...props} />;
});
