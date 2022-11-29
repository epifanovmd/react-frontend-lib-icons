import React, { FC, memo } from 'react';
import MusicNoteEighthDottedSvg from '../svg/music-note-eighth-dotted.svg';

export interface IMusicNoteEighthDottedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicNoteEighthDottedIcon: FC<IMusicNoteEighthDottedIconProps> = memo(props => {
  return <MusicNoteEighthDottedSvg {...props} />;
});
