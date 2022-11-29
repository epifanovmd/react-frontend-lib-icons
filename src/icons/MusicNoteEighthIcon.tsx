import React, { FC, memo } from 'react';
import MusicNoteEighthSvg from '../svg/music-note-eighth.svg';

export interface IMusicNoteEighthIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicNoteEighthIcon: FC<IMusicNoteEighthIconProps> = memo(props => {
  return <MusicNoteEighthSvg {...props} />;
});
