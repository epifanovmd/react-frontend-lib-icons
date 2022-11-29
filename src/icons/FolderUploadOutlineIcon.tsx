import React, { FC, memo } from 'react';
import FolderUploadOutlineSvg from '../svg/folder-upload-outline.svg';

export interface IFolderUploadOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderUploadOutlineIcon: FC<IFolderUploadOutlineIconProps> = memo(props => {
  return <FolderUploadOutlineSvg {...props} />;
});
