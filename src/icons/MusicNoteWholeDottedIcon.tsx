import React, { FC, memo } from 'react';
import MusicNoteWholeDottedSvg from '../svg/music-note-whole-dotted.svg';

export interface IMusicNoteWholeDottedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicNoteWholeDottedIcon: FC<IMusicNoteWholeDottedIconProps> = memo(props => {
  return <MusicNoteWholeDottedSvg {...props} />;
});
