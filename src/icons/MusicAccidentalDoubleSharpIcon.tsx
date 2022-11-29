import React, { FC, memo } from 'react';
import MusicAccidentalDoubleSharpSvg from '../svg/music-accidental-double-sharp.svg';

export interface IMusicAccidentalDoubleSharpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicAccidentalDoubleSharpIcon: FC<IMusicAccidentalDoubleSharpIconProps> = memo(props => {
  return <MusicAccidentalDoubleSharpSvg {...props} />;
});
