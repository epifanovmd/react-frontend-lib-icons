import React, { FC, memo } from 'react';
import FolderSyncOutlineSvg from '../svg/folder-sync-outline.svg';

export interface IFolderSyncOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderSyncOutlineIcon: FC<IFolderSyncOutlineIconProps> = memo(props => {
  return <FolderSyncOutlineSvg {...props} />;
});
