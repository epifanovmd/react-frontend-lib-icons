import React, { FC, memo } from 'react';
import FolderCancelSvg from '../svg/folder-cancel.svg';

export interface IFolderCancelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderCancelIcon: FC<IFolderCancelIconProps> = memo(props => {
  return <FolderCancelSvg {...props} />;
});
