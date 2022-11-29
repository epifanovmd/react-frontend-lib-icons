import React, { FC, memo } from 'react';
import MusicSvg from '../svg/music.svg';

export interface IMusicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicIcon: FC<IMusicIconProps> = memo(props => {
  return <MusicSvg {...props} />;
});
