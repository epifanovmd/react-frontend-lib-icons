import React, { FC, memo } from 'react';
import FileExportSvg from '../svg/file-export.svg';

export interface IFileExportIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileExportIcon: FC<IFileExportIconProps> = memo(props => {
  return <FileExportSvg {...props} />;
});
