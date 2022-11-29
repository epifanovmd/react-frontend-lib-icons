import React, { FC, memo } from 'react';
import FolderEditOutlineSvg from '../svg/folder-edit-outline.svg';

export interface IFolderEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderEditOutlineIcon: FC<IFolderEditOutlineIconProps> = memo(props => {
  return <FolderEditOutlineSvg {...props} />;
});
