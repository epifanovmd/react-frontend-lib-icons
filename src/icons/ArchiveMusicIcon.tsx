import React, { FC, memo } from 'react';
import ArchiveMusicSvg from '../svg/archive-music.svg';

export interface IArchiveMusicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveMusicIcon: FC<IArchiveMusicIconProps> = memo(props => {
  return <ArchiveMusicSvg {...props} />;
});
