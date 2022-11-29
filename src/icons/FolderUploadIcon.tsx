import React, { FC, memo } from 'react';
import FolderUploadSvg from '../svg/folder-upload.svg';

export interface IFolderUploadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderUploadIcon: FC<IFolderUploadIconProps> = memo(props => {
  return <FolderUploadSvg {...props} />;
});
