import React, { FC, memo } from 'react';
import ArchiveMusicOutlineSvg from '../svg/archive-music-outline.svg';

export interface IArchiveMusicOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveMusicOutlineIcon: FC<IArchiveMusicOutlineIconProps> = memo(props => {
  return <ArchiveMusicOutlineSvg {...props} />;
});
