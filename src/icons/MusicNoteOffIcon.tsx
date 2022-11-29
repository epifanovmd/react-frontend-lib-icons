import React, { FC, memo } from 'react';
import MusicNoteOffSvg from '../svg/music-note-off.svg';

export interface IMusicNoteOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicNoteOffIcon: FC<IMusicNoteOffIconProps> = memo(props => {
  return <MusicNoteOffSvg {...props} />;
});
