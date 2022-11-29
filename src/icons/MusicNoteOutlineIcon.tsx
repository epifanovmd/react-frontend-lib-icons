import React, { FC, memo } from 'react';
import MusicNoteOutlineSvg from '../svg/music-note-outline.svg';

export interface IMusicNoteOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicNoteOutlineIcon: FC<IMusicNoteOutlineIconProps> = memo(props => {
  return <MusicNoteOutlineSvg {...props} />;
});
