import React, { FC, memo } from 'react';
import MusicBoxOutlineSvg from '../svg/music-box-outline.svg';

export interface IMusicBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicBoxOutlineIcon: FC<IMusicBoxOutlineIconProps> = memo(props => {
  return <MusicBoxOutlineSvg {...props} />;
});
