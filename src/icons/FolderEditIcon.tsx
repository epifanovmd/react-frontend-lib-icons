import React, { FC, memo } from 'react';
import FolderEditSvg from '../svg/folder-edit.svg';

export interface IFolderEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderEditIcon: FC<IFolderEditIconProps> = memo(props => {
  return <FolderEditSvg {...props} />;
});
