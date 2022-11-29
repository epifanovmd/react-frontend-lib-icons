import React, { FC, memo } from 'react';
import PlayCircleSvg from '../svg/play-circle.svg';

export interface IPlayCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlayCircleIcon: FC<IPlayCircleIconProps> = memo(props => {
  return <PlayCircleSvg {...props} />;
});
