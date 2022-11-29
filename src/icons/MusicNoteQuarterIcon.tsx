import React, { FC, memo } from 'react';
import MusicNoteQuarterSvg from '../svg/music-note-quarter.svg';

export interface IMusicNoteQuarterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicNoteQuarterIcon: FC<IMusicNoteQuarterIconProps> = memo(props => {
  return <MusicNoteQuarterSvg {...props} />;
});
