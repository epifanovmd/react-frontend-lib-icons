import React, { FC, memo } from 'react';
import MusicCircleSvg from '../svg/music-circle.svg';

export interface IMusicCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicCircleIcon: FC<IMusicCircleIconProps> = memo(props => {
  return <MusicCircleSvg {...props} />;
});
