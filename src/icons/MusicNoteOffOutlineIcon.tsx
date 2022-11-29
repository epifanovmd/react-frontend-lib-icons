import React, { FC, memo } from 'react';
import MusicNoteOffOutlineSvg from '../svg/music-note-off-outline.svg';

export interface IMusicNoteOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicNoteOffOutlineIcon: FC<IMusicNoteOffOutlineIconProps> = memo(props => {
  return <MusicNoteOffOutlineSvg {...props} />;
});
