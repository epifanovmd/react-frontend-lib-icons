import React, { FC, memo } from 'react';
import FolderFileSvg from '../svg/folder-file.svg';

export interface IFolderFileIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderFileIcon: FC<IFolderFileIconProps> = memo(props => {
  return <FolderFileSvg {...props} />;
});
