import React, { FC, memo } from 'react';
import MusicNoteSixteenthSvg from '../svg/music-note-sixteenth.svg';

export interface IMusicNoteSixteenthIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicNoteSixteenthIcon: FC<IMusicNoteSixteenthIconProps> = memo(props => {
  return <MusicNoteSixteenthSvg {...props} />;
});
