import React, { FC, memo } from 'react';
import MusicClefTrebleSvg from '../svg/music-clef-treble.svg';

export interface IMusicClefTrebleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicClefTrebleIcon: FC<IMusicClefTrebleIconProps> = memo(props => {
  return <MusicClefTrebleSvg {...props} />;
});
