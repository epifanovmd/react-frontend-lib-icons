import React, { FC, memo } from 'react';
import MusicBoxSvg from '../svg/music-box.svg';

export interface IMusicBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicBoxIcon: FC<IMusicBoxIconProps> = memo(props => {
  return <MusicBoxSvg {...props} />;
});
