import React, { FC, memo } from 'react';
import FolderLockOpenSvg from '../svg/folder-lock-open.svg';

export interface IFolderLockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderLockOpenIcon: FC<IFolderLockOpenIconProps> = memo(props => {
  return <FolderLockOpenSvg {...props} />;
});
