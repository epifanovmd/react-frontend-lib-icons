import React, { FC, memo } from 'react';
import FolderTextSvg from '../svg/folder-text.svg';

export interface IFolderTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderTextIcon: FC<IFolderTextIconProps> = memo(props => {
  return <FolderTextSvg {...props} />;
});
