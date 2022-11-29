import React, { FC, memo } from 'react';
import PlayCircleOutlineSvg from '../svg/play-circle-outline.svg';

export interface IPlayCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlayCircleOutlineIcon: FC<IPlayCircleOutlineIconProps> = memo(props => {
  return <PlayCircleOutlineSvg {...props} />;
});
