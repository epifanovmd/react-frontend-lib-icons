import React, { FC, memo } from 'react';
import FolderSyncSvg from '../svg/folder-sync.svg';

export interface IFolderSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderSyncIcon: FC<IFolderSyncIconProps> = memo(props => {
  return <FolderSyncSvg {...props} />;
});
