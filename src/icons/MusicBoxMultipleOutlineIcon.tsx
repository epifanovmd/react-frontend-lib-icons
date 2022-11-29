import React, { FC, memo } from 'react';
import MusicBoxMultipleOutlineSvg from '../svg/music-box-multiple-outline.svg';

export interface IMusicBoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicBoxMultipleOutlineIcon: FC<IMusicBoxMultipleOutlineIconProps> = memo(props => {
  return <MusicBoxMultipleOutlineSvg {...props} />;
});
