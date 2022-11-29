import React, { FC, memo } from 'react';
import MusicCircleOutlineSvg from '../svg/music-circle-outline.svg';

export interface IMusicCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicCircleOutlineIcon: FC<IMusicCircleOutlineIconProps> = memo(props => {
  return <MusicCircleOutlineSvg {...props} />;
});
