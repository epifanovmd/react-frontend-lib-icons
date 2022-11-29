import React, { FC, memo } from 'react';
import MusicRestWholeSvg from '../svg/music-rest-whole.svg';

export interface IMusicRestWholeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicRestWholeIcon: FC<IMusicRestWholeIconProps> = memo(props => {
  return <MusicRestWholeSvg {...props} />;
});
