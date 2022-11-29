import React, { FC, memo } from 'react';
import MusicAccidentalFlatSvg from '../svg/music-accidental-flat.svg';

export interface IMusicAccidentalFlatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicAccidentalFlatIcon: FC<IMusicAccidentalFlatIconProps> = memo(props => {
  return <MusicAccidentalFlatSvg {...props} />;
});
