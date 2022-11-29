import React, { FC, memo } from 'react';
import MusicAccidentalSharpSvg from '../svg/music-accidental-sharp.svg';

export interface IMusicAccidentalSharpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicAccidentalSharpIcon: FC<IMusicAccidentalSharpIconProps> = memo(props => {
  return <MusicAccidentalSharpSvg {...props} />;
});
