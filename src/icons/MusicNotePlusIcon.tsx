import React, { FC, memo } from 'react';
import MusicNotePlusSvg from '../svg/music-note-plus.svg';

export interface IMusicNotePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MusicNotePlusIcon: FC<IMusicNotePlusIconProps> = memo(props => {
  return <MusicNotePlusSvg {...props} />;
});
