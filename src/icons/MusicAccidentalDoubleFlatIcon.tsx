import React, { FC, memo } from 'react';
import MusicAccidentalDoubleFlatSvg from '../svg/music-accidental-double-flat.svg';

export interface IMusicAccidentalDoubleFlatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicAccidentalDoubleFlatIcon: FC<IMusicAccidentalDoubleFlatIconProps> = memo(props => {
  return <MusicAccidentalDoubleFlatSvg {...props} />;
});
