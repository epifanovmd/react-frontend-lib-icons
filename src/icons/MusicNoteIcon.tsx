import React, { FC, memo } from 'react';
import MusicNoteSvg from '../svg/music-note.svg';

export interface IMusicNoteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicNoteIcon: FC<IMusicNoteIconProps> = memo(props => {
  return <MusicNoteSvg {...props} />;
});
