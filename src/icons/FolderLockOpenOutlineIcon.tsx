import React, { FC, memo } from 'react';
import FolderLockOpenOutlineSvg from '../svg/folder-lock-open-outline.svg';

export interface IFolderLockOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderLockOpenOutlineIcon: FC<IFolderLockOpenOutlineIconProps> = memo(props => {
  return <FolderLockOpenOutlineSvg {...props} />;
});
