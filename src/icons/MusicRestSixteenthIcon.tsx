import React, { FC, memo } from 'react';
import MusicRestSixteenthSvg from '../svg/music-rest-sixteenth.svg';

export interface IMusicRestSixteenthIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicRestSixteenthIcon: FC<IMusicRestSixteenthIconProps> = memo(props => {
  return <MusicRestSixteenthSvg {...props} />;
});
