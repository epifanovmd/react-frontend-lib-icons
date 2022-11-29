import React, { FC, memo } from 'react';
import FileUploadSvg from '../svg/file-upload.svg';

export interface IFileUploadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileUploadIcon: FC<IFileUploadIconProps> = memo(props => {
  return <FileUploadSvg {...props} />;
});
