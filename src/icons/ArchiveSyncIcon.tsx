import React, { FC, memo } from 'react';
import ArchiveSyncSvg from '../svg/archive-sync.svg';

export interface IArchiveSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveSyncIcon: FC<IArchiveSyncIconProps> = memo(props => {
  return <ArchiveSyncSvg {...props} />;
});
