import React, { FC, memo } from 'react';
import MusicAccidentalNaturalSvg from '../svg/music-accidental-natural.svg';

export interface IMusicAccidentalNaturalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicAccidentalNaturalIcon: FC<IMusicAccidentalNaturalIconProps> = memo(props => {
  return <MusicAccidentalNaturalSvg {...props} />;
});
