import React, { FC, memo } from 'react';
import FileExportOutlineSvg from '../svg/file-export-outline.svg';

export interface IFileExportOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileExportOutlineIcon: FC<IFileExportOutlineIconProps> = memo(props => {
  return <FileExportOutlineSvg {...props} />;
});
