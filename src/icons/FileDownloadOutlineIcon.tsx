import React, { FC, memo } from 'react';
import FileDownloadOutlineSvg from '../svg/file-download-outline.svg';

export interface IFileDownloadOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDownloadOutlineIcon: FC<IFileDownloadOutlineIconProps> = memo(props => {
  return <FileDownloadOutlineSvg {...props} />;
});
