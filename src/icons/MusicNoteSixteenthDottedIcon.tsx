import React, { FC, memo } from 'react';
import MusicNoteSixteenthDottedSvg from '../svg/music-note-sixteenth-dotted.svg';

export interface IMusicNoteSixteenthDottedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicNoteSixteenthDottedIcon: FC<IMusicNoteSixteenthDottedIconProps> = memo(props => {
  return <MusicNoteSixteenthDottedSvg {...props} />;
});
