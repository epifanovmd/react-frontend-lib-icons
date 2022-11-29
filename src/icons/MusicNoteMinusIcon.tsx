import React, { FC, memo } from 'react';
import MusicNoteMinusSvg from '../svg/music-note-minus.svg';

export interface IMusicNoteMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicNoteMinusIcon: FC<IMusicNoteMinusIconProps> = memo(props => {
  return <MusicNoteMinusSvg {...props} />;
});
