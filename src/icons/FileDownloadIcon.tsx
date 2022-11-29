import React, { FC, memo } from 'react';
import FileDownloadSvg from '../svg/file-download.svg';

export interface IFileDownloadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDownloadIcon: FC<IFileDownloadIconProps> = memo(props => {
  return <FileDownloadSvg {...props} />;
});
