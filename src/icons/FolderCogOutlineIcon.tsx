import React, { FC, memo } from 'react';
import FolderCogOutlineSvg from '../svg/folder-cog-outline.svg';

export interface IFolderCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderCogOutlineIcon: FC<IFolderCogOutlineIconProps> = memo(props => {
  return <FolderCogOutlineSvg {...props} />;
});
