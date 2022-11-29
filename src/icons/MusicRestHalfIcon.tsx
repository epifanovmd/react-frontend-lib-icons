import React, { FC, memo } from 'react';
import MusicRestHalfSvg from '../svg/music-rest-half.svg';

export interface IMusicRestHalfIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicRestHalfIcon: FC<IMusicRestHalfIconProps> = memo(props => {
  return <MusicRestHalfSvg {...props} />;
});
