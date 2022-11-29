import React, { FC, memo } from 'react';
import FolderLockSvg from '../svg/folder-lock.svg';

export interface IFolderLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderLockIcon: FC<IFolderLockIconProps> = memo(props => {
  return <FolderLockSvg {...props} />;
});
