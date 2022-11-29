import React, { FC, memo } from 'react';
import MusicNoteWholeSvg from '../svg/music-note-whole.svg';

export interface IMusicNoteWholeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicNoteWholeIcon: FC<IMusicNoteWholeIconProps> = memo(props => {
  return <MusicNoteWholeSvg {...props} />;
});
