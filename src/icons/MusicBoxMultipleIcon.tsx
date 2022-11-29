import React, { FC, memo } from 'react';
import MusicBoxMultipleSvg from '../svg/music-box-multiple.svg';

export interface IMusicBoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicBoxMultipleIcon: FC<IMusicBoxMultipleIconProps> = memo(props => {
  return <MusicBoxMultipleSvg {...props} />;
});
