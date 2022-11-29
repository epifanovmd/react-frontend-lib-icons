import React, { FC, memo } from 'react';
import FolderLockOutlineSvg from '../svg/folder-lock-outline.svg';

export interface IFolderLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderLockOutlineIcon: FC<IFolderLockOutlineIconProps> = memo(props => {
  return <FolderLockOutlineSvg {...props} />;
});
