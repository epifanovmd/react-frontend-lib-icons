import React, { FC, memo } from 'react';
import FolderTextOutlineSvg from '../svg/folder-text-outline.svg';

export interface IFolderTextOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderTextOutlineIcon: FC<IFolderTextOutlineIconProps> = memo(props => {
  return <FolderTextOutlineSvg {...props} />;
});
