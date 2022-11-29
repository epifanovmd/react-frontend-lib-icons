import React, { FC, memo } from 'react';
import FileExcelSvg from '../svg/file-excel.svg';

export interface IFileExcelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileExcelIcon: FC<IFileExcelIconProps> = memo(props => {
  return <FileExcelSvg {...props} />;
});
