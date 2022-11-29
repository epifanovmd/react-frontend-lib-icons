import React, { FC, memo } from 'react';
import MusicOffSvg from '../svg/music-off.svg';

export interface IMusicOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicOffIcon: FC<IMusicOffIconProps> = memo(props => {
  return <MusicOffSvg {...props} />;
});
