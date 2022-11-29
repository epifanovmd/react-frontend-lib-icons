import React, { FC, memo } from 'react';
import MusicClefAltoSvg from '../svg/music-clef-alto.svg';

export interface IMusicClefAltoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicClefAltoIcon: FC<IMusicClefAltoIconProps> = memo(props => {
  return <MusicClefAltoSvg {...props} />;
});
