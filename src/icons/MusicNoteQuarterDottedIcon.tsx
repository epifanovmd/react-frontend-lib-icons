import React, { FC, memo } from 'react';
import MusicNoteQuarterDottedSvg from '../svg/music-note-quarter-dotted.svg';

export interface IMusicNoteQuarterDottedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicNoteQuarterDottedIcon: FC<IMusicNoteQuarterDottedIconProps> = memo(props => {
  return <MusicNoteQuarterDottedSvg {...props} />;
});
