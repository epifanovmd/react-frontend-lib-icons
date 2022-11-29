import React, { FC, memo } from 'react';
import FileExcelBoxSvg from '../svg/file-excel-box.svg';

export interface IFileExcelBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileExcelBoxIcon: FC<IFileExcelBoxIconProps> = memo(props => {
  return <FileExcelBoxSvg {...props} />;
});
