import React, { FC, memo } from 'react';
import FileUploadOutlineSvg from '../svg/file-upload-outline.svg';

export interface IFileUploadOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileUploadOutlineIcon: FC<IFileUploadOutlineIconProps> = memo(props => {
  return <FileUploadOutlineSvg {...props} />;
});
