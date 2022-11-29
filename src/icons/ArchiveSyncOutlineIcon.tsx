import React, { FC, memo } from 'react';
import ArchiveSyncOutlineSvg from '../svg/archive-sync-outline.svg';

export interface IArchiveSyncOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveSyncOutlineIcon: FC<IArchiveSyncOutlineIconProps> = memo(props => {
  return <ArchiveSyncOutlineSvg {...props} />;
});
