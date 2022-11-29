import React, { FC, memo } from 'react';
import ArchiveSvg from '../svg/archive.svg';

export interface IArchiveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveIcon: FC<IArchiveIconProps> = memo(props => {
  return <ArchiveSvg {...props} />;
});
